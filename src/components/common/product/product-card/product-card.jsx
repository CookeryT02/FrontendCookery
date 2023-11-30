import { Link } from "react-router-dom";
import "./product-card.scss";
import { constants } from "../../../../constants";

const { routes } = constants;

const ProductCard = (props) => {

    return (
        <Link to={`${routes.products}/${props.id}`}>
            <div className="product-card">
                <div className="image">
                    <img src="/img/no_image.jpg" alt="" />
                </div>
                <h6>{props.title}</h6>
                <div className="details">
                    {props.longDescription}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
