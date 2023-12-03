import { Button, Col, Container, Row } from "react-bootstrap";
import { PageHeader, Spacer, UserAvatar, UserPasswordForm, UserProfileForm } from "../../../../components";
import { useState } from "react";
import "./page.scss";
import UserOffersPage from "../offers/page";

const UserProfilePage = () => {
  const Titles = [
    { name: "Profile" },
    { name: "Account" },
    { name: "MyOffers" }
  ];

  const [selectedTitle, setSelectedTitle] = useState(Titles[0]);

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };

  const renderContentBasedOnTitle = () => {
    switch (selectedTitle.name) {
      case "Profile":
        return <UserProfileForm />;
      case "Account":
        return <UserPasswordForm />;
      case "MyOffers":
        return <UserOffersPage />;
      default:
        return null;
    }
  };

  return (
    <>
      <PageHeader title="PROFILE" />
      <Spacer />
      <Container>
        <Row className="justify-content-center gap-5">
          <Col md={3} className="text-center">
            <UserAvatar />
            {Titles.map((title, index) => (
              <Button
                key={index}
                className={`w-100 mb-3 user-button ${selectedTitle.name === title.name ? 'active' : ''}`}
                onClick={() => handleTitleClick(title)}
              >
                {title.name}
              </Button>
            ))}
          </Col>
          <Col md={8} >
            {renderContentBasedOnTitle()}
          </Col>
        </Row>
      </Container>
      <Spacer height={"5rem"} />
    </>
  );
};

export default UserProfilePage;
