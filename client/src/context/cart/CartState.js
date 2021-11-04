
import React, {useReducer} from 'react';

import CartContext from "./cartContext";
import cartReducer from "./cartReducer";

import {
    ADD_TO_CART 
} from '../Types'

const CartState = (props) => {
    const initialState = {
        products:[],
        cartLoading: false,
    }

    const [state,dispatch] = useReducer(cartReducer, initialState);

    //Logic

    //Add product to cart
    const addToCart = (product) => {

        dispatch({type:ADD_TO_CART, payload: product})
    }

    return (
        <CartContext.Provider 
            value = {{
                products:state.products,
                addToCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;

