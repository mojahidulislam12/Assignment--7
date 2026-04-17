import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Routers/Routers.jsx";
import FriendProvider from "./context/FriendProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </FriendProvider>
  </StrictMode>,
);
