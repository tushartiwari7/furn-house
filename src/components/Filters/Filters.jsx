import React from "react";

export const Filters = () => {
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
        <div className="my-xs pointer">
          <input type="checkbox" id="armora" name="armora" />
          <label htmlFor="armora" className="mx-sm fs-s">
            Armora
          </label>
        </div>
        <div className="my-xs pointer">
          <input type="checkbox" id="lexus" name="lexus" />
          <label htmlFor="lexus" className="mx-sm fs-s">
            Lexus
          </label>
        </div>
        <div className="my-xs pointer">
          <input type="checkbox" id="crystal" name="crystal" />
          <label htmlFor="crystal" className="mx-sm fs-s">
            Crystal
          </label>
        </div>
        <div className="my-xs pointer">
          <input type="checkbox" id="Kook" name="Kook" />
          <label htmlFor="Kook" className="mx-sm fs-s">
            Kook
          </label>
        </div>
      </ul>
      <h5 className="my-md h4">Rating</h5>
      <ul className="list m-md flex flex-col">
        <div className="my-xs  pointer">
          <input type="radio" id="5star" name="rating" />
          <label htmlFor="5star" className="mx-sm fs-s">
            5 Star or above
          </label>
        </div>
        <div className="my-xs pointer">
          <input type="radio" id="4Star" name="rating" />
          <label htmlFor="4Star" className="mx-sm fs-s">
            4 Star or above
          </label>
        </div>
        <div className="my-xs pointer">
          <input type="radio" id="3Star" name="rating" />
          <label htmlFor="3Star" className="mx-sm fs-s">
            3 Star or above
          </label>
        </div>
        <div className="my-xs pointer">
          <input type="radio" id="2Star" name="rating" />
          <label htmlFor="2Star" className="mx-sm fs-s">
            2 Star or above
          </label>
        </div>
        <div className="my-xs pointer">
          <input type="radio" id="1Star" name="rating" />
          <label htmlFor="1Star" className="mx-sm fs-s">
            1 Star or above
          </label>
        </div>
      </ul>
    </aside>
  );
};
