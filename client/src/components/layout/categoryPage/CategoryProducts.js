import React,{useContext, useEffect} from 'react'

import CategoryProductLeft from './CategoryProductLeft'
import CategoryProductRight from './CategoryProductRight'

//Import context
import ProductsContext from '../../../context/products/productsContext';

const CategoryProductLayout = (props) => {

    useEffect(() => {
        console.log(props.category)
    },[])

    //Init context and destructure needed logic
    const productsContext = useContext(ProductsContext)
    const {activeCategoryProducts, activeCategory} = productsContext;

  

 if (activeCategoryProducts != null && activeCategory === props.category ) {
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
                  price = product.price;  

                  if (order % 2 === 0) return <CategoryProductRight productData = {category,description,features,gallery,id,image,includes,name,isNew,other,price}/>

                  return <CategoryProductLeft productData = {category,description,features,gallery,id,image,includes,name,isNew,other,price}/>
            })}
        </>
    )
 } else {
     return (
        <h1>Loading</h1>
     )
 }
    
}

export default CategoryProductLayout
