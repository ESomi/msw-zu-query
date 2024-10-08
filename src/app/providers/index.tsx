import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Product} from "@pages/product";
import {Home} from "@pages/home";
import Navbar from "@app/layouts/NavBar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/detail", element: <Product /> },
    ],
  },
]);

const Provider = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default Provider;