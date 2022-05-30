import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import MockMan from "mockman-js";
import "./App.css";

// lazy page imports
const Home = lazy(() => import("./pages/Home/Home"));
const ProductsPage = lazy(() => import("./pages/Products/ProductsPage"));
const ProductPage = lazy(() => import("./pages/Product/ProductPage"));
const Login = lazy(() => import("./pages/Login/Login"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));
const Profile = lazy(() => import("./pages/MyAccount/Profile/Profile"));
const PrivateRoute = lazy(() =>
  import("./components/PrivateRoute/PrivateRoute")
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

import { Header, Loader } from "./components";
import { Addresses, MyAccount, Success } from "./pages";
import { Settings } from "./pages/MyAccount/Settings/Settings";
import { CartItems } from "./pages/Cart/CartItems/CartItems";
import { Checkout } from "./pages/Cart/Checkout/Checkout";

const App = () => {
  const location = useLocation();
  return (
    <div
      className={`App full-height grid ${location.pathname.replaceAll(
        `/`,
        ``
      )}`}
    >
      <Header />
      <Suspense fallback={<Loader forRouter={true} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          >
            <Route index element={<CartItems />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="/success" element={<Success />} />
          <Route
            path="/wishlist"
            element={
              <PrivateRoute>
                <Wishlist />
              </PrivateRoute>
            }
          />
          <Route
            path="/myAccount"
            element={
              <PrivateRoute>
                <MyAccount />
              </PrivateRoute>
            }
          >
            <Route
              path="change-password"
              element={<div>Change Password</div>}
            />
            <Route index element={<Profile />} />
            <Route
              path="orders"
              element={
                <p className="flex flex-center full-width fs-xl font-bebas">
                  Coming soon...
                </p>
              }
            />
            <Route path="addresses" element={<Addresses />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/mockman" element={<MockMan />} />
        </Routes>
      </Suspense>
      <footer className="fs-m">
        {new Date().getFullYear()} &copy; All rights reserved.
      </footer>
      <Toaster
        position="bottom-right"
        toastOptions={{ className: "fs-m toast" }}
      />
    </div>
  );
};

export default App;
