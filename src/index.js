import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ContextCluster } from "./context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextCluster>
        <App />
      </ContextCluster>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
