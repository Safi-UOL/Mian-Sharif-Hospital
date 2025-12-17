import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// ⚡ Prevent theme flashing on page load (dark/light mode)
const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter
      basename={
        import.meta.env.MODE === "production"
          ? "/Mian-Sharif-Hospital"
          : "/"
      }
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
