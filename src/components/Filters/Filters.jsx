import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { BsX, BsStar, BsFillStarFill } from "react-icons/bs";
import { useProductCategory, useProducts } from "context";
import "./Filters.css";

export const Filters = ({ isSidebarOpen, setSidebarOpen }) => {
  const categories = useProductCategory();
  const [params] = useSearchParams();
  const isCategoryParam = params.get("categoryName");

  const handleCategoryChange = (categoryName) => {
    toast("Updated Selected Categories");
    dispatch({ type: "SET_CATEGORY", payload: categoryName });
  };

  useEffect(() => {
    if (isCategoryParam)
      dispatch({ type: "SET_CATEGORY", payload: isCategoryParam });
    // if user navigates to any other route  other than /products this cleanup should work
    return () => dispatch({ type: "RESET_FILTERS" });
  }, []);

  const {
    filters: {
      priceFilterValue,
      ratingFilterValue,
      selectedCategory: selected,
    },
    dispatch,
  } = useProducts();
  const onPriceFilterChange = (e) =>
    dispatch({ type: "PRICE_FILTER", payload: e.target.value });

  const onRatingFilterChange = (rating) => {
    toast(
      rating === 1
        ? `Rating Filter Resetted`
        : `Showing ${rating} Star or above products`,
      {
        icon: <BsStar />,
      }
    );
    dispatch({ type: "RATING_FILTER", payload: rating });
  };
  return (
    <>
      <form
        className={`sidebar m-sm rounded-s ${
          isSidebarOpen ? "open-sidebar" : ""
        }`}
        id="sidebar"
      >
        <div className="pos-abs sidebar-heading font-bebas fs-xl full-width">
          All Filters
        </div>
        <div
          className="p-sm font-bebas fs-m pointer clear-filter-btn"
          onClick={() => {
            toast("Resetted All Filters", { icon: "✨" });
            dispatch({ type: "RESET_FILTERS" });
          }}
        >
          Clear Filters
        </div>
        <div className="p-sm font-bebas fs-m">
          Filter by Price
          <span className="fs-s ubuntu">
            &nbsp;
            {priceFilterValue && ` :${priceFilterValue}`}
          </span>
          <div className="m-sm pointer">
            <input
              type="range"
              max="10000"
              step="500"
              className="price-filter-slider full-width rounded-circle"
              defaultValue={priceFilterValue}
              onChange={onPriceFilterChange}
            />
          </div>
        </div>
        <div className="p-sm font-bebas fs-m">
          Category
          <ul className="list m-md flex flex-col">
            {categories.map(({ _id, categoryName }) => {
              return (
                <div key={_id} className="category-item">
                  <input
                    type="checkbox"
                    id={_id}
                    name={categoryName}
                    value={categoryName}
                    checked={selected[categoryName] === true}
                    onChange={() => handleCategoryChange(categoryName)}
                  />
                  <label htmlFor={_id} className="mx-sm fs-s pointer">
                    {categoryName}
                  </label>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="p-sm font-bebas fs-m">
          Rating
          <ul className="list my-md flex wrap rating">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div
                key={uuid()}
                title={
                  rating === 5
                    ? "Only 5 Star Products"
                    : `${rating} Star and above`
                }
                className={`p-xs my-xs pointer flex flex-center rating-chip rounded-circle fs-s ${
                  ratingFilterValue === rating ? "rating-selected" : ""
                }`}
                onClick={() => onRatingFilterChange(rating)}
              >
                {[...Array(rating)].map(() => (
                  <BsFillStarFill color="var(--primary)" key={uuid()} />
                ))}
                {rating === 5 ? "Only" : "&up"}
              </div>
            ))}
          </ul>
        </div>
      </form>
      <div
        className={`sidebar-bg ${isSidebarOpen ? "sidebar-bg-open" : ""}`}
        onClick={() => setSidebarOpen(false)}
      >
        <i className="close-icon">
          <BsX color="var(--bg-primary)" size="5rem" />
        </i>
      </div>
    </>
  );
};
