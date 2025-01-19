import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Menue from "../Pages/Menu/Menue";
import Order from "../Pages/Order/Order/Order";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../LayOuts/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItems/UpdateItem";

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
      {
        path: "auth/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: 'secret',
        element:<PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'cart',
        element:<Cart></Cart>
      },

      //admin routes
      {
        path: 'users',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'updateItem/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
    ]
  }
]);
export default Router;
