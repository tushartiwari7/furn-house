import React from "react";
import { AddressList } from "../../../components";

export const Checkout = () => {
  return (
    <>
      <h2 className="cart-title h3 fs-xl fw-lighter font-bebas p-xs">
        Deliver To:
      </h2>
      <AddressList />
    </>
  );
};
