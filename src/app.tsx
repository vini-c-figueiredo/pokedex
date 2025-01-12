import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./pages/error";
import { HomePage } from "./pages/home";
import { Default } from "./pages/layout/default";
import { SearchPokemon } from "./pages/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "search",
        element: <SearchPokemon />,
      }
    ]
  },
]);

export function App() {
  return (
    <RouterProvider router={router} />
  )
}
