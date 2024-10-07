import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Navbar from "../layouts/NavBar.tsx";
import {Home} from "../../pages/home";
import {Product} from "../../pages/product";

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