import React,{useContext, useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'

import CategoryProductLeft from './CategoryProductLeft'
import CategoryProductRight from './CategoryProductRight'
import CategoryLeftLoading from '../CategoryLeftLoading'
import ProductTextLoader from '../ProductTextLoader'
import MobileProductLoader from '../MobileProductLoader'
import MobileProductTextLoader from '../MobileProductTextLoader'

//Import context
import ProductsContext from '../../../context/products/productsContext';

const CategoryProductLayout = (props) => {

    useEffect(() => {
        console.log(props.category)
    },[])

    //Init context and destructure needed logic
    const productsContext = useContext(ProductsContext)
    const {activeCategoryProducts, activeCategory,loading } = productsContext;

    //Set media query for reposnisve size 
  const isTablet  = useMediaQuery({ minWidth: 481, maxWidth: 780 })
  const isDesktop  = useMediaQuery({ minWidth: 1024 })
  const isMobile  = useMediaQuery({ maxWidth: 480 })


  

 if (activeCategoryProducts != null && activeCategory === props.category && !loading ) {
    return (
        <>
            
            {activeCategoryProducts.map((product) => {
                  const category = product.category,
                  order = product.order,
                  description = product.description,
                  features =  product.description,
                  gallery = product.gallery,
                  id = product.id,
                  image = product.image,
                  includes = product.includes,
                  name = product.name,
                  isNew = product.new,
                  other = product.others,
                  price = product.price,
                  slug = product.slug

                  if (order % 2 === 0) return <CategoryProductRight productData = {{category,description,features,gallery,id,image,includes,name,isNew,other,price,slug}}/>

                  return <CategoryProductLeft productData = {{category,description,features,gallery,id,image,includes,name,isNew,other,price,slug}}/>
            })}
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

export default CategoryProductLayout
