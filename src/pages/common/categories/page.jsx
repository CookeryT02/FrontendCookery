import { useEffect, useState } from "react";
import { PageHeader } from "../../../components";
import BreadCrumb from "../../../components/common/bread-crumb/breadCrumb";
import { services } from "../../../services";
import { useParams } from "react-router-dom";


const CategoriesPage = () => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts ] = useState([]);
  const {categoryId} = useParams();
  console.log(categoryId)

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
    loadData(categoryId);
  }, [categoryId]);

  return (
     <div className="categoriesPage">
        <PageHeader
        title = "Categories"
        />
       <BreadCrumb categoryId={categoryId} />

     </div>
  )
};

export default CategoriesPage;