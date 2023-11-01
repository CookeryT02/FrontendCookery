import "./footer.scss";
import { Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import {
  AiOutlineHome,
  AiOutlineExclamationCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { TfiMapAlt } from "react-icons/tfi";
import { PiSquaresFourDuotone } from "react-icons/pi";
import { SlEarphones } from "react-icons/sl";
import { GoDot } from "react-icons/go";
import { BiLogoVisa } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <Row className="up">
        <Col className="left-side">
          <img src="./cookery-tech-logo.png" alt="" />
          <ul className="ul-li">
            <li>
              <TfiMapAlt /> <span>328 E Stroop Rd, Kettering, Ohio, USA</span>
            </li>
            <li>
              <SlEarphones /> <span>(937) 294-5411</span>
            </li>
            <li>
              <AiOutlineMail />
              <span> info@cookerytech.com</span>
            </li>
          </ul>
        </Col>
        <Col className="right-side">
          <div className="quick-link">
            <div>
              <AiOutlineHome /> Home
            </div>
            <div>
              <AiOutlineExclamationCircle />
              About
            </div>
            <div>
              <TfiMapAlt />
              Product Map
            </div>
            <div>
              <PiSquaresFourDuotone />
              Portfolio
            </div>
            <div>
              <SlEarphones />
              Contact
            </div>
          </div>
          <div className="privasy"></div>
          <ul>
            <li>
              <GoDot /> <span> Privacy and Cookie Policy </span>
            </li>
            <li>
              <GoDot /> <span>Online Purchase Agreement</span>
            </li>
            <li>
              <GoDot /> <span>Cancellattion and Refund Terms</span>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="down">
        <Col className="copyright">2023 - Copyright by Cookery Tech</Col>
        <Col className="payment">
          <BiLogoVisa />
        </Col>
      </Row>
    </>
  );
};

export default Footer;
