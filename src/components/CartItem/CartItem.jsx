import React from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { updateCartQty, deleteCartItem } from "../../services";
import { getDiscountPercentage } from "../../utils";
getDiscountPercentage;
import { useUser } from "../../context";

export const CartItem = (product) => {
  const { setUser } = useUser();

  const cartQtyHandler = async (type) => {
    const { cart } = await updateCartQty(product._id, type === "increment");
    setUser((user) => ({ ...user, cart }));
  };

  const deleteItemHandler = async () => {
    const { cart } = await deleteCartItem(product._id);
    setUser((user) => ({ ...user, cart }));
  };

  return (
    <section className="card my-sm">
      <div className="flex">
        <div className="cart-item-img">
          <img
            src={product.img}
            alt="card image"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="card-content card-horizontal flex flex-col p-xs fs-m">
          <h3 className="card-title fw-semibold">{product.title}</h3>
          <label className="card-author fw-regular">{product.sub_title}</label>
          <h3 className="h3 price">
            ₹{product.offer_price}{" "}
            <span className="fs-m fw-regular px-xs strikethrough">
              ₹{product.price}
            </span>
          </h3>
          <h3 className="discount h4">
            {getDiscountPercentage(product.price, product.offer_price)}% off
          </h3>
          <div className="cart-form-qty my-xs">
            <button
              className="btn rounded-circle btn-outline-primary"
              onClick={() =>
                product.qty <= 1
                  ? deleteItemHandler()
                  : cartQtyHandler("decrement")
              }
            >
              <BsDash className="react-icon pos-rel" />
            </button>
            <input
              className="text-center rounded-circle mx-xs"
              type="number"
              value={product.qty}
              min={1}
              readOnly
            />
            <button
              className="btn rounded-circle btn-outline-primary"
              onClick={() => cartQtyHandler("increment")}
            >
              <BsPlus className="react-icon pos-rel" />
            </button>
          </div>
          <div className="flex flex-row mx-sm cart-btns">
            <button className="btn btn-outline-primary rounded-s px-sm py-xs mx-xs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19 16"
                width="19"
                height="19"
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
            </button>
            <button
              className="btn btn-outline-error rounded-s px-sm py-xs"
              onClick={deleteItemHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 18"
                width="15"
                height="17"
              >
                <title>Delete</title>
                <g fill="none" fillRule="evenodd" opacity=".7">
                  <path d="M-4-3h24v24H-4z"></path>
                  <path
                    fill="#000"
                    fillRule="nonzero"
                    d="M12 2.5h4v1.2h-1.5v13.8h-13V3.7H0V2.5h4v-2h8v2zm-1 0v-1H5v1h6zm2.5 1.2h-11v12.8h11V3.7zM10.842 5h1.2v10h-1.2V5zM7.42 5h1.2v10h-1.2V5zM4 5h1.2v10H4V5z"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
