import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CarContext from "./context/CarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <CarContext>
      <App />
    </CarContext>
  </BrowserRouter>
  // </React.StrictMode>
);
reportWebVitals();
