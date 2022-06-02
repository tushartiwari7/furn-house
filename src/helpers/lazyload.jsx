import { lazy } from "react";

// lazy load pages and components
const Home = lazy(() => import("pages/Home/Home"));
const ProductsPage = lazy(() => import("pages/Products/ProductsPage"));
const ProductPage = lazy(() => import("pages/Product/ProductPage"));
const Login = lazy(() => import("pages/Login/Login"));
const Signup = lazy(() => import("pages/Signup/Signup"));
const Cart = lazy(() => import("pages/Cart/Cart"));
const Wishlist = lazy(() => import("pages/Wishlist/Wishlist"));
const NotFound = lazy(() => import("pages/NotFound/NotFound"));

export const lazyLoad = () => {
  return {
    Home,
    ProductsPage,
    ProductPage,
    Login,
    Signup,
    Cart,
    Wishlist,
    NotFound,
  };
};
