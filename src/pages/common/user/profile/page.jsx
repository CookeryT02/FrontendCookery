import { Button, Col, Container, Row } from "react-bootstrap";
import { PageHeader, Spacer, UserAvatar, UserPasswordForm, UserProfileForm } from "../../../../components";
import { useEffect, useState } from "react";

const UserProfilePage = () => {

  const [selectedTitle, setSelectedTitle] = useState(null);

  const Tittles = [
    {
      name: "Profile",

    },
    {
      name: "Account",
    },
    { name: "MyOffers" }
  ]

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };

  return (
    <>
      <PageHeader
        title="PROFILE"
      />
      <Spacer />
      <Container>
        <Row className="justify-content-center gap-5">
          <Col lg={2} className="text-center">
            <UserAvatar />
            {Tittles.map((title, index) => (
              <Button
                className={`w-100 mb-3 category-button ${selectedTitle === title ? 'active' : ''
                  }`}
                onClick={() => handleTitleClick(title)}
              >
                {title.name}
              </Button>
            ))}
          </Col>
          <Col lg={4}>
            <UserProfileForm />
          </Col>
          <Col lg={4}>
            <UserPasswordForm />
          </Col>
        </Row>

      </Container>
      <Spacer />
    </>
  )
};

export default UserProfilePage;