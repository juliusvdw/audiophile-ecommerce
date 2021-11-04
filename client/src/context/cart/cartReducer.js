
import {
ADD_TO_CART,
CHANGE_CART_AMOUNT
} from '../Types'

export default (state, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                products:[...state.products, action.payload]
            }
        case CHANGE_CART_AMOUNT:
            return {
                ...state,
                products:  state.products.filter((item) =>  {
                    return (
                    action.payload.productName === item.name ? item.amount  = action.payload.newAmount : item.amount  ) 
                } ) 
            }
        default :
        return state
    }
}