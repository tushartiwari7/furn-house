import React from "react";
export const ProductCard = ({
  img,
  title,
  sub_title,
  offer_price,
  price,
  description,
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
        <div className="card-description">{description}</div>
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
