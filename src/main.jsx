import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import ChefDetails from './components/chefSection/chefDetails/ChefDetails';
import Loader from './loader/Loader';
import FoodDetails from './components/foodSection/foodDetails/FoodDetails';
import AuthProvider from './firebase/authProvider/AuthProvider';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import ErrorPage from './components/pages/errorPage/ErrorPage';
import ResetPassword from './components/pages/forgitPassword/resetPassword';
import Login from './components/pages/login/Login';
import Signup from './components/pages/signup/Signup';
import Blogs from './components/pages/blogs/Blogs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: '/resetPassword',
        element: <ResetPassword/>
      },
      {
        path: "/register",
        element: <Signup/>
      },
      {
        path: '/chef/:id',
        element: <PrivateRoute><ChefDetails/></PrivateRoute>
      },
      {
        path: "/items/:id",
        element: <PrivateRoute><FoodDetails/></PrivateRoute>
      },
      {
        path: '/blogs',
        element: <Blogs />
      }
    ]
  },
  {
    path: "/error",
    element: <ErrorPage/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Loader>
        <RouterProvider router={router} />
      </Loader>
    </AuthProvider>
  </React.StrictMode>,
)