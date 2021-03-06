import "./Cart.css";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "context";
import { getCartSummary } from "utils";
import toast from "react-hot-toast";
import { useRazorpay } from "hooks/useRazorpay";

export const Cart = () => {
  const {
    user: { cart, firstName, email, selectedAddress },
  } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const checkoutPage = location.pathname.includes("checkout");
  const { orderVal, total, discount, gst } = getCartSummary(cart ?? []);
  const { loadRazorPay } = useRazorpay();
  const checkout = async () => {
    if (!selectedAddress || !selectedAddress._id) {
      return toast.error("Please Choose a address to checkout");
    }
    await loadRazorPay(total, firstName, email);
  };

  return (
    <main className={`main flex cart  ${!cart?.length && "flex-center"}`}>
      {cart?.length ? (
        <>
          <section className="cart-items flex flex-col px-xs">
            <Outlet />
          </section>
          <section className="cart-summary px-xs">
            <h3 className="cart-title h2 font-bebas p-xs fw-lighter">
              Cart Summary
            </h3>
            <section className="card p-sm flex checkout">
              <div>
                <p className="spread flex fs-s my-xs">
                  Order Value<span> &#8377;{orderVal} </span>
                </p>
                <p className="spread flex fs-s my-xs">
                  Taxes and charges
                  <span> &#8377;{gst} </span>
                </p>
                <p className="spread flex fs-s my-xs">
                  Shipping Fee
                  <span className="cart-delivery-fee fw-semibold">
                    {" "}
                    {total > 2000 ? "FREE" : `₹${499}`}{" "}
                  </span>
                </p>
              </div>
              <hr className="hr" />
              <p className="spread flex fs-s my-sm">
                Product Discount
                <span className="cart-discount"> -&#8377;{discount} </span>
              </p>
              <hr className="hr" />
              <p className="spread flex h4 py-xs my-sm ubuntu total-amount">
                Total Amount
                <span className="h3 ubuntu"> &#8377;{total} </span>
              </p>
              <button
                to={checkoutPage ? "/success" : "checkout"}
                onClick={checkoutPage ? checkout : () => navigate("checkout")}
                className="btn fs-l fw-lighter px-sm py-xs font-bebas btn-cta"
              >
                {checkoutPage ? "Place Order" : "Continue to checkout"}
              </button>
              <p className="fs-s p-xs my-xs cart-savings">
                You will save{"  "}
                <span className="fw-semibold">&#8377;{discount}</span> on this
                order.
              </p>
            </section>
          </section>
        </>
      ) : (
        <div className="flex flex-center flex-col">
          <p className="h3 ubuntu my-xs">Your Cart is Empty!</p>
          <p className="h2 ubuntu my-xs">Checkout our latest Furniture </p>
          <Link
            to="/products"
            className="text-center full-width fs-l fw-lighter px-sm py-xs font-bebas btn-cta my-sm"
          >
            All Products
          </Link>
        </div>
      )}
    </main>
  );
};

export default Cart;
