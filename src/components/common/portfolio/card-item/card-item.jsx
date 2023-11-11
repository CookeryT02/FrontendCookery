import portfolioimg from "/img/portfolio.jpg";
import { Card, Col } from "react-bootstrap";
import "./card-item.scss";
import React, { useState, useEffect } from "react";

const CardItem = ({ portfolio }) => {
  const [isZoomed, setZoomed] = useState(false);

  const toggleZoom = () => {
    setZoomed(!isZoomed);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isZoomed && e.target.closest(".zoomed") === null) {
        setZoomed(false);
      }
    };

    if (isZoomed) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isZoomed]);

  return (
    <Col className={`item ${isZoomed ? "zoomed" : ""}`} onClick={toggleZoom}>
      <Card className="card" style={{ width: "18rem", height: "15rem" }}>
        <Card.Img
          variant="top"
          src={portfolioimg}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <div className="cardtext">
          <div>{portfolio.title}</div>
          <div>{portfolio.city}</div>
        </div>
      </Card>
    </Col>
  );
};

export default CardItem;
