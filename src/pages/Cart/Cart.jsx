import "./Cart.css";
import { CartItem } from "../../components";
import { useUser } from "../../context";
import { Link } from "react-router-dom";
import { getCartSummary } from "../../utils";

export const Cart = () => {
  const {
    user: { cart, isLoggedIn },
  } = useUser();

  const { items, total, discount, gst } = getCartSummary(cart ?? []);
  return (
    <>
      <main
        className={`main flex cart-page  ${!cart?.length && "flex-center"}`}
      >
        {isLoggedIn ? (
          cart.length ? (
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
          )
        ) : (
          <section className="flex flex-center cart-empty">
            <div className="flex flex-center flex-col">
              <h3 className="h2 ubuntu text-center">
                Login To See Items In Cart
              </h3>
              <Link
                to="/login"
                className="full-width my-sm p-sm btn btn-primary h4 ubuntu text-center rounded-s"
              >
                Login
              </Link>
            </div>
          </section>
        )}
      </main>
    </>
  );
};
