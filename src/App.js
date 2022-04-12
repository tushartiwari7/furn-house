import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import MockMan from "mockman-js";
import {
  Home,
  ProductsPage,
  ProductPage,
  Login,
  Signup,
  Cart,
  Wishlist,
  Profile,
} from "./pages";
import { Header, OurServices } from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  const location = useLocation();
  return (
    <div className={`App full-height grid ${location.pathname.slice(1)}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mockman" element={<MockMan />} />
      </Routes>
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
