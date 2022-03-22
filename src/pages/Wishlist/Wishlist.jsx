import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../../components";
import { useUser } from "../../context";
export const Wishlist = () => {
  const {
    user: { wishlist, isLoggedIn },
  } = useUser();

  return (
    <main className="main flex flex-col cart-page">
      {isLoggedIn ? (
        <>
          {" "}
          <h2 className="cart-title h3 ubuntu p-xs">
            Your Wishlist
            <span className="fs-m fw-regular px-xs">
              {wishlist?.length} items
            </span>
          </h2>
          <div className="main grid product-list p-sm">
            {wishlist &&
              wishlist.map((product) => (
                <ProductCard key={product._id} {...product} />
              ))}
          </div>
        </>
      ) : (
        <section className="flex flex-center cart-empty">
          <div className="flex flex-center flex-col">
            <h3 className="h2 ubuntu text-center">
              Login To See Items In WishList
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
  );
};
