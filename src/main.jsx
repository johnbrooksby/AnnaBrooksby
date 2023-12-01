import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
);
