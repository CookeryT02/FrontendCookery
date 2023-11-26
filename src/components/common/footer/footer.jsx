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
import { GrAmex } from "react-icons/gr";
import { LiaAmazonPay } from "react-icons/lia";
import { constants } from "../../../constants";
import { Link, useLocation } from "react-router-dom";
import QuickLink from "../../common/footer/quick-link/quick-link";
import ContactInfo from "../contact/info/info";
import Spacer from "../spacer/spacer";

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

  const { pathname } = useLocation();

  return (
    <footer>
      <Container>
        <Row className="up">
          <Row className="left-side">
            <Col xs={3}>
              <Link to={home}>
                <img src="/cookery-tech-logo.png" alt="" />
              </Link>
            </Col>
            <Col xs={9}>
              <ul className="quickLink">
                {quickLinks.map((quickLinks) => (
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
            <Col md={6} lg={8} xl={9}>
              <ContactInfo />
            </Col>
            <Col md={6} lg={4} xl={3}>
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
      <Spacer height="1rem" />
      <Container fluid className="bottom">
        <Container className="bottom-child">
          <Col lg={3} className="left">
            <p>2023 - Copyright by Cookery Tech</p>
          </Col>
          <Col lg={9} className="right">
            <Image src="/img/Iyzico_logo.svg.png" width="65px"></Image>
            <BiLogoVisa className="visa" size={60} />
            <LiaAmazonPay className="" size={40} />
            <GrAmex className="" size={75} />

          </Col>
        </Container>
      </Container>

    </footer>
  );
};

export default Footer;