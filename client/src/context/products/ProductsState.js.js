import React,{useReducer} from 'react';

import ProductsContext from "./productsContext";
import productsReducer from "./productsReducer";

const ProductsState = (props) => {
    const initialState = {

    }

    const [state,dispatch] = useReducer(productsReducer,initialState)

    //Logic

    return (
        <ProductsContext.Provider
          value={{
            
          }}
        >
          {props.children}
        </ProductsContext.Provider>
      );
}

export default ProductsState;

