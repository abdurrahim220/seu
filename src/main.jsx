import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <div className="mx-auto max-w-screen-xl">
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
    </div>
  </HelmetProvider>
);
