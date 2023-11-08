import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../../components/common/page-header/page-header";
import Spacer from "../../../components/common/spacer/spacer";
import ContactInfo from "../../../components/common/contact/info/info";
import ContactForm from "../../../components/common/contact/form/form";
import ContactMap from "../../../components/common/contact/map/map";


const ContactPage = () => {
  return (
    <>
      <PageHeader title="contact" />

      <Spacer />

      <ContactMap />

      <Spacer />

      <Container>
        <Row>
          <Col md={6}>
            <ContactInfo />
          </Col>
          <Col md={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>

      <Spacer height="8rem" />

    </>
  )
};

export default ContactPage;