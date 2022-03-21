import React from "react";
import { BsStarFill, BsCart2, BsHeart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useUser } from "../../context";
import { addToCart } from "../../services";
export const ProductCard = (product) => {
  const {
    img,
    title,
    sub_title,
    offer_price,
    price,
    description,
    rating,
    _id,
  } = product;
  const { user, setUser } = useUser();
  const isInCart =
    user.isLoggedIn && user.cart.find((item) => item._id === _id);
  const navigator = useNavigate();

  const cartHandler = async () => {
    if (!user.isLoggedIn) return alert("Please Login to add items to cart");
    const { cart, status } = await addToCart(product);
    console.log(cart, status);
    setUser((user) => ({ ...user, cart }));
  };

  const goToCart = () => {
    navigator("/cart");
  };

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
          {description.length > 100
            ? `${description.slice(0, 110)}...`
            : description}
        </div>
      </div>

      <div className="flex flex-row card-feedback py-xs">
        <button
          className={`btn ${
            isInCart ? "btn-primary" : "btn-success"
          } btn-cart rounded-s fs-sm grow p-xs flex`}
          onClick={isInCart ? goToCart : cartHandler}
        >
          {isInCart ? "GO TO CART" : "ADD TO CART"}
          <BsCart2 className="fs-m" />
        </button>
        <button className="btn btn-icon rounded-circle favorite btn-outline-secondary p-xs ">
          <BsHeart />
        </button>
      </div>
    </section>
  );
};
