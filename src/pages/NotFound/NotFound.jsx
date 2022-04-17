import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
export const NotFound = () => {
  return (
    <main className="grid grid2 width70">
      <div className="gif-container flex flex-center">
        <img
          className="gif"
          src="https://media1.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.gif?cid=ecf05e47tvf3fkhi7a3n2uxfmiimij01ju4pzztlt1v11qgk&rid=giphy.gif&ct=g"
          alt="404"
        />
      </div>
      <div className="not-found-content flex flex-col flex-center p-md">
        <h1>404 - Page not found</h1>
        <p className="fs-m my-sm px-md">
          Oops - The Page you're trying to access is might be temporarily down.
          Please try again later or see Our Products here.
        </p>
        <div className="flex not-found-page-btns full-width">
          <Link
            to="/"
            className="btn fs-l fw-lighter text-center px-sm py-xs font-bebas full-width not-found-cta my-xs"
          >
            Go to Homepage
          </Link>
          <Link
            to="/products"
            className="btn fs-l fw-lighter text-center px-sm py-xs font-bebas full-width not-found-cta my-xs"
          >
            See Products
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
