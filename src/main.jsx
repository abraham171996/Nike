import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/style/global.css"
import {RouterProvider} from 'react-router-dom'
import {router} from './router.jsx'
import { CartProvider } from "react-use-cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);