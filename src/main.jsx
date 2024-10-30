import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Dashboard, Landing, Login, RootLayout } from "./Components/index.js";

// create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Landing />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);
