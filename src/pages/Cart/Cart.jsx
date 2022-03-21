import "./Cart.css";
import { CartItem } from "../../components";
import { useUser } from "../../context";
import { Link } from "react-router-dom";
export const Cart = () => {
  const {
    user: { cart, isLoggedIn },
  } = useUser();
  return (
    <>
      <main
        className={`main flex cart-page  ${!cart?.length && "flex-center"}`}
      >
        {isLoggedIn ? (
          cart?.length ? (
            <>
              <section className="cart-items flex flex-col px-xs">
                <h2 className="cart-title h3 ubuntu p-xs">
                  Your Cart{" "}
                  <span className="fs-m fw-regular px-xs">
                    {cart.length} items
                  </span>
                </h2>
                {cart.length &&
                  cart.map((product) => (
                    <CartItem key={product._id} {...product} />
                  ))}
              </section>
              <section className="cart-summary px-xs">
                <h2 className="cart-title h3 ubuntu p-xs">Cart Summary</h2>

                <section className="card p-sm flex checkout">
                  <p className="h4 py-xs">Price Details</p>
                  <hr className="hr" />
                  <p className="spread flex fs-s my-xs">
                    Price-
                    <span> &#8377;22999 </span>
                  </p>
                  <p className="spread flex fs-s my-xs">
                    GST - (18%)
                    <span> &#8377;4140 </span>
                  </p>
                  <p className="spread flex fs-s my-xs">
                    Delivery Charges
                    <span> &#8377;499 </span>
                  </p>
                  <p className="spread flex fs-s my-xs">
                    Discount (-20% off)
                    <span className="discount"> -&#8377;5500 </span>
                  </p>
                  <hr className="hr" />
                  <p className="spread flex h4 py-xs my-xs">
                    Total Amount
                    <span> &#8377;22139 </span>
                  </p>

                  <p className="spread flex fs-s my-xs">
                    You will save &#8377;5500 on this order.
                  </p>
                  <button className="btn btn-success rounded-s fs-s px-sm py-xs">
                    Place Order
                    <i className="bi bi-right"></i>
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
