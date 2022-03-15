import { Route, Routes } from "react-router-dom";
import "./App.css";
import MockMan from "mockman-js";
import { Home } from "./pages";

const App = () => {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mockman" element={<MockMan />} />
    </Routes>
    </div>
  );
}

export default App;