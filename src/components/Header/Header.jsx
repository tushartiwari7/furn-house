import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header className="full-width p-sm flex header fs-l">
      <div className="flex flex-center">
        <button id="hamburger" className="btn btn-float btn-outline-primary hamburger mx-xs rounded-circle flex flex-center">
          <i className="mx-xs bi bi-list"></i>
        </button>
        <a className="list white flex flex-center" href="/">
          Furn House
        </a>
      </div>
    <div className="searchbar flex flex-center">
      <input
        type="text"
        className="input px-sm py-xs rounded-s"
        placeholder="What are you looking for?"
      />
    </div>
    <div className="flex flex-center">
      <i className="bi bi-search search-icon mx-xs"></i>
      <a  href="/pages/login.html" className="btn btn-outline-primary btn-login px-sm py-xs mx-xs fs-s">
        Login
      </a>
      <a href="/pages/wishlist.html" className="list white">
        <i className="bi bi-heart mx-xs"></i>
      </a>
      <a href="/pages/cart.html" className="list white">
        <i className="bi bi-cart mx-xs"></i>
      </a>
    </div>
    </header>
  )
}
