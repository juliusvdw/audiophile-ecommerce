import React,{useEffect, useContext} from 'react';

import CategoryProducts from '../layout/categoryPage/CategoryProducts';
import CategoriesSection from '../layout/CategoriesSection';
import InformationSection from '../layout/InformationSection';

//Import context
import ProductsContext from '../../context/products/productsContext';


const CategoryPage = (props) => {

    //Init context and destructure needed logic
    const productsContext = useContext(ProductsContext)
    const {getProductsByCategory,setActiveCategory, activeCategoryProducts, activeCategory} = productsContext;

    useEffect(() => {
        //Set Active Category to url category + fetch products in this category
        setActiveCategory(props.match.params.category)
        getProductsByCategory(props.match.params.category)
    },[])

    
        return (
            <>
            <div id = 'category-page-header-container' style = {headerContainerStyle}>
                <h1 style = {headerStyle}>{props.match.params.category.toUpperCase()}</h1>
        
          </div>
        
            <div className = 'container'>
                        < CategoryProducts category = {props.match.params.category}/>
                        <CategoriesSection/>
                        <InformationSection />
        
            </div>
            </>
        )
    


}

const headerContainerStyle = {
    height:'239px',
    backgroundColor:'#191919',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    
}

const headerStyle = {
    color:'#FFFFFF',
    fontSize:'40px',
    letterSpacing:'1.5px'
}

export default CategoryPage