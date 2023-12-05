import { useEffect, useState } from "react";
import { services } from "../../../../services";
import { Link } from "react-router-dom";


const BreadCrumb = ({categoryId}) => {

    const [categoryName, setCategoryName] = useState('');

    useEffect(()=> {
        const getCategoryName = async () => {
            try {
                const category = await services.category.getOneCategory(categoryId);
                setCategoryName(category.title);
            } catch (error) {
                console.log(error);
            }
        };

        if(categoryId) {
            getCategoryName();
        }
    },[categoryId]);


  return (
    <div style={{boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", marginTop:"1rem", borderRadius: "8px"}}>
        <Link to="/">Home</Link>
        {categoryId && <span> / {categoryName}</span>}
    </div>
  )
}

export default BreadCrumb;