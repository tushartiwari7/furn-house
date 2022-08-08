import React from "react";
import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsHandbag, BsPerson, BsHeart, BsSearch } from "react-icons/bs";
import { useUser, useProducts } from "context";
import Image from "components/atoms/Image/Image";
export const Header = () => {
  const { user } = useUser();
  const { filters, dispatch } = useProducts();
  const navigator = useNavigate();
  const location = useLocation();
  const onSearch = (e) => {
    if (location.pathname !== "/products") navigator("/products");
    dispatch({ type: "PRODUCTS_SEARCH", payload: e.target.value });
  };

  return (
    <>
      <header className="full-width flex header pos-rel fs-l">
        <div className="flex flex-center">
          <Link
            className="list flex flex-center text-color"
            to="/"
            title="Go to Homepage"
          >
            <Image
              src={`${window.location.origin}/assets/logo-200-100.svg`}
              alt="logo"
              className="logo"
            />
          </Link>
        </div>
        <div
          className="searchbar flex flex-center pos-rel"
          title="Search Products"
        >
          <input
            type="text"
            className="input px-sm py-xs"
            placeholder="What are you looking for?"
            value={filters.searchQuery}
            onChange={onSearch}
          />
          <BsSearch className="icon pos-abs" color="var(--primary)" />
        </div>
        <div className="flex flex-center navs">
          <Link
            to="/wishlist"
            title="wishlist"
            className="list white btn nav-icon flex flex-center pos-rel"
          >
            <BsHeart />
            {user.isLoggedIn && user.wishlist.length >= 1 && (
              <div className="pos-abs badge rounded-circle fs-s fw-bold">
                {user.wishlist.length}
              </div>
            )}
          </Link>
          <Link
            to="/cart"
            title="Cart"
            className="list white btn nav-icon flex flex-center pos-rel"
          >
            <BsHandbag />
            {user.isLoggedIn && user.cart.length >= 1 && (
              <div className="pos-abs badge rounded-circle fs-s fw-bold">
                {user.cart.length}
              </div>
            )}
          </Link>
          <Link
            to={user.isLoggedIn ? "/myAccount" : "/login"}
            state={{ from: location }}
            title={user.isLoggedIn ? "My Account" : "Login"}
            className="list btn nav-icon flex flex-center rounded-s"
          >
            <BsPerson size="2.4rem" />
          </Link>
        </div>
      </header>
    </>
  );
};
