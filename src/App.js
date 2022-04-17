import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import MockMan from "mockman-js";

// lazy page imports
const Home = lazy(() => import("./pages/Home/Home"));
const ProductsPage = lazy(() => import("./pages/Products/ProductsPage"));
const ProductPage = lazy(() => import("./pages/Product/ProductPage"));
const Login = lazy(() => import("./pages/Login/Login"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const PrivateRoute = lazy(() =>
  import("./components/PrivateRoute/PrivateRoute")
);
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

import { Header, Loader } from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  const location = useLocation();
  return (
    <div className={`App full-height grid ${location.pathname.slice(1)}`}>
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
          />
          <Route
            path="/wishlist"
            element={
              <PrivateRoute>
                <Wishlist />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
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
