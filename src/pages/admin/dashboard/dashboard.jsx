import { useEffect, useState } from "react";
import { constants } from "../../../constants";
import { services } from "../../../services";
import { Col, Container, Row } from "react-bootstrap";
import { DashboardCard, Loading, Spacer } from "../../../components";
import { FaUsers, FaLeaf, FaLayerGroup, FaHandshake } from "react-icons/fa";
import { PiPrinterFill } from "react-icons/pi";

const { routes } = constants;

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(0);
  const [brands, setBrands] = useState(0);
  const [products, setProducts] = useState(0);
  const [categories, setCategories] = useState(0);
  const [todaysOffers, setTodaysOffers] = useState(0);

  const loadData = async () => {
    try {
      const userData = await services.user.getUsersByPage();
      setUsers(userData?.totalElements);
      const brandsData = await services.product.getBrandsByPage();
      setBrands(brandsData?.totalElements)
      const productsData = await services.product.getProductsByPage();
      setProducts(productsData?.totalElements)
      const categoriesData = await services.product.getAllCategories();
      setCategories(categoriesData?.length)
      const todaysOffersData = await services.offer.getTodaysOffersByPage();
      console.log(todaysOffersData)
      setTodaysOffers(todaysOffersData?.totalElements)
      console.log(todaysOffers)

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const dashboardItems = [
    {
      title: "Users",
      icon: <FaUsers />,
      path: routes.adminUsers,
      statistics: users,
    }, {
      title: "Brands",
      icon: <FaLeaf />,
      path: routes.adminBrands,
      statistics: brands,
    },
    {
      title: "Products",
      icon: <PiPrinterFill />,
      path: routes.adminProducts,
      statistics: products,
    },
    {
      title: "Categories",
      icon: <FaLayerGroup />,
      path: routes.adminCategories,
      statistics: categories,
    },
    {
      title: "Today's offers",
      icon: <FaHandshake />,
      path: routes.adminOffers,
      statistics: todaysOffers,
    }
  ];

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container className="admin-dashboard">
      <Spacer height={"9rem"} />
      {loading ? (
        <Loading height={500} />
      ) : (
        <>
          <Row >
            {dashboardItems.map((item, index) => (
              <Col key={index} sm={6} md={4}>
                <DashboardCard {...item} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default AdminDashboard;
