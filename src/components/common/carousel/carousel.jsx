import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Image, Row } from 'react-bootstrap';


const HomeCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

  return <>
  
  <Container>
    <Row>
      <Col xs lg={12}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image text="First slide" src='/public/img/banner.jpg' width="100%"/>
      </Carousel.Item>
      <Carousel.Item>
      <Image text="second slide" src='/public/img/banner.jpg' width="100%"/>
      </Carousel.Item>
      <Carousel.Item>
      <Image text="third slide" src='/public/img/banner.jpg' width="100%" />
      </Carousel.Item>
    </Carousel>
      </Col>
    </Row>
  </Container>
   
  </>
};

export default HomeCarousel;