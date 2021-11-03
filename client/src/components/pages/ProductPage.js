import React, {useEffect, useContext} from 'react';
import { useMediaQuery } from 'react-responsive';

import Product from '../layout/productPage/Product'
import FeaturesSection from '../layout/productPage/FeaturesSection'
import ThreeImages from '../layout/productPage/ThreeImages'
import Recommended from '../layout/productPage/Recommended'
import CategoriesSection from '../layout/CategoriesSection'
import InformationSection from '../layout/InformationSection'
import CategoryProductRight from '../layout/categoryPage/CategoryProductRight';

import ProductsContext from '../../context/products/productsContext';

const ProductPage = (props) => {

    //Init context and destructure needed logic
    const productsContext = useContext(ProductsContext)
    const {getSingleProduct, singleProduct,loading } = productsContext;

    useEffect(() => {
        getSingleProduct(props.match.params.product)
    }, [])

     
    if(singleProduct != null && !loading){
        return (
            <>
            <div className = 'container'>
    
                    {loading == false && 
                    <>
                    <Product productData = {{
                      category : singleProduct[0],
                      order : singleProduct[0].order,
                      description : singleProduct[0].description,
                      id : singleProduct[0].id,
                      image : singleProduct[0].image,
                      name : singleProduct[0].name,
                      isNew : singleProduct[0].new,
                      price : singleProduct[0].price }}/> 
    
                      <FeaturesSection productData = {{
                        features :  singleProduct[0].features,
                        includes : singleProduct[0].includes,
    
                      }}/>
                      
                      <ThreeImages productData = {{
                          gallery : singleProduct[0].gallery,
                      }}/>
    
                    <Recommended productData = {{
                      others : singleProduct[0].others,
    
                    }}/>
    
                    <CategoriesSection />
    
                    <InformationSection /> 
                    </>
    
                      }
    
                    </div>
            </>
        )
    } else {return <h1>Loading</h1>}
}





export default ProductPage;