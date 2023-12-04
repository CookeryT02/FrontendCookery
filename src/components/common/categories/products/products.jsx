import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Loading from '../../loading/loading';
import { services } from '../../../../services';
import ProductCard from '../../product/product-card/product-card';

const Products = (categoryId) => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const loadData = async () => {
        try {
            const productsData = await services.product.getProductsByCategoryId(categoryId);
            setProducts(productsData);
            
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, [categoryId]);


  return (
    <div>
          <Container className="content-container">
            <Row >
              {loading ? <Loading /> :
                products && products.map((product, index) => (
                  <Col xs={4} lg={2} key={product.id || index}>
                    <ProductCard {...product} />
                  </Col>
                ))
              }
            </Row>
          </Container>
          
        </div>
  )
}

export default Products;