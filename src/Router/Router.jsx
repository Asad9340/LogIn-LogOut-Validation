import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Homepage from "../Pages/HomePage/Homepage";
import LogIn from "../Pages/Shared/LogInRegister/LogIn";
import Register from "../Pages/Shared/LogInRegister/Register";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element:<Homepage/>
      },
      {
        path: '/login',
        element:<LogIn/>
      },
      {
        path: '/register',
        element:<Register/>
      },
    ]
  }
])

export default router;