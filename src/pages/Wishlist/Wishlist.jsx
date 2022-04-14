import React from "react";
import { VerticalCard } from "../../components";
import { useUser } from "../../context";
export const Wishlist = () => {
  const {
    user: { wishlist },
  } = useUser();

  return (
    <main className="main flex flex-col">
      <h2 className="cart-title h3 ubuntu p-xs">
        Your Wishlist
        <span className="fs-m fw-regular px-xs">{wishlist?.length} items</span>
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
    </main>
  );
};
