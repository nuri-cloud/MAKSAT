import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Accessories from "./Pages/Accessories/Accessories";
import AirPods from "./Pages/AirPods/AirPods";
import MacBook from "./Pages/MacBook/MacBook";
import TV from "./Pages/TV/TV";
import Watch from "./Pages/Watch/Watch";
import IPhone from "./Pages/iPhone/iPhone"; // Бул жерде I чоң
import IPhone16 from "./Pages/IPhone16/IPhone16"; // Бул жерде I чоң
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "accessories",
        element: <Accessories />,
      },
      {
        path: "airPods",
        element: <AirPods />,
      },
      {
        path: "macbook",
        element: <MacBook />,
      },
      {
        path: "tv",
        element: <TV />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
      {
        path: "iPhone",
        element: <IPhone />,
      },
      {
        path: "iPhone16",
        element: <IPhone16 />,
      },
      {
        path: "product/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);
