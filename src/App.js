import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Header, Loader, PrivateRoute } from "./components";
import { lazyLoad } from "./helpers/lazyload";
import "./App.css";
import {
  Addresses,
  CartItems,
  Checkout,
  MyAccount,
  Orders,
  Profile,
  Settings,
  Success,
} from "pages";
const App = () => {
  const location = useLocation();
  const {
    Home,
    ProductsPage,
    ProductPage,
    Login,
    Signup,
    Cart,
    Wishlist,
    NotFound,
  } = lazyLoad();
  return (
    <div
      className={`App full-height grid ${location.pathname.replaceAll(
        "/",
        ""
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
          <Route
            path="/wishlist"
            element={
              <PrivateRoute>
                <Wishlist />
              </PrivateRoute>
            }
          />
          <Route
            path="/success"
            element={
              <PrivateRoute>
                <Success />
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
            <Route index element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
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
