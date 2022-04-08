import "./VerticalCard.css";
import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";

export const VerticalCard = ({ product }) => {
  const [imgSrc, setImgSrc] = useState(product.img);
  const [image] = product.images;

  return (
    <li
      className="list feat-product pos-rel"
      key={product._id}
      onMouseEnter={() => setImgSrc(image)}
      onMouseLeave={() => setImgSrc(product.img)}
    >
      <img src={imgSrc} alt={product.title} width="100%" height="100%" />
      <div className="product-overlay pos-abs flex flex-col">
        <i className="icon p-xs mx-xs">
          <BsFillHeartFill size="2rem" />
        </i>
        <div className="product-info px-xs py-sm full-width flex">
          <h4 className="h4">{product.title}</h4>
          <span className=" fs-s fw-semibold product-price">
            Rs. {product.offer_price}
          </span>
        </div>
      </div>
    </li>
  );
};
