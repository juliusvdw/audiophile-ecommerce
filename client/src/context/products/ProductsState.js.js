import React,{useReducer} from 'react';
import {db} from '../../config/firebase';
import {collection, getDocs, where, query} from 'firebase/firestore'


import ProductsContext from "./productsContext";
import productsReducer from "./productsReducer";
import { GET_ALL_PRODUCTS } from '../Types';

const ProductsState = (props) => {
    const initialState = {
        products:null,

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
        console.log(category)
        const categoryCollection = query(collection(db, "product"), where("category", "==", `${category}`));
        const data = await getDocs(categoryCollection)
        const products = data.docs.map((doc) => ({...doc.data(), id:doc.id}));

        console.log(products)

    }

    return (
        <ProductsContext.Provider
          value={{
            products:state.products,
            getAllProducts,
            getProductsByCategory,
          }}
        >
          {props.children}
        </ProductsContext.Provider>
      );
}

export default ProductsState;

