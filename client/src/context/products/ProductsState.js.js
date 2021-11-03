import React,{useReducer} from 'react';
import {db} from '../../config/firebase';
import {collection, getDocs, where, query} from 'firebase/firestore'


import ProductsContext from "./productsContext";
import productsReducer from "./productsReducer";
import { 
    GET_ALL_PRODUCTS ,
    SET_ACTIVE_CATEGORY,
    SET_ACTIVE_CATEGORY_PRODUCTS,
    SET_SINGLE_PRODUCT,
    SET_PRODUCT_LOADING

} from '../Types';

const ProductsState = (props) => {
    const initialState = {
        products:null,
        activeCategory:null,
        activeCategoryProducts:null,
        singleProduct:null,
        loading:false,
    }

    const [state,dispatch] = useReducer(productsReducer,initialState)

    //DB collection refs
    const productsCollectionRef = collection(db,'product')
    


    //Logic

    //Get all products 
    const getAllProducts = async () => {

        setLoading(true);

        const data = await getDocs(productsCollectionRef);
        const products = data.docs.map((doc) => ({...doc.data(), id:doc.id}))

        dispatch({type: GET_ALL_PRODUCTS, payload:products})

        setLoading(false);
        
    }

    //Get products by category
    const getProductsByCategory = async (category) => {

        setLoading(true);

        const categoryCollection = query(collection(db, "product"), where("category", "==", `${category}`));
        const data = await getDocs(categoryCollection)
        const products = data.docs.map((doc) => ({...doc.data(), id:doc.id}));

        dispatch({type:SET_ACTIVE_CATEGORY_PRODUCTS, payload:products})

        setLoading(false);
    }

    //Get single product 
    const getSingleProduct = async (productId) => {

        setLoading(true);

        const singleProduct = query(collection(db, "product"), where("slug", "==", `${productId}`));
        const data = await getDocs(singleProduct);
        const product = data.docs.map((doc) => ({...doc.data(), id:doc.id}));

        dispatch({type:SET_SINGLE_PRODUCT, payload:product});

        setLoading(false);

    }

    //Set single product 
    const setSingleProduct = (productId) => {
        dispatch({type:SET_SINGLE_PRODUCT, payload:productId})
    }

    //Set active category
    const setActiveCategory =  (category) => {
        dispatch({type: SET_ACTIVE_CATEGORY , payload:category})
    }

    //Set product loadiung
    const setLoading = (bool) => {
        dispatch({type:SET_PRODUCT_LOADING,payload:bool})
    }

    return (
        <ProductsContext.Provider
          value={{
            products:state.products,
            activeCategoryProducts : state.activeCategoryProducts,
            activeCategory: state.activeCategory,
            singleProduct:state.singleProduct,
            loading: state.loading,
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

