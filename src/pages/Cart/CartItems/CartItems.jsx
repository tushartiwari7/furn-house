import React from "react";
import { useUser } from "../../../context";
import { CartItem } from "../CartItem/CartItem";
import { BsPrinter } from "react-icons/bs";
import { getCartSummary } from "../../../utils";
export const CartItems = () => {
  const {
    user: { cart },
  } = useUser();
  const { items } = getCartSummary(cart ?? []);
  return (
    <>
      <h2 className="cart-title h3 fs-xl fw-lighter font-bebas p-xs">
        Your Cart
        <span className="fs-l font-bebas fw-light px-xs">{items} items</span>
        <i className="mx-sm pointer" onClick={() => window.print()}>
          <BsPrinter size="2rem" />
        </i>
      </h2>
      {cart.length &&
        cart.map((product) => <CartItem key={product._id} {...product} />)}
    </>
  );
};
