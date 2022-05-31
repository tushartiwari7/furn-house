import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Success.css";
export const Success = () => {
  return (
    <section className="flex flex-center">
      <div className="container flex flex-center flex-col rounded-m p-md">
        <BsPatchCheckFill size={40} />
        <h2 className="h2 font-bebas p-xs fw-lighter">Order Confirmed</h2>
        <p className="fs-m fw-lighter my-xs">
          Your order has been placed successfully.
        </p>
        <div className="my-sm">
          <Link
            to="/products"
            className="btn btn-cta-secondary fs-l fw-lighter px-sm py-xs mx-xs font-bebas"
            replace
          >
            Continue Shopping
          </Link>
          <Link
            to="/myAccount/orders"
            className="btn btn-cta fs-l fw-lighter px-sm py-xs mx-xs font-bebas"
            replace
          >
            View orders
          </Link>
        </div>
      </div>
    </section>
  );
};
