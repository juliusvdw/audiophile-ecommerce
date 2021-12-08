import React, {useEffect, useContext} from 'react';
import { useMediaQuery } from 'react-responsive';

import Product from '../layout/productPage/Product'
import FeaturesSection from '../layout/productPage/FeaturesSection'
import ThreeImages from '../layout/productPage/ThreeImages'
import Recommended from '../layout/productPage/Recommended'
import CategoriesSection from '../layout/CategoriesSection'
import InformationSection from '../layout/InformationSection'
import CategoryLeftLoading from '../layout/CategoryLeftLoading';
import ProductTextLoader from '../layout/ProductTextLoader';

import ProductsContext from '../../context/products/productsContext';
import MobileProductLoader from '../layout/MobileProductLoader';
import MobileProductTextLoader from '../layout/MobileProductTextLoader';

const ProductPage = (props) => {

  //Set media query for reposnisve size 
  const isTablet  = useMediaQuery({ minWidth: 481, maxWidth: 780 })
  const isDesktop  = useMediaQuery({ minWidth: 1024 })
  const isMobile  = useMediaQuery({ maxWidth: 480 })

    //Init context and destructure needed logic
    const productsContext = useContext(ProductsContext)
    const {getSingleProduct, singleProduct,loading, setSingleProduct } = productsContext;

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
                      description : singleProduct[0].description,
                      id : singleProduct[0].id,
                      image : singleProduct[0].image,
                      name : singleProduct[0].name,
                      isNew : singleProduct[0].new,
                      price : singleProduct[0].price,
                      slug: singleProduct[0].slug }}/> 
    
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
    } else {
       
      if(isDesktop) {
        return (
          <div className = 'container'>
            <div className = 'row'>
              <div className = 'col-lg-6'>
              <CategoryLeftLoading />
  
              </div>
              <div className = 'col-lg-6' style = {{paddingLeft:'120px' ,paddingTop:'120px'}}>
              <ProductTextLoader />
  
              </div>
            </div>
            
  
         </div> )

      } else if (isMobile) {
          return (
            <div className = 'container text-center' style = {{marginTop:'50px'}}>
                          <MobileProductLoader />
                          <MobileProductTextLoader />

            </div>

          )

      } else {
        return (
          <div className = 'container'>
            <div className = 'row'>
              <div className = 'col-lg-6'>
              <CategoryLeftLoading />
  
              </div>
              <div className = 'col-lg-6' style = {{paddingLeft:'120px' ,paddingTop:'120px'}}>
              <ProductTextLoader />
  
              </div>
            </div>
            
  
         </div> )

      }
      
    }
}





export default ProductPage;