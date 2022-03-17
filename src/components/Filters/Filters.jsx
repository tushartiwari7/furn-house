import {useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useProductCategory, useProducts } from "../../context";
export const Filters = () => {
  const categories = useProductCategory();

  const [params] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState([params.get('categoryName')]);
  console.log(selectedCategory);
  const handleCategoryChange = (e) => {
    if(e.target.checked) {
      return setSelectedCategory([...selectedCategory, e.target.value]);
    }
    return setSelectedCategory(selectedCategory.filter(category => category !== e.target.value));
  }

  useEffect(() => {
    dispatch({type: "SET_CATEGORY", payload: selectedCategory});
  }, [selectedCategory]);

  const {
    filters: { priceFilterValue,ratingFilterValue },
    dispatch,
  } = useProducts();

  const onSortIncrease = () =>
    dispatch({ type: "SORT", payload: "increasing" });

  const onSortDecrease = () =>
    dispatch({ type: "SORT", payload: "decreasing" });

  const onPriceFilterChange = (e) =>
    dispatch({ type: "PRICE_FILTER", payload: e.target.value });

  const onRatingFilterChange = (rating) =>
    dispatch({ type: "RATING_FILTER", payload: rating });

  return (
    <aside className="sidebar p-sm" id="sidebar">
      <h5 className="my-md h4">Filter by Price</h5>
      <ul className="list m-md flex flex-col">
        <div className="my-xs  pointer">
          <input
            type="range"
            min="5000"
            max="150000"
            step="5000"
            defaultValue={priceFilterValue}
            onChange={onPriceFilterChange}
          />
          <p className="fs-m my-xs">Price : {priceFilterValue} </p>
        </div>
      </ul>
      <h5 className="my-md h4">Sort by</h5>
      <ul className="list m-md flex flex-col">
        <div className="my-xs">
          <input type="radio" id="high" name="sort" onChange={onSortDecrease} />
          <label htmlFor="high" className="mx-sm fs-s pointer">
            High to Low
          </label>
        </div>
        <div className="my-xs">
          <input type="radio" id="low" name="sort" onChange={onSortIncrease} />
          <label htmlFor="low" className="mx-sm fs-s pointer">
            Low to High
          </label>
        </div>
      </ul>
      <h5 className="my-md h4">Category</h5>
      <ul className="list m-md flex flex-col">
        {categories.map(({ _id, categoryName }) => {
          return (
            <div key={_id} className="my-xs">
              <input
                type="checkbox"
                id={_id}
                name={categoryName}
                value={categoryName}
                checked={selectedCategory.includes(categoryName)}
                onChange={handleCategoryChange}
              />  
              <label htmlFor={_id} className="mx-sm fs-s pointer">
                {categoryName}
              </label>
            </div>
          );
        })}
      </ul>
      <h5 className="my-md h4">Rating</h5>
      <ul className="list m-md flex flex-col">
        {[5, 4, 3, 2, 1].map((rating) => {
          return (
            <div key={uuid()} className="my-xs pointer">
              <input type="radio" id={`${rating}star`} name="rating"
              checked={ratingFilterValue === rating}
              onChange={() => onRatingFilterChange(rating)}
              />
              <label htmlFor={`${rating}star`} className="mx-sm fs-s pointer">
              {rating===1 ? `All Products` : `${rating} Star ${rating === 5 ? "only" : "or above"}`}
              </label>
            </div>
          );
        })}
      </ul>
    </aside>
  );
};
