import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Product} from "@pages/product";
import {Home} from "@pages/home";
import Navbar from "@app/layouts/NavBar.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar/>
        <Outlet/>
      </>
    ),
    children: [
      {index: true, path: "/", element: <Home/>},
      {path: "/products", element: <Product/>},
    ],
  },
]);

const queryClient = new QueryClient();

const Provider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  );
};

export default Provider;