import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component : MainLayout,
    children : [
      {
        index : true,
        element : <Home/>
      }
    ]
  },
]);


function Router() {
  return (
   <RouterProvider router={router} />
  )
}

export default Router
