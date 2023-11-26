import React, { useEffect, useState } from 'react';
import { services } from '../../../../services';
import { Loading } from '../../../../components';

const MapProducts = ({ categoryId }) => {
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
                    <div key={index} className="col-xl-4 col-md-6">
                        <div className="product-title">
                            <p>{product.title}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default MapProducts;