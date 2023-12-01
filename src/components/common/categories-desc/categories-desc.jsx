import React, { useEffect, useState } from 'react'
import { services } from '../../../services';
import { setProducts } from '../../../store';

const CategoriesDesc = (categoryId) => {

    const [categoryName, setCategoryName] = useState('');
    const [product, setProduct] = useState([]);

    useEffect(()=> {
        const getCategoryName = async (categoryId) => {
            try {
                const category = await services.category.getOneCategory(Number(categoryId));
                setCategoryName(category.title);
               
                const productData = await services.product.getProductsByCategoryId(categoryId);
                const {content} = productData;
                setProducts(content);
                console.log(product);
            } catch (error) {
                console.log(error);
            }
        };

        
            categoryId && getCategoryName(categoryId);
        
    },[categoryId]);

  return (
    <div>
        <h4>{categoryName}</h4>
    </div>
  );
};

export default CategoriesDesc;