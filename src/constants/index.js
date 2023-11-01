const roles = [
    {
        id: 1,
        name: "Customer",
        value: "Customer",
    },
    {
        id: 2,
        name: "Admin",
        value: "Administrator",
    },
    {
        id: 3,
        name: "Product Manager",
        value: "Product Manager",
    },
    {
        id: 4,
        name: "Sales Manager",
        value: "Sales Manager",
    },
    {
        id: 5,
        name: "Sales Specialist",
        value: "Sales Specialist",
    }
];

const routes = {
    // ADMIN ROUTES
    adminDashboard: "/admin",
    adminOffers: "/admin/offers",
    adminUsers: "/admin/users",
    adminVehicles: "/admin/vehicles",

    // COMMON ROUTES
    about: "/about",
    contact: "/contact",
    forbidden: "/forbidden",
    home: "/",
    login: "/auth/login",
    privacyPolicy: "/privacy-policy",
    register: "/auth/register",
    userProfile: "/user",
    productMap: "/product-map",
    portfolio: "/portfolio",

};

export const constants = {
    roles,
    routes
}