import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";

import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <PrivateRoute><Home/></PrivateRoute>
        }
      ]
    },
    {
      path: "signIn",

      element: <SignIn/>
    },
    {
      path: "signUp",
      element: <SignUp/>
    }
  ]);

export default router