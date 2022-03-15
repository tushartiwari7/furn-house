import React from "react";
import { BsFillCartFill, BsHeart } from "react-icons/bs";
import './Card.css';

export const Card = ({
  title,
  img,
  sub_title,
  offer_price,
  price,
  description,
}) => {
  return (
    <section className="card">
      <div className="flex flex-col pos-rel">
        <img className="card-img" width="100%" src={img} alt={title} />
        <div className="card-content flex flex-col p-sm pos-abs fs-m">
          <h3 className="card-title">{title}</h3>
          <label className="card-author">{sub_title}</label>
        </div>
      </div>
      <div className="card-desc fs-s p-xs">
        <div>
          <span className="h3">₹ {offer_price}</span>
          <span className="fs-m mx-xs strikethrough">₹ {price}</span>
        </div>
        <div className="card-description">{description}</div>
      </div>
      <div className="flex flex-row card-feedback p-xs">
        <button className="btn btn-success btn-cart flex rounded-s fs-m grow px-sm py-xs">
          ADD TO CART
          <BsFillCartFill />
        </button>
        <button className="btn btn-icon rounded-circle btn-outline-secondary flex flex-center fs-m">
          <BsHeart />
        </button>
      </div>
    </section>
  );
};
