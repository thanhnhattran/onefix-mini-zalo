import Layout from "@/components/layout";
import HomePage from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import { getBasePath } from "@/utils/zma";
import ServicesPage from "./pages/services";
import CategoriesPage from "./pages/categories";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/services",
          element: <ServicesPage />,
          handle: {
            back: true,
            title: "Tất cả dịch vụ",
          },
        },
        {
          path: "/categories",
          element: <CategoriesPage />,
          handle: {
            back: true,
            title: "Danh mục",
            noScroll: true,
          },
        },
      ],
    },
  ],
  { basename: getBasePath() },
);

export default router;
