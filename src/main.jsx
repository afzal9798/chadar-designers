import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

import WishlistProvider from "./context/WishlistContext";
import CartProvider from "./context/CartContext";
import DrawerProvider from "./context/DrawerContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DrawerProvider>
      <WishlistProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishlistProvider>
    </DrawerProvider>
  </StrictMode>
);