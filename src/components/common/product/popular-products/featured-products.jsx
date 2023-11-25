import { useEffect, useState } from "react";
import { services } from "../../../../services";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import "./featured-products.scss"
import Loading from "../../loading/loading";
import ProductCard from "../product-card/product-card";

const PopularProducts = () => {
  const { user } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    try {
      const productData = await services.product.getProductsByPage();
      const { content } = productData;
      setProducts(content);
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  })
  return (
    <div className="popular-products">

      <Container class="content-container">
        <img src="/img/small-logo.png" class="small-logo" alt="" />
        <p className="txt">POPULAR PRODUCTS</p>
        <Row className="gy-5">
          {loading ? <Loading /> :
            products && products.map((product, index) => (
              <Col md={6} lg={4} key={product.id || index}>
                <ProductCard {...product} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
};

export default PopularProducts;