import { useState } from "react";
import { constants } from "../../../constants";
import CardItem from "./card-item/card-item";
import "./portfolio.scss";
const { portfolio } = constants;
const Portfolio = () => {
    const [popup, setPopup]=useState(null);
  return (
    <div className="portfolio">
      {portfolio.map((item) => (
        <CardItem key={item.id} portfolio={item}/>
      ))}
    </div>
  );
};

export default Portfolio;
