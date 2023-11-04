import "./menu-bar.scss";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { AiOutlineHome, AiOutlineExclamationCircle } from "react-icons/ai";
import { TfiMapAlt } from "react-icons/tfi";
import { PiSquaresFourDuotone } from "react-icons/pi";
import { SlEarphones } from "react-icons/sl";
import { IoIosLogIn } from "react-icons/io";

const MenuBar = () => {

  return (
    <div className="bar-menu">
      <Navbar collapseOnSelect expand="lg" className="bg-warning p-0">
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
            <Nav>
              <Nav.Link eventKey={2} href="/login">
                <span>
                  <IoIosLogIn />
                </span>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuBar;