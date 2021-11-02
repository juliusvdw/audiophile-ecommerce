import React,{useReducer} from 'react';
import {db} from '../../config/firebase';
import {collection, getDocs, where, query} from 'firebase/firestore'


import ProductsContext from "./productsContext";
import productsReducer from "./productsReducer";
import { 
    GET_ALL_PRODUCTS ,
    SET_ACTIVE_CATEGORY,
    SET_ACTIVE_CATEGORY_PRODUCTS,
    SET_SINGLE_PRODUCT

} from '../Types';

const ProductsState = (props) => {
    const initialState = {
        products:null,
        activeCategory:null,
        activeCategoryProducts:null,
        singleProduct:null,
    }

    const [state,dispatch] = useReducer(productsReducer,initialState)

    //DB collection refs
    const productsCollectionRef = collection(db,'product')
    


    //Logic

    //Get all products 
    const getAllProducts = async () => {
        const data = await getDocs(productsCollectionRef);
        const products = data.docs.map((doc) => ({...doc.data(), id:doc.id}))

        dispatch({type: GET_ALL_PRODUCTS, payload:products})
        
    }

    //Get products by category
    const getProductsByCategory = async (category) => {
        const categoryCollection = query(collection(db, "product"), where("category", "==", `${category}`));
        const data = await getDocs(categoryCollection)
        const products = data.docs.map((doc) => ({...doc.data(), id:doc.id}));

        dispatch({type:SET_ACTIVE_CATEGORY_PRODUCTS, payload:products})

        console.log(products)
    }

    //Get single product 
    const getSingleProduct = async (productId) => {
        const singleProduct = query(collection(db, "product"), where("slug", "==", `${productId}`));
        const data = await getDocs(singleProduct);
        const product = data.docs.map((doc) => ({...doc.data(), id:doc.id}));
        console.log(product)

        dispatch({type:SET_SINGLE_PRODUCT, payload:product})

    }

    //Set single product 
    const setSingleProduct = (productId) => {
        dispatch({type:SET_SINGLE_PRODUCT, payload:productId})
    }

    //Set active category
    const setActiveCategory =  (category) => {
        dispatch({type: SET_ACTIVE_CATEGORY , payload:category})
    }

    return (
        <ProductsContext.Provider
          value={{
            products:state.products,
            activeCategoryProducts : state.activeCategoryProducts,
            activeCategory: state.activeCategory,
            singleProduct:state.singleProduct,
            getAllProducts,
            getProductsByCategory,
            setActiveCategory,
            getSingleProduct
          }}
        >
          {props.children}
        </ProductsContext.Provider>
      );
}

export default ProductsState;

