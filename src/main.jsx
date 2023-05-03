import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/layout/Layout';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Home from './components/home/Home';
import ChefDetails from './components/chefSection/chefDetails/ChefDetails';
import Loader from './loader/Loader';
import CoverflowEffect from './components/test/CoverflowEffect';
import Blogs from './components/blogs/Blogs';
import FoodDetails from './components/foodSection/foodDetails/FoodDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Signup/>
      },
      {
        path: '/chef/:id',
        element: <ChefDetails/>
      },
      {
        path: "/items/:id",
        element: <FoodDetails/>
      },
      {
        path: '/blogs',
        element: <Blogs />
      }
    ]
  },
  {
    path: "/test",
    element: <CoverflowEffect />
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Loader>
        <RouterProvider router={router}/>
      </Loader>
  </React.StrictMode>,
)
