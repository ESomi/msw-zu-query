import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App.tsx";
import DetailPage from "./DetailPage.tsx";
import Home from "./Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/detail", element: <DetailPage/> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} /> ,
)
