import React from "react";
import Login from "../login/Login";
import Browse from "../browse/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "../notFound/NotFound";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
