import React, { useEffect, useState } from "react";
import loader from "./loader.gif";
const ProgressiveImage = ({ src, placeholderSrc = loader, ...props }) => {
  const [img, setImg] = useState(placeholderSrc);

  useEffect(() => {
    const tempImage = new Image();
    tempImage.src = src;
    tempImage.onload = () => {
      setImg(src);
    };
  }, []);

  return <img src={img} {...props} />;
};

export default ProgressiveImage;
