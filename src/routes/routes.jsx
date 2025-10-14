import { createBrowserRouter } from "react-router";

// layouts
import MainLayout from "../layouts/MainLayout/MainLayout";
import AuthLayout from "./../layouts/AuthLayout/AuthLayout";
// pages
import Home from "./../pages/Home/Home";
import Admin from "./../pages/Admin/Admin";
import Cart from "./../pages/Cart/Cart";
import Login from "./../pages/Login/Login";
import Register from "./../pages/Register/Register";
import Products from "./../pages/Products/Product.s";
import ProductDetails from "./../pages/ProductDetails/ProductDetails";
import Category from "./../pages/Category/Category";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      // MainLayout
      {
        Component: MainLayout,
        children: [
          {
            index: true,
            // element: <Home />
            Component: Home,
          },
          { path: "admin", Component: Admin },
          { path: "cart", Component: Cart },
          { path: "products", Component: Products },
          { path: "product-details/:id", Component: ProductDetails },
          { path: "category", Component: Category },
        ],
      },
      // AuthLayout
      {
        Component: AuthLayout,
        children: [
          { path: "login", Component: Login },
          { path: "register", Component: Register },
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
]);

export default router;

// [
//   {
//     path:"/"
//     // MainLayout
//     {Component:MainLayout,
//       children:[
//         // pages
//       ]
//     },
//     // AuthLayout
//     {
//       Component:AuthLayout,
//       children:[
//         pages
//       ]
//     }
//   }
// ]
