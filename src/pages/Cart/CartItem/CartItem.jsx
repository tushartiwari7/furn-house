import React from "react";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import "./CartItem.css";
import { useUser } from "context";
import { getDiscountPercentage } from "utils";

export const CartItem = (product) => {
  const {
    updateQuantity, // add/subtract cart items
    removeFromCart, // delete cart item
    addToWishListHandler, // add to wishlist
  } = useUser();

  const moveToWishlistHandler = async (product) =>
    await Promise.allSettled([
      removeFromCart(product._id),
      addToWishListHandler(product),
    ]);

  return (
    <section className="card cart-item my-sm full-width flex-row">
      <img
        className="cart-item-img"
        src={product.img}
        height="100%"
        alt="card image"
      />
      <div className="card-content pos-rel flex flex-col px-sm py-xs fs-m">
        <Link to={`/products/${product.id}`}>
          <p className="fs-s ubuntu">{product.categoryName}</p>
          <h3 className="fw-lighter font-bebas h3">{product.title}</h3>
        </Link>
        <h3 className="h3 price pos-abs product-offer-price cart-item-price">
          ₹{product.offer_price}
          <span className="fs-s fw-regular product-original-price">
            ₹{product.price}
          </span>
        </h3>
        <div>
          <label className="fs-s">{product.sub_title}</label>
          <h3 className="discount h4">
            {getDiscountPercentage(product.price, product.offer_price)}% off
          </h3>
        </div>
        <div className="product-qty flex">
          <button
            className="btn-minus btn nav-icon fs-m flex flex-center"
            title={product.qty === 1 ? "Remove from cart" : "Decrease Quantity"}
            onClick={() =>
              product.qty <= 1
                ? removeFromCart(product._id)
                : updateQuantity(product._id, "decrement")
            }
          >
            {product.qty === 1 ? <BsTrash color="var(--text-color)" /> : `-`}
          </button>
          <p className="flex flex-center btn nav-icon fs-m">{product.qty}</p>
          <button
            className="btn-plus btn nav-icon fs-m"
            onClick={() => updateQuantity(product._id, "increment")}
            title="Add One more item to cart"
          >
            +{" "}
          </button>
        </div>
        <div className="flex flex-row mx-sm pos-abs cart-btns">
          <i
            className="p-xs pointer"
            onClick={() => moveToWishlistHandler(product)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19 16"
              width="21"
              height="21"
            >
              <title>Move to Wishlist</title>
              <g fill="none" fillRule="evenodd" opacity=".499">
                <path d="M-2-4h24v24H-2z"></path>
                <path
                  fill="#000"
                  fillRule="nonzero"
                  stroke="#000"
                  strokeWidth=".4"
                  d="M13.92.801a4.67 4.67 0 0 1 4.694 4.647c.017 3.086-2.295 6.018-5.777 8.62l-.534-.714c3.273-2.445 5.435-5.187 5.42-7.901a3.78 3.78 0 0 0-3.799-3.76 3.766 3.766 0 0 0-3.082 1.63l-.361.521-.368-.517a3.77 3.77 0 0 0-3.1-1.6 3.781 3.781 0 0 0-3.76 3.8c.002.313.036.633.1.965l-.874.17a6.061 6.061 0 0 1-.117-1.13A4.672 4.672 0 0 1 7.01.837a4.65 4.65 0 0 1 3.464 1.519A4.647 4.647 0 0 1 13.92.801zM8.458 12.517H1v-1.069h7.636l-2.49-2.49.63-.63 3.565 3.566-3.565 3.566-.63-.63 2.312-2.313z"
                ></path>
              </g>
            </svg>
          </i>
          <i
            className="pointer p-xs"
            onClick={() => removeFromCart(product._id)}
          >
            <BsTrash size="2rem" />
          </i>
        </div>
      </div>
    </section>
  );
};
