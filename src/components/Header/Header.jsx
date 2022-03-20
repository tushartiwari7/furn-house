import React from "react";
import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsCart, BsHeart, BsPersonCircle } from "react-icons/bs";
import { useUser, useProducts } from "../../context";

export const Header = () => {
  const { user } = useUser();
  const { dispatch } = useProducts();
  const navigator = useNavigate();
  const location = useLocation();

  const onSearch = (e) => {
   if(location.pathname !== '/products')
      navigator("/products");
    dispatch({ type: "PRODUCTS_SEARCH", payload: e.target.value });
  };

  return (
    <>
      <header className="full-width p-sm flex header fs-l">
        <div className="flex flex-center">
          <Link className="list white flex flex-center" to="/">
            Furn House
          </Link>
        </div>
        <div className="searchbar flex flex-center">
          <input
            type="text"
            className="input px-sm py-xs rounded-s"
            placeholder="What are you looking for?"
            onChange={onSearch}
          />
        </div>
        <div className="flex flex-center">
          {!user.isLoggedIn && (
            <Link
              to="/login"
              className="btn btn-outline-primary btn-login px-sm py-xs mx-xs fs-s flex flex-center rounded-s"
            >
              Login
            </Link>
          )}
          <Link
            to="/wishlist"
            className="list white btn btn-icon flex flex-center"
          >
            <BsHeart />
          </Link>
          <Link to="/cart" className="list white btn btn-icon flex flex-center">
            <BsCart />
          </Link>
          {user.isLoggedIn && (
            <Link
              to="/profile"
              className="list white btn btn-icon flex flex-center"
            >
              <BsPersonCircle />
            </Link>
          )}
        </div>
      </header>
    </>
  );
};
