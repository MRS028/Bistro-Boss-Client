import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Menue from "../Pages/Menu/Menue";
import Order from "../Pages/Order/Order/Order";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menue></Menue>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "auth/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default Router;
