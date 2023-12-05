import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { utils } from "../../../utils";
import { logout } from "../../../store";
import { constants } from "../../../constants";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./sidebar.scss";

const { routes } = constants;

const navigationItems = [
  {
    title: "Dashboard",
    pathname: routes.adminDashboard,
  },
  {
    title: "Products",
    pathname: routes.adminProducts,
  },
  {
    title: "Categories",
    pathname: routes.adminCategories,
  },
  {
    title: "Brands",
    pathname: routes.adminBrands,
  },
  {
    title: "Users",
    pathname: routes.adminUsers,
  },
  {
    title: "Offers",
    pathname: routes.adminOffers,
  },
  {
    title: "Reports",
    pathname: routes.adminReports,
  }
];

const Sidebar = () => {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    utils.functions.swalQuestion("Logout", "Are you sure you want to logout?")
      .then((response) => {
        if (response.isConfirmed) {
          dispatch(logout());
          navigate(routes.home)
        }
      })
  }

  return (
    <Navbar expand="lg" className="admin-sidebar">
      <Container className="adminSidebarContainer">
        <Navbar.Brand href="#home">
          <Link to={routes.home} title="Homepage">
            <div className="logo">
              <img src="/cookery-tech-logo.png" alt="home" />
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="admin-panel" />
        <Navbar.Collapse id="admin-panel">
          <Nav className="adminSidebarNav">
            {navigationItems.map((item) => (
              <Nav.Link
                key={item.title}
                as={Link}
                to={item.pathname}
                active={
                  item.title === "Dashboard"
                    ? pathname === item.pathname
                    : pathname.startsWith(item.pathname)
                }>
                {item.title}
              </Nav.Link>
            ))}
            <Nav.Link as={Link} to={routes.home}>
              Website
            </Nav.Link>
            <Nav.Link as={Link} onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Sidebar;