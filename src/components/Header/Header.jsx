import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {BsCart,BsHeart} from "react-icons/bs";

export const Header = () => {
  return (
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
      />
    </div>
    <div className="flex flex-center">
      <Link  to="/login" className="btn btn-outline-primary btn-login px-sm py-xs mx-xs fs-s flex flex-center">
        Login
      </Link>
      <Link to="/wishlist" className="list white btn btn-icon flex flex-center">
        <BsHeart />
      </Link>
      <Link to="/cart" className="list white btn btn-icon flex flex-center">
        <BsCart />
      </Link>
    </div>
    </header>
  )
}
