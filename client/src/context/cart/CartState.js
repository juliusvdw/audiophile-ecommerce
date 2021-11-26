
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
        total: 0,
    }

    const [state,dispatch] = useReducer(cartReducer, initialState);

    //Logic

    //Add product to cart
    const addToCart = (product) => {
            console.log('adding to cart')
            //Logic to determine price of current product in basket check amount * price
            product.totalPrice = product.price * product.amount
            dispatch({type:ADD_TO_CART, payload: product});
            return;   
    }

    //Change amount of items in cart
    const changeCartAmount = (productName, newAmount) => {

        let updatedProducts = [...state.products]
        let updatedProduct;
                
        //Find index of object to update in state.products
        const index = updatedProducts.findIndex((item) => item.name == productName);
        updatedProduct = updatedProducts[index];
        updatedProduct.amount = newAmount;
        updatedProduct.totalPrice = updatedProduct.price * updatedProduct.amount
        

        updatedProducts[index] = updatedProduct;
        
        dispatch ({type:CHANGE_CART_AMOUNT, payload:updatedProducts});
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

