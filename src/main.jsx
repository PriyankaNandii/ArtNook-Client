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

import { Toaster } from 'react-hot-toast'
import Update from './Components/Update';
import ProductDetails from './Pages/ProductDetails';
import AllCraftsRoute from './Pages/AllCraftsRoute';
import AuthProvider from './provider/AuthProvider';
import MyCraft from './Pages/MyCraft';
import CategoryData from './Pages/CategoryData';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/product')

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
        element: <AllCraftsRoute />,
        loader: () => fetch('http://localhost:5000/product')
      },
      {
        path: "/addcraft",
        element: <PrivateRoute>
          <Add />
        </PrivateRoute>,
        
      },
      {
        path: "/mycraft",
        element: <PrivateRoute>
          <MyCraft />
        </PrivateRoute>,
       
    
      },
      {
        path: "/updateProduct/:id",
        element: <Update />,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`),
    
      },
      {
        path: "/productDetails/:id",
        element: <PrivateRoute>
          <ProductDetails />
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`),
    
      },
      {
         path:"/categorydata/:subcategory",
        element : 
          <CategoryData />,
          loader: () => fetch('http://localhost:5000/product')
      },
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
   <Toaster />
  </React.StrictMode>,
)
