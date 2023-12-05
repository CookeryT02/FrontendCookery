import "./menu-bar.scss";
import { Button, Container, Dropdown, DropdownToggle, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { AiOutlineHome, AiOutlineExclamationCircle } from "react-icons/ai";
import { TfiMapAlt } from "react-icons/tfi";
import { PiSquaresFourDuotone } from "react-icons/pi";
import { SlEarphones } from "react-icons/sl";
import { constants } from "../../../../constants";
import UserMenu from "./userMenu/userMenu";
import { Link, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { services } from "../../../../services";
import Loading from "../../loading/loading";

const { routes } = constants;

const MenuItems = [
  {
    title: 'Home',
    path: routes.home,
    icon: <AiOutlineHome />
  },
  {
    title: 'About',
    path: routes.about,
    icon: <AiOutlineExclamationCircle />
  },
  {
    title: 'Product Map',
    path: routes.productMap,
    icon: <TfiMapAlt />
  },
  {
    title: 'Portfolio',
    path: routes.portfolio,
    icon: <PiSquaresFourDuotone />
  },
  {
    title: 'Contact',
    path: routes.contact,
    icon: <SlEarphones />
  }
]

const MenuBar = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const navigate = useNavigate();

  const loadData = async () => {
    try {
      const categoriesData = await services.product.getAllCategories();
      setCategories(categoriesData);
      setSelectedCategory(categoriesData.length > 0 ? categoriesData[0] : null);
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/categories/${category.id}`);
    setSelectedCategory(category);
    setDropdownOpen(false);
  };

  const handleUserMenuClick = (e) => {
    e.stopPropagation();
  };


  return (
    <div className="bar-menu">
      <Navbar collapseOnSelect expand="lg" className="navbar p-0">
        <Container>
          <NavDropdown
            title={
              <>
                Products <IoMdArrowDropdown />
              </>
            }
            id="collapsible-nav-dropdown"
            className="product-menu"
          >
            <div>
              <ul>
                {loading ? <Loading /> :
                  categories && categories.map((category, index) => (
                    <li
                      className={`mb-1 category-li ${selectedCategory === category ? 'active' : ''
                        }`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category.title}
                    </li>
                  ))}
              </ul>
            </div>

          </NavDropdown>

          <Nav className="me-auto mid-menu">
            {MenuItems.map((item) => (
              <Link to={item.path}>
                <span>
                  {item.icon}
                </span>{" "}
                {item.title}
              </Link>
            ))}
          </Nav>
          <UserMenu className="user-menu" />

          <Dropdown align="end" className="sm-menu">
            <DropdownToggle>
              <IoIosMenu />
            </DropdownToggle>
            <Dropdown.Menu>

              {MenuItems.map((item) => (
                <Dropdown.Item>
                  <Link to={item.path}>
                    <span>
                      {item.icon}
                    </span>{" "}
                    {item.title}
                  </Link>
                </Dropdown.Item>
              ))}
              <Dropdown.Item onClick={handleUserMenuClick} className="p-0 mt-1">
                <UserMenu />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div >
  );
};

export default MenuBar;


/* const MenuBar = () => {

  return (
    <div className="bar-menu">
      <Navbar collapseOnSelect expand="lg" className="navbar p-0">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Products"
                id="collapsible-nav-dropdown"
                className="product-menu">

                <div className="menu">
                  <ul>
                    <li>Equipment</li>
                    <li>Cooking Equipment</li>
                    <li>Transport Equipment</li>
                    <li>Serving Equipment</li>
                    <li>Cooling Equipment</li>
                    <li>Dishwashing Equipment</li>
                    <li>Cafe and Bar Equipment</li>
                    <li>Sinks and Countertops</li>
                  </ul>
                </div>

              </NavDropdown>

              <Nav.Link href="/">
                {" "}
                <span>
                  <AiOutlineHome />
                </span>{" "}
                Home
              </Nav.Link>
              <Nav.Link href="/about">
                <span>
                  <AiOutlineExclamationCircle />
                </span>{" "}
                About
              </Nav.Link>
              <Nav.Link href="/product-map">
                <span>
                  <TfiMapAlt />
                </span>{" "}
                Product Map
              </Nav.Link>
              <Nav.Link href="/portfolio">
                <span>
                  <PiSquaresFourDuotone />
                </span>{" "}
                Portfolio
              </Nav.Link>
              <Nav.Link href="/contact">
                <span>
                  <SlEarphones />
                </span>{" "}
                Contact
              </Nav.Link>
            </Nav>
            <UserMenu />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar; */