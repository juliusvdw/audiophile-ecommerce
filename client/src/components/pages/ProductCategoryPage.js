import React from 'react';

import CategoryProducts from '../layout/featuredPage/CategoryProducts';
import CategoriesSection from '../layout/CategoriesSection';
import InformationSection from '../layout/InformationSection';

const CategoryPage = () => {
return (
    <>
    <div style = {headerContainerStyle}>
        <h1 style = {headerStyle}>HEADPHONES</h1>

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