import { Route, Routes } from "react-router-dom";
import "./App.css";
import MockMan from "mockman-js";
import { Home, ProductsPage,Login,Signup,Cart } from "./pages";
import { Header } from "./components";

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
      <Route path="/mockman" element={<MockMan />} />
    </Routes>
    </div>
  );
}

export default App;