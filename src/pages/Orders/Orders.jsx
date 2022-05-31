import React from "react";
import { Link } from "react-router-dom";
import "./Orders.css";
import { useUser } from "../../context";
export const Orders = () => {
  const {
    user: { orders },
  } = useUser();
  return (
    <div className="m-sm flex flex-col settings gap3">
      <p className="fs-xl ubuntu full-width">Orders</p>
      {orders.map((order) => {
        return (
          <article className="flex gap mx-md" key={order._id}>
            <Link to={`/products/${order.id}`} className="img-container">
              <img
                className="order-item-img"
                src={order.img}
                alt="order-item"
              />
            </Link>
            <div className="fs-m flex flex-col order-item-info">
              <div>
                <h3>{order.title} </h3>
                <p className="h4 fw-lighter">
                  ₹{+order.offer_price * order.qty} + Taxes
                </p>
              </div>
              <p className="fs-m fw-lighter">
                {" "}
                Payment Status: {order.paymentStatus}{" "}
              </p>
              <p className="fs-m fw-lighter"> Quantity: {order.qty}</p>
            </div>
          </article>
        );
      })}
      {orders.length === 0 && (
        <p className="flex flex-center full-width fs-xl font-bebas">
          Nothing Ordered, Buy Something...
        </p>
      )}
    </div>
  );
};
