import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <Container fluid className="auth-layout">
      <Row>
        <Col lg={6} className="banner">
          <img src="./img/login-img.png" alt="" />
        </Col>
        <Link></Link>

        <Col>
          login page
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default AuthLayout;
