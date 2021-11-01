import React,{useEffect} from 'react';
import db from '../../config/firebase';
import { onSnapshot, collection } from 'firebase/firestore';

import CategoryProducts from '../layout/categoryPage/CategoryProducts';
import CategoriesSection from '../layout/CategoriesSection';
import InformationSection from '../layout/InformationSection';


const CategoryPage = (props) => {

    useEffect(() => {
        onSnapshot(collection(db, 'product'), (snapshot) => {
            console.log(snapshot.docs.map((doc) => doc.data()))
        })
    }, [])

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