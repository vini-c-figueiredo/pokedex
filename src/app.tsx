import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./pages/error";
import { Home } from "./pages/home";

export function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);


  return (
    <RouterProvider router={router} />
  )
}
