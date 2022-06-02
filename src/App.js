import { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Header, Loader, PrivateRoute } from "components";
import { lazyLoad } from "helpers/lazyload";
import Mockman from "mockman-js";
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
import { useUser } from "context";
import { updateUser } from "services";
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
  const { user, setUser } = useUser();

  useEffect(() => {
    // persist user data on refresh
    const token = localStorage.getItem("token");
    if (!user.isLoggedIn && token) {
      const prevSessionUser = JSON.parse(localStorage.getItem("user"));
      delete prevSessionUser.isLoggedIn;
      delete prevSessionUser._id;
      (async (user) => {
        const { updatedUser } = await updateUser(user);
        setUser({ ...updatedUser, isLoggedIn: true });
      })(prevSessionUser);
    }
  }, []);

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
          <Route path="mock" element={<Mockman />} />
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
