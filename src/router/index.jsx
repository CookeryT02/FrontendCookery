import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage, ContactPage, HomePage } from "../pages";
import { CommonLayout } from "../layouts";

const router = createBrowserRouter([
  // COMMON ROUTES
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
