import { Route, Routes } from "react-router-dom";
import "./App.css";
import MockMan from "mockman-js";
import { Home, ProductsPage } from "./pages";
import { Header } from "./components";

const App = () => {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/mockman" element={<MockMan />} />
    </Routes>
    </div>
  );
}

export default App;