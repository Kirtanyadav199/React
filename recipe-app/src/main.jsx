import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter wraps everything so ALL components can use routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);