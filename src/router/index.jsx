import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    HomePage,
    AboutPage,
    AccountPage,
    AdminBrandsEditpage,
    AdminBrandspage,
    AdminCategoriesEditPage,
    AdminCategoriesPage,
    AdminDashboard,
    AdminNewProductPage,
    AdminOffersDetailsPage,
    AdminOffersPage,
    AdminProductEditPage,
    AdminProductPage,
    AdminReportPage,
    AdminUserEditPage,
    AdminUsersPage,
    CategoriesPage,
    ContactPage,
    FavoritesPage,
    ForgotPasswordPage,
    LoginPage,
    ModelsPage,
    PortfolioPage,
    RegisterPage,
    ResetPasswordPage,
    SearchResultPage,
    ShoppingCartPage,
    UserOfferDetailsPage,
    UserOffersPage,
    UserProfilePage,
    ProductsMap,


} from "../pages"

import { AdminLayout, AuthLayout, CommonLayout, UserLayout } from "../layout"


const router = createBrowserRouter([
    {
        path: "/",
        element: <CommonLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "login",
                element:
                    <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            },
            {
                path: "categories/:id",
                element: <CategoriesPage />
            },
            {
                path: "contact",
                element: <ContactPage />
            },
            {
                path: "models",
                element: <ModelsPage />
            },
            {
                path: "portfolio",
                element: <PortfolioPage />
            },
            {
                path: "search",
                element: <SearchResultPage />
            },
            {
                path: "shopping-cart",
                element: <ShoppingCartPage />
            },
            {
                path: "favorites",
                element: <FavoritesPage />
            },
            {
                path: "account",
                element: <AccountPage />
            },
            {
                path: "product-map",
                element: <ProductsMap />
            }
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            },
            {
                path: "forgot-password",
                element: <ForgotPasswordPage />
            },
            {
                path: "reset-password",
                element: <ResetPasswordPage />
            },
        ],
    },
    {
        path: "/user",
        element: <UserLayout />,
        children: [
            {
                index: true,
                element: <UserProfilePage />
            },
            {
                path: "offers",
                element: <UserOffersPage />
            },
            {
                path: "offers/:id",
                element: <UserOfferDetailsPage />
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminDashboard />
            },
            {
                path: "offers",
                element: <AdminOffersPage />
            },
            {
                path: "offers/:id",
                element: <AdminOffersDetailsPage />
            },
            {
                path: "products",
                element: <AdminProductPage />
            },
            {
                path: "products/:id",
                element: <AdminProductEditPage />
            },
            {
                path: "new-product",
                element: <AdminNewProductPage />
            },
            {
                path: "categories",
                element: <AdminCategoriesPage />
            },
            {
                path: "categories/:id",
                element: <AdminCategoriesEditPage />
            },
            {
                path: "brands",
                element: <AdminBrandspage />
            },
            {
                path: "brands/:id",
                element: <AdminBrandsEditpage />
            },
            {
                path: "users",
                element: <AdminUsersPage />
            },
            {
                path: ":id/users",
                element: <AdminUserEditPage />
            },
            {
                path: "reports",
                element: <AdminReportPage />
            },
        ]
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}