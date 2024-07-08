import Root from "@/components/layout/Root";
import AboutUs from "@/pages/aboutUs/AboutUs";
import Cart from "@/pages/cart/Cart";
import CheckOut from "@/pages/checkout/CheckOut";
import Home from "@/pages/home/Home";
import AllProducts from "@/pages/products/AllProducts";
import ManageProducts from "@/pages/products/ManageProducts";
import SingleProduct from "@/pages/products/SingleProduct";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "products",
        element: <AllProducts />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
    ],
  },
]);

export default router;
