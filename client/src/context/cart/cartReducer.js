
import {
ADD_TO_CART,
CHANGE_CART_AMOUNT,
CLEAR_CART
} from '../Types'

export default (state, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                products:[...state.products, action.payload],
                
            }
        case CHANGE_CART_AMOUNT:
            return {
                ...state,
                products: action.payload
            }
        case CLEAR_CART:
            return {
                ...state,
                products: []
            }
        default :
        return state
    }
}