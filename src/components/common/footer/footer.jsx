import "./footer.scss";
import { Col, Container, Image, Row } from "react-bootstrap";
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
import { constants } from "../../../constants";
import { Link, useLocation } from "react-router-dom";
import QuickLink from "../../common/footer/quick-link/quick-link";

const {
  routes: { about, contact, home, productMap, portfolio }
} = constants;

const quickLinks = [
  {
      direct: home,
      icon: <AiOutlineHome />,
      text: "Home",
  },
  {
      direct: productMap,
      icon: <TfiMapAlt />,
      text: "Product Map",
  },
  {
      direct: portfolio,
      icon: <PiSquaresFourDuotone />,
      text: "Portfolio",
  },
  {
      direct: about,
      icon: <AiOutlineExclamationCircle />,
      text: "About Us",
  },
  {
      direct: contact,
      icon: <SlEarphones />,
      text: "Contact Us",
  },
 
];

const Footer = () => {

  const {pathname} = useLocation();

  return (
    <footer>
      <Container>
      <Row className="up">
        <Row className="left-side">
        <Col md={4} lg={6}>
          <Link to={home}>
          <img src="../../../../public/cookery-tech-logo.png" alt="" />
          </Link>
          </Col>
        <Col md={8}   lg={6}>
          <ul className="quickLink">
            {quickLinks.map((quickLinks)=>(
              <QuickLink
              key={quickLinks.text}
              pathname={pathname}
              {...quickLinks}
              />
            ))}
          </ul>
        </Col>  
        </Row>
        <Row className="orta-menu">
        <Col lg={8} xl={9}>
          <ul>
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
        <Col lg={4} xl={3}>
          <ul className="privacy">
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
          </Row>
      </Container>
          <Container fluid className="bottom">
          <Col lg={3}>
            <p>2023 - Copyright by Cookery Tech</p>
          </Col>
          <Col lg={3}>
            <BiLogoVisa className="visa" size={75}/>
          <Image src="../../../../public/img/americanexpress.png" width="75px"></Image>
          <Image src="../../../../public/img/iyzico-logo-subbrands-pwi.png" width="75px"></Image>
          <Image src="../../../../public/img/troy.png" width="75px"></Image>
          </Col>
          </Container>
      
    </footer>
  );
};

export default Footer;