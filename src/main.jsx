import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProviders from './providers/AuthProviders';
import Orders from './components/Orders/Orders';
import PrivateRoute from './route/PrivateRoute/PrivateRoute';
import UserProfile from './components/Profile/UserProfile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'profile',
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path:'/orders',
       element: <PrivateRoute><Orders></Orders></PrivateRoute>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
