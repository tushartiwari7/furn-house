import React from "react";
import { BsStarFill } from "react-icons/bs";
import { v4 as uuid } from "uuid";

export const ProductCard = ({
  img,
  title,
  sub_title,
  offer_price,
  price,
  description,
  rating,
}) => {
  return (
    <section className="card ">
      <div className="flex flex-col pos-rel">
        <img className="card-img" src={img} alt={title} />
        <div className="card-content flex flex-col p-sm pos-abs fs-m">
          <h3 className="card-title">{title}</h3>
          <label className="card-author">{sub_title}</label>
        </div>
      </div>
      <div className="card-desc fs-s p-xs">
        <div>
          <span className="h3">₹{offer_price}</span>
          <span className="fs-m mx-xs strikethrough">₹{price}</span>
        </div>
        <div className="my-xs">
          {[...Array(Number(rating))].map(() => (
            <BsStarFill className="mx-xs" key={uuid()} />
          ))}
        </div>
        <div className="card-description">
          {description.length > 100 ? `${description.slice(0, 110)}...` : description}
        </div>
      </div>

      <div className="flex flex-row card-feedback py-xs">
        <button className="btn btn-success btn-cart rounded-s fs-sm grow p-xs flex  ">
          ADD TO CART
          <i className="bi bi-cart"></i>
        </button>
        <button className="btn btn-icon rounded-circle favorite btn-outline-secondary p-xs ">
          <i className="bi bi-heart"></i>
        </button>
      </div>
    </section>
  );
};
