import React from "react";
import { useProducts } from "context";

export const Loader = ({ forRouter }) => {
  const { isLoading } = useProducts();
  return (
    <div
      className={`loader-box ${isLoading || forRouter ? "show-loader" : ""}`}
    >
      <img src={`${window.location.origin}/assets/loader.gif`} />
    </div>
  );
};
