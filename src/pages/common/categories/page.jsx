import { useEffect, useState } from "react";
import { PageHeader, Product } from "../../../components";
import BreadCrumb from "../../../components/common/categories/bread-crumb/breadCrumb";
import { services } from "../../../services";
import { useParams } from "react-router-dom";
import CategoriesDesc from "../../../components/common/categories/categories-desc/categories-desc";
import Products from "../../../components/common/categories/products/products";
import MapProducts from "../productsmap/map-products/map-products";


const CategoriesPage = () => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts ] = useState([]);
  const {id:categoryId} = useParams();


  const loadData = async (categoryId) => {
    try {
      const {content} = await services.product.getProductsByCategoryId(categoryId);  
      setProducts(content);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    categoryId && loadData(categoryId);
  }, [categoryId]);

  return (
     <div className="categoriesPage">
        <PageHeader
        title = "Categories"
        />
       <BreadCrumb categoryId={categoryId} />
       <CategoriesDesc categoryId={categoryId}/>
       <Products categoryId={categoryId}/> 
     
     </div>
  )
};

export default CategoriesPage;