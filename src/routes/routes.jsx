import { createBrowserRouter } from "react-router";

// layouts
import MainLayout from "@/layouts/MainLayout/MainLayout";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
// pages
import Home from "@/pages/Home/Home";
import Admin from "@/pages/Admin/Admin";
import Cart from "@/pages/Cart/Cart";
import Products from "@/pages/Products/Product.s";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import Category from "@/pages/Category/Category";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import NotFound from "@/pages/NotFound/NotFound";
import authMiddleware from "./middleware/authMiddleware";

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
          {
            path: "admin",
            Component: Admin,
            middleware: [authMiddleware],
            loader: async (params) => {
              console.log("Admin Loader", params);
            },
          },
          { path: "cart", Component: Cart },
          { path: "products", Component: Products },
          {
            path: "product-details/:id",
            Component: ProductDetails,
            loader: async () => {
              console.log("ProductDetails Loader");
              // for (let i = 0; i < 10000; i++) {
              //   console.log("loader", i);
              // }
              return { message: "Success fetch data" };
            },
          },
          { path: "category", Component: Category },
        ],
      },
      // AuthLayout
      {
        Component: AuthLayout,
        children: [
          { path: "login", Component: Login },
          {
            path: "register",
            Component: Register,
            action: async ({ request }) => {
              const formData = await request.formData();
              const userData = Object.fromEntries(formData.entries());
              console.log("🚀 ~ Action ~ userData:", userData);
              return userData;
            },
          },
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
