import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./styles/index.css";
import App from "./pages/App";
import MessageContainer from "./components/shared/MessageContainer";
import Chat from "./components/shared/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat />,
  },
  {
    path: "/about",
    element: <MessageContainer />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
