import "./VerticalCard.css";
import { BsFillHeartFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { useState } from "react";
import { useUser } from "context";
import { useNavigate } from "react-router-dom";
import Image from "components/atoms/Image/Image";

export const VerticalCard = ({ product, isWishlistCard }) => {
  const [imgSrc, setImgSrc] = useState(product.img);
  const [image] = product.images;
  const {
    user,
    addToWishListHandler,
    deleteFromWishListHandler,
    cartHandler,
    shareItem,
  } = useUser();
  const navigator = useNavigate();

  const isInWishlist =
    user.isLoggedIn && user.wishlist.some((item) => item._id === product._id);

  const wishlistHandler = (e) => {
    e.stopPropagation();
    return isInWishlist
      ? deleteFromWishListHandler(product._id)
      : addToWishListHandler(product);
  };

  const moveToCart = (e) => {
    e.stopPropagation();
    Promise.all[(deleteFromWishListHandler(product._id), cartHandler(product))];
  };

  return (
    <li
      className={`list feat-product pos-rel pointer ${
        isWishlistCard ? "wishlist-page-product" : ""
      }`}
      key={product._id}
      onMouseEnter={() => setImgSrc(image ? image : product.img)}
      onMouseLeave={() => setImgSrc(product.img)}
      onClick={() => navigator(`/products/${product.id}`)}
    >
      <Image
        loading="lazy"
        src={imgSrc}
        alt={product.title}
        width="100%"
        height="100%"
      />
      <div className="product-overlay pos-abs flex flex-col">
        <div className="m-xs">
          <i
            className="icon p-xs"
            onClick={wishlistHandler}
            title="Add to Wishlist"
          >
            <BsFillHeartFill
              size="2rem"
              color={isInWishlist ? "red" : "inherit"}
            />
          </i>
          <i
            className="icon-heart p-xs pointer"
            onClick={(e) => shareItem(product.id, e)}
            title="Share Item"
          >
            <FaShare size="2rem" />
          </i>
        </div>
        <div className="product-info px-xs py-sm full-width flex">
          <p className="h4 font-bebas">{product.title}</p>
          <span className="ubuntu fs-s fw-semibold product-price">
            Rs. {product.offer_price}
          </span>
        </div>
        {isWishlistCard && (
          <div
            className="product-info full-width flex pointer"
            onClick={moveToCart}
          >
            <h2 className="h2 font-bebas text-center fs-l move-to-cart-btn full-width px-ss py-xs">
              Move to Cart
            </h2>
          </div>
        )}
      </div>
    </li>
  );
};
