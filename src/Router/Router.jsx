import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Homepage from '../Pages/HomePage/Homepage';
import LogIn from '../Pages/Shared/LogInRegister/LogIn';
import Register from '../Pages/Shared/LogInRegister/Register';
import PrivateRoute from './PrivateRoute';
import Profile from '../Components/Profile';
import Orders from '../Components/Orders';
import Dashboard from '../Components/Dashboard';
import Error from '../Components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement:<Error/>,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/login',
        element: <LogIn />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: '/orders',
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
