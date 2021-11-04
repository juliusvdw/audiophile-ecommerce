import { createAnimationState } from 'framer-motion/types/render/utils/animation-state';
import React, {useReducer} from 'react';

import CartContext from "./cartContext";
import cartReducer from "./cartReducer";

const CartState = () => {
    const initialState = {
        products:null,
    }

    const [state,dispatch] = useReducer(cartReducer, initialState);

    //Logic

    return (
        <CartContext.Provider 
            value = {{
                products:state.products,
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;

