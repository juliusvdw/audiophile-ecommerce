
import React, {useReducer} from 'react';

import CartContext from "./cartContext";
import cartReducer from "./cartReducer";

import {
    ADD_TO_CART ,
    CHANGE_CART_AMOUNT
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
            console.log('adding to cart')
            dispatch({type:ADD_TO_CART, payload: product});
            return;   
    }

    //Change amount of items in cart
    const changeCartAmount = (productName, newAmount) => {
        
        dispatch ({type:CHANGE_CART_AMOUNT, payload:{productName, newAmount}});
        return;
    }

    return (
        <CartContext.Provider 
            value = {{
                products:state.products,
                addToCart,
                changeCartAmount,
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;

