import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./pages/error";
import { HomePage } from "./pages/home";

export function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
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
