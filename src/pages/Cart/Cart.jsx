import "./Cart.css";
import { CartItem } from "../../components";
import { useUser } from "../../context";
import { getCartSummary } from "../../utils";

export const Cart = () => {
  const {
    user: { cart },
  } = useUser();

  const { items, total, discount, gst } = getCartSummary(cart ?? []);
  return (
    <main className={`main flex cart-page  ${!cart?.length && "flex-center"}`}>
      {cart?.length ? (
        <>
          <section className="cart-items flex flex-col px-xs">
            <h2 className="cart-title h3 ubuntu p-xs">
              Your Cart
              <span className="fs-m fw-regular px-xs">{items} items</span>
            </h2>
            {cart.length &&
              cart.map((product) => (
                <CartItem key={product._id} {...product} />
              ))}
          </section>
          <section className="cart-summary px-xs">
            <h2 className="cart-title h3 ubuntu p-xs">Cart Summary</h2>

            <section className="card p-sm flex checkout">
              <p className="h4 py-xs">Price Breakup</p>
              <p className="spread flex fs-s my-xs">
                Cart Total -<span> &#8377;{total} </span>
              </p>
              <p className="spread flex fs-s my-xs">
                GST - (18%)
                <span> &#8377;{gst} </span>
              </p>
              <p className="spread flex fs-s my-xs">
                Delivery Charges
                <span> {total > 10000 ? "Free" : `₹${499}`} </span>
              </p>
              <p className="spread flex fs-s my-xs">
                Product Discount
                <span className="discount"> -&#8377;{discount} </span>
              </p>
              <hr className="hr" />
              <p className="spread flex h4 py-xs my-xs ubuntu total-amount">
                Total Amount
                <span className="h2 ubuntu"> &#8377;{total} </span>
              </p>
              <p className="spread flex fs-s my-xs">
                You will save &#8377;{discount} on this order.
              </p>
              <button className="btn btn-success rounded-s fs-s px-sm py-xs">
                Place Order
              </button>
            </section>
          </section>
        </>
      ) : (
        <h3 className="h3 ubuntu flex flex-center fill-height">
          {" "}
          Your Cart is Empty!{" "}
        </h3>
      )}
    </main>
  );
};
