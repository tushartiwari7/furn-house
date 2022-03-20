import React from "react";
import "./Cart.css";
import { CartItem } from "../../components";
export const Cart = () => {
  return (
    <>
      <main className="main flex cart-page">
        <section className="cart-items flex flex-col px-xs">
          <h2 className="cart-title h3 ubuntu p-xs">
            Your Cart <span className="fs-m fw-regular px-xs">4 items</span>
          </h2>
          <CartItem />
          <CartItem />
        </section>
        <section className="cart-summary px-xs">
          <h2 className="cart-title h3 ubuntu p-xs">Cart Summary</h2>

          <section class="card p-sm flex checkout">
            <p class="h4 py-xs">Price Details</p>
            <hr class="hr" />
            <p class="spread flex fs-s my-xs">
              Price-
              <span> &#8377;22999 </span>
            </p>
            <p class="spread flex fs-s my-xs">
              GST - (18%)
              <span> &#8377;4140 </span>
            </p>
            <p class="spread flex fs-s my-xs">
              Delivery Charges
              <span> &#8377;499 </span>
            </p>
            <p class="spread flex fs-s my-xs">
              Discount (-20% off)
              <span class="discount"> -&#8377;5500 </span>
            </p>
            <hr class="hr" />
            <p class="spread flex h4 py-xs my-xs">
              Total Amount
              <span> &#8377;22139 </span>
            </p>

            <p class="spread flex fs-s my-xs">
              You will save &#8377;5500 on this order.
            </p>
            <button class="btn btn-success rounded-s fs-s px-sm py-xs">
              Place Order
              <i class="bi bi-right"></i>
            </button>
          </section>
        </section>
      </main>
    </>
  );
};
