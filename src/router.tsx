import Layout from "@/components/layout";
import HomePage from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import { getBasePath } from "@/utils/zma";
import ServicesPage from "./pages/services";
import CategoriesPage from "./pages/categories";
import ExplorePage from "./pages/explore";
import ServiceDetailPage from "./pages/service-detail";
import NotFound from "./pages/404";

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
          path: "/categories",
          element: <CategoriesPage />,
          handle: {
            back: true,
            title: "Danh mục",
            noScroll: true,
          },
        },
        {
          path: "/explore",
          element: <ExplorePage />,
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
          path: "/service/:id",
          element: <ServiceDetailPage />,
          handle: {
            back: true,
            title: ({ services, params }) =>
              services.find((c) => String(c.id) === params.id)?.name,
          },
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename: getBasePath() },
);

export default router;
