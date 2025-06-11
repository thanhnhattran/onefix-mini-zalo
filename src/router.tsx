import Layout from "@/components/layout";
import HomePage from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import ServicesPage from "./pages/services";
import CategoriesPage from "./pages/categories";
import ExplorePage from "./pages/explore";
import ServiceDetailPage from "./pages/service-detail";
import NotFound from "./pages/404";
import BookingPage from "./pages/booking";
import ScheduleHistoryPage from "./pages/schedule/history";
import ScheduleDetailPage from "./pages/schedule/detail";
import ProfilePage from "./pages/profile";
import InvoicesPage from "./pages/invoices";
import AskPage from "./pages/ask";
import FeedbackPage from "./pages/feedback";
import SearchResultPage from "./pages/search";

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
          path: "/search",
          element: <SearchResultPage />,
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
          /**
           * Accepted params:
           * - `tab`: to change to default tab (this page has 3 tabs). For example, to visit the doctor tab, navigate to /service/1?tab=2
           * - `doctor`: to default pick a doctor. For example: /service/1?tab=2&doctor=1
           */
          path: "/service/:id",
          element: <ServiceDetailPage />,
          handle: {
            back: true,
            title: ({ services, params }) =>
              services.find((c) => String(c.id) === params.id)?.name,
          },
        },
        {
          path: "/booking/:step?",
          element: <BookingPage />,
          handle: {
            back: true,
            title: "Đặt lịch khám",
          },
        },
        {
          path: "/ask",
          element: <AskPage />,
          handle: {
            back: true,
            title: "Gửi câu hỏi",
          },
        },
        {
          path: "/feedback",
          element: <FeedbackPage />,
          handle: {
            back: true,
            title: "Gửi phản ảnh",
          },
        },
        {
          path: "/schedule",
          element: <ScheduleHistoryPage />,
          handle: {
            back: true,
            title: "Lịch khám",
          },
        },
        {
          path: "/schedule/:id",
          element: <ScheduleDetailPage />,
          handle: {
            back: true,
            title: "Chi tiết",
          },
        },
        {
          path: "/profile",
          element: <ProfilePage />,
          handle: {
            profile: true,
          },
        },
        {
          path: "/invoices",
          element: <InvoicesPage />,
          handle: {
            back: true,
            title: "Hóa đơn",
          },
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ],
  { basename: getBasePath() }
);

export function getBasePath() {
  const urlParams = new URLSearchParams(window.location.search);
  const appEnv = urlParams.get("env");

  if (
    import.meta.env.PROD ||
    appEnv === "TESTING_LOCAL" ||
    appEnv === "TESTING" ||
    appEnv === "DEVELOPMENT"
  ) {
    return `/zapps/${window.APP_ID}`;
  }

  return window.BASE_PATH || "";
}

export default router;
