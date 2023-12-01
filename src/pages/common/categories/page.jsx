import { useEffect, useState } from "react";
import { PageHeader } from "../../../components";
import BreadCrumb from "../../../components/common/bread-crumb/breadCrumb";
import { services } from "../../../services";
import { useParams } from "react-router-dom";
import MapCategories from "../productsmap/map-categories/map-categories";
import MapProducts from "../productsmap/map-products/map-products";
import CategoriesDesc from "../../../components/common/categories-desc/categories-desc";


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
     </div>
  )
};

export default CategoriesPage;