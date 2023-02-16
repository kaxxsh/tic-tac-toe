import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Players from "./Components/Playerlist";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataProvider } from "./context/d/DataProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Players",
    element: <Players />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <RouterProvider router={router} />
  </DataProvider>
);
