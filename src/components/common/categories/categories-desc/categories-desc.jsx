import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';  // `useSelector` hook'unu içe aktarın
import { services } from '../../../../services';
import { PiDotsNineBold, PiDotsSixBold } from "react-icons/pi";
import Loading from '../../loading/loading';
import { Container, Row } from 'react-bootstrap';
import ProductCard from '../../product/product-card/product-card';

const CategoriesDesc = ({ categoryId }) => {
    const { user, isLoggedIn } = useSelector((state) => state.auth);

    const [loading, setLoading] = useState(true);
    const [categoryName, setCategoryName] = useState('');
    const [categoryDesc, setCategoryDesc] = useState('');
    

    const getCategoryName = async () => {
        try {
            const category = await services.category.getOneCategory(categoryId);
            setCategoryName(category.title);
            setCategoryDesc(category.description);
            
        } catch (error) {
            console.log(error);
        }
    };

    

    useEffect(() => {
        if (categoryId) {
            getCategoryName();
        }
    }, [categoryId]);

    return (
        <div>
            <h5>
                {categoryId && <span>{categoryName}</span>}
            </h5>
            <p>{categoryId && categoryDesc}</p>
            <div style={{ 
                border: "1px solid rgba(0, 0, 0, 0.2)", 
                borderRadius: "8px", 
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", 
                  
                }}>
                <PiDotsNineBold className='me-3' style={{fontSize:"1.2rem", color:"grey"}}/>
                <PiDotsSixBold style={{fontSize:"1.3rem", color:"grey"}} />
            </div>
 
        
            
        </div>
    );
};

export default CategoriesDesc;
