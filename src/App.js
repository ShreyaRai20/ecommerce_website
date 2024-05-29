import React from 'react';
import './App.css';
import Home from './pages/Home'
import SignupPage from './pages/SignupPage';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailsPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
  },
  {
    path: "/login",
    element: (<LoginPage/>),
  },
  {
    path: "/signup",
    element: (<SignupPage/>),
  },
  {
    path: "/cart",
    element: (<CartPage/>),
  },
  {
    path: "/checkout",
    element: (<CheckoutPage/>),
  },
  {
    path: "/product-details",
    element: (<ProductDetailsPage/>),
  },
]);

function App() {
  return (
    <>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </>
  );
}

export default App;
