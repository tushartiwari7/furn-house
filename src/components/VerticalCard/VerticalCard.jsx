import "./VerticalCard.css";
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";
import { useProducts, useUser } from "../../context";
import { useNavigate } from "react-router-dom";

import { addToWishList, deleteFromWishList } from "../../services";
import toast from "react-hot-toast";

export const VerticalCard = ({ product }) => {
  const [imgSrc, setImgSrc] = useState(product.img);
  const [image] = product.images;
  const { setIsLoading } = useProducts();
  const { user, setUser } = useUser();
  const navigator = useNavigate();

  const isInWishlist =
    user.isLoggedIn && user.wishlist.some((item) => item._id === product._id);

  const addToWishListHandler = async (e) => {
    e.stopPropagation();
    if (!user.isLoggedIn) {
      toast("Please Login to add items to Wishlist", {
        icon: <BsFillHeartFill color="red" />,
      });
      return navigator("/login");
    }
    setIsLoading(true);
    const { wishlist } = await addToWishList(product);
    toast.success("Item added to Wishlist");
    setUser((user) => ({ ...user, wishlist }));
    setIsLoading(false);
  };

  const deleteFromWishListHandler = async (e) => {
    e.stopPropagation();
    setIsLoading(true);
    const { wishlist } = await deleteFromWishList(product._id);
    toast.success("Item removed from Wishlist");
    setUser((user) => ({ ...user, wishlist }));
    setIsLoading(false);
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
        <i
          className="icon p-xs mx-xs"
          onClick={
            isInWishlist ? deleteFromWishListHandler : addToWishListHandler
          }
        >
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
