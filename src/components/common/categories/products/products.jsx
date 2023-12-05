import React, { useEffect, useState } from 'react';
import { services } from '../../../../services';
import { Loading } from '../../../../components';
import { Link } from 'react-router-dom';
import { constants } from '../../../../constants';
import ProductCard from '../../product/product-card/product-card';


const { routes } = constants;

const Products = ({ categoryId }) => {
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
        <div className="row mt-4">
            {loading ? <Loading /> : (
                products.map((product, index) => (
                    <div key={index} className="col-md-4 col-sm-6">
                        <Link to={`${routes.products}/${product.id}`} className="product-title">
                            <ProductCard {...product} />
                        </Link>
                    </div>
                ))
            )}
        </div>
    );
};

export default Products;