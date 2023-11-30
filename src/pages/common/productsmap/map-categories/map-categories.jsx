import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { services } from '../../../../services'
import Loading from '../../../../components/common/loading/loading';
import MapProducts from '../map-products/map-products';

const MapCategories = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const loadData = async () => {
        try {
            const categoriesData = await services.product.getAllCategories();
            setCategories(categoriesData);
            setSelectedCategory(categoriesData.length > 0 ? categoriesData[0] : null);
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='try'>
            {loading ? (
                <Loading />
            ) : (
                <Row>
                    <Col xs={5} sm={4} xl={3}>
                        {loading ? <Loading /> :
                            categories && categories.map((category, index) => (
                                <Container key={category.id || index}>
                                    <Button
                                        className={`w-100 mb-3 category-button ${selectedCategory === category ? 'active' : ''
                                            }`}
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                        {category.title}
                                    </Button>
                                </Container>
                            ))}
                    </Col>
                    <Col xs={7} sm={8} xl={9}>

                        <h4>{loading ? <Loading /> :
                            selectedCategory && selectedCategory.title}</h4>
                        {selectedCategory && <MapProducts categoryId={selectedCategory.id} />}
                    </Col>
                </Row>
            )}
        </div>
    )
}

export default MapCategories