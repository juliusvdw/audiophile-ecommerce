import React,{useEffect, useContext} from 'react';

import CategoryProducts from '../layout/categoryPage/CategoryProducts';
import CategoriesSection from '../layout/CategoriesSection';
import InformationSection from '../layout/InformationSection';

//Import context
import ProductsContext from '../../context/products/productsContext';


const CategoryPage = (props) => {

    //Init context and destructure needed logic
    const productsContext = useContext(ProductsContext)
    const {getProductsByCategory,setActiveCategory} = productsContext;

    useEffect(() => {
        getProductsByCategory(props.match.params.category)
    },[])

return (
    <>
    <div id = 'category-page-header-container' style = {headerContainerStyle}>
        <h1 style = {headerStyle}>{props.match.params.category.toUpperCase()}</h1>

    </div>

    <div className = 'container'>
                < CategoryProducts />
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