import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Components/Root';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivateRoute from './Components/PrivateRoute';
import ErrorPage from './Pages/ErrorPage';
import Home from './Components/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Add from './Components/Add';
import AllCrafts from './Components/AllCrafts';
import MyCraft from './Components/MyCraft'
import { Toaster } from 'react-hot-toast'
import Update from './Components/Update';
import ProductDetails from './Pages/ProductDetails';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allcrafts",
        element: <AllCrafts />,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/addcraft",
        element: <Add />
      },
      {
        path: "/mycraft",
        element: <MyCraft />
    
      },
      {
        path: "/updateProduct/:id",
        element: <Update />,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
    
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
    
      },
      // {
      //   path: '/propertyDetails/:id',
      //   element : <PrivateRoute>
      //     <BannerCardDetails />
      //   </PrivateRoute>,
      //   loader: () => fetch('/Property.json'),
      // },
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
   <Toaster />
  </React.StrictMode>,
)
