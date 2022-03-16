import React from "react";
import {v4 as uuid} from "uuid";
import { useProductCategory } from "../../context";
export const Filters = () => {
  const categories = useProductCategory();
  console.log(categories);
  return (
    <aside className="sidebar p-sm" id="sidebar">
      <h5 className="my-md h4">Filter by Price</h5>
      <ul className="list m-md flex flex-col">
        <div className="my-xs  pointer">
          <input type="range" min="1000" max="50000" defaultValue="50000" list="pricerange" />
        </div>
      </ul>
      <h5 className="my-md h4">Sort by</h5>
      <ul className="list m-md flex flex-col">
        <div className="my-xs  pointer">
          <input type="radio" id="high" name="sort" value="" />
          <label htmlFor="high" className="mx-sm fs-s">
            High to Low
          </label>
        </div>
        <div className="my-xs  pointer">
          <input type="radio" id="low" name="sort" value="" />
          <label htmlFor="low" className="mx-sm fs-s">
            Low to High
          </label>
        </div>
      </ul>
      <h5 className="my-md h4">Category</h5>
      <ul className="list m-md flex flex-col">
        {categories.map(({ _id, categoryName }) => {
          return (
            <div key={_id} className="my-xs pointer">
              <input type="checkbox" id={_id} name={categoryName} value={categoryName} />
              <label htmlFor={_id} className="mx-sm fs-s">
                {categoryName}
              </label>
            </div>
          );
        })}
      </ul>
      <h5 className="my-md h4">Rating</h5>
      <ul className="list m-md flex flex-col">
        {[5,4,3,2,1].map(i => {
          return <div key={uuid()} className="my-xs pointer">
          <input type="radio" id={`${i}star`} name="rating" />
          <label htmlFor={`${i}star`} className="mx-sm fs-s pointer">
            {i} Star {i===5 ? "only" : `or above`}
          </label>
        </div>
        })}
      </ul>
    </aside>
  );
};
