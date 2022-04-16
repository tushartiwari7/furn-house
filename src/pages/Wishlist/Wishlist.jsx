import React from "react";
import { Link } from "react-router-dom";
import { VerticalCard } from "../../components";
import { useUser } from "../../context";
export const Wishlist = () => {
  const {
    user: { wishlist },
  } = useUser();

  return (
    <main
      className={`main flex flex-col ${!wishlist.length ? "flex-center" : ""}`}
    >
      {wishlist.length ? (
        <>
          <h2 className="cart-title h3 ubuntu p-xs">
            Your Wishlist
            <span className="fs-m fw-regular px-xs">
              {wishlist?.length} items
            </span>
          </h2>
          <div className="main grid product-list p-sm">
            {wishlist &&
              wishlist.map((product) => (
                <VerticalCard
                  key={product._id}
                  product={product}
                  isWishlistCard={true}
                />
              ))}
          </div>
        </>
      ) : (
        <div className="flex flex-center flex-col">
          <p className="h3 ubuntu my-xs">Your Wishlist is Empty!</p>
          <p className="h2 ubuntu my-xs">Checkout our latest Furniture </p>
          <Link
            to="/products"
            className="text-center full-width fs-l fw-lighter px-sm py-xs font-bebas cart-cta my-sm"
          >
            All Products
          </Link>
        </div>
      )}
    </main>
  );
};

export default Wishlist;
