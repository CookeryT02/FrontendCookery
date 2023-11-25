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
const portfolio = [
    {
        id: 1,
        title: "The French Laundry",
        city: "California",
    },
    {
        id: 2,
        title: "Per Se",
        city: "New York",
    },
    {
        id: 3,
        title: "Alinea",
        city: "Chicago",
    },
    {
        id: 4,
        title: "Eleven Madison Park",
        city: "New York",
    },
    {
        id: 5,
        title: "Le Bernardi",
        city: "New York",
    },
    {
        id: 6,
        title: "Momofuku Ko",
        city: "New York",
    },
    {
        id: 7,
        title: "Atelier Cren",
        city: "San Francisco",
    },
    {
        id: 8,
        title: "SingleThread",
        city: "California",
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
    login: "/login",
    privacyPolicy: "/privacy-policy",
    register: "/auth/register",
    userProfile: "/user",
    productMap: "/product-map",
    portfolio: "/portfolio",
    products: "/products"


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
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383.7845823249808!2d-84.16526631596061!3d39.68848314021448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884085ead606cfb9%3A0x16c698544a5b8d3!2s328%20E%20Stroop%20Rd%2C%20Kettering%2C%20OH%2045429%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1699290944130!5m2!1str!2str",
    },
    address: "328 E Stroop Rd, Kettering, Ohio, USA",
    phone: "(937) 294-5411",
    email: "info@cookerytech.com",
    mapUrl: "https://maps.app.goo.gl/q5vtAxPw7pgDbAbF8"
}


export const constants = {
    roles,
    portfolio,
    routes,
    website,
}