import { Route, Routes } from "react-router-dom";
import "./App.css";
import MockMan from "mockman-js";
import {
  Home,
  ProductsPage,
  Login,
  Signup,
  Cart,
  Wishlist,
  Profile,
} from "./pages";
import { Header } from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="App full-height">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mockman" element={<MockMan />} />
      </Routes>
      <Toaster
        position="bottom-right"
        toastOptions={{ className: "fs-m toast" }}
      />
    </div>
  );
};

export default App;
