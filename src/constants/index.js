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

const website = {
    name: 'Cookery Tech',
    about: {
        title: "About Us",
        desc: [" At Cookery Tech Industrial Kitchen Equipment, we specialize in " +
            "providing high-quality and reliable solutions for commercial " +
            "kitchens. With years of experience in the industry, we understand " +
            "the unique needs and demands of professional foodservice " +
            "establishments. Our company is committed to delivering top-notch " +
            "products that meet the highest standards of performance, durability, " +
            "and safety. Whether you run a bustling restaurant, a busy hotel " +
            "kitchen, or a large-scale catering operation, we have a wide range " +
            "of industrial kitchen equipment to meet your specific requirements. " +
            "From cutting-edge cooking equipment and efficient food preparation " +
            "tools to innovative storage solutions and reliable refrigeration " +
            "systems, our comprehensive product lineup ensures that your kitchen " +
            "operates smoothly and efficiently. We work closely with renowned " +
            "manufacturers and brands to offer the latest advancements in kitchen " +
            "technology. What sets us apart is our dedication to exceptional " +
            "customer service. Our knowledgeable team of experts is ready to " +
            "assist you in finding the perfect equipment for your unique needs. " +
            "We provide personalized guidance, detailed product information, and " +
            "reliable after-sales support to ensure your complete satisfaction. " +
            "At Cookery Tech Industrial Kitchen Equipment, we are passionate " +
            "about helping our customers create culinary masterpieces and achieve " +
            "their business goals. We take pride in being a trusted partner in " +
            "the foodservice industry, providing reliable equipment that enhances " +
            "productivity, efficiency, and ultimately, culinary excellence. " +
            "Contact us today to discover how our industrial kitchen equipment " +
            "can elevate your foodservice operation to new heights. We look " +
            "forward to serving you and becoming your go-to resource for all your " +
            "commercial kitchen needs."],
    },
    contact: {
        title: "Contact Us",
        image: "",
        mapEmbedUrl: "",
    },
    address: "328 E Stroop Rd, Kettering, Ohio, USA",
    phone: "(937) 294-5411",
    email: "info@cookerytech.com",
}


export const constants = {
    roles,
    routes,
    website,
}