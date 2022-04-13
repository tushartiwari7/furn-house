import "./VerticalCard.css";
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";
import { useUser } from "../../context";
import { useNavigate } from "react-router-dom";

export const VerticalCard = ({ product }) => {
  const [imgSrc, setImgSrc] = useState(product.img);
  const [image] = product.images;
  const { user, addToWishListHandler, deleteFromWishListHandler } = useUser();
  const navigator = useNavigate();

  const isInWishlist =
    user.isLoggedIn && user.wishlist.some((item) => item._id === product._id);

  const wishlistHandler = (e) => {
    e.stopPropagation();
    return isInWishlist
      ? deleteFromWishListHandler(product._id)
      : addToWishListHandler(product);
  };

  return (
    <li
      className="list feat-product pos-rel pointer"
      key={product._id}
      onMouseEnter={() => setImgSrc(image ? image : product.img)}
      onMouseLeave={() => setImgSrc(product.img)}
      onClick={() => navigator(`/products/${product.id}`)}
    >
      <img
        loading="lazy"
        src={imgSrc}
        alt={product.title}
        width="100%"
        height="100%"
      />
      <div className="product-overlay pos-abs flex flex-col">
        <i className="icon p-xs mx-xs" onClick={wishlistHandler}>
          <BsFillHeartFill
            size="2rem"
            color={isInWishlist ? "red" : "inherit"}
          />
        </i>
        <div className="product-info px-xs py-sm full-width flex">
          <p className="h4 font-bebas">{product.title}</p>
          <span className="ubuntu fs-s fw-semibold product-price">
            Rs. {product.offer_price}
          </span>
        </div>
      </div>
    </li>
  );
};
