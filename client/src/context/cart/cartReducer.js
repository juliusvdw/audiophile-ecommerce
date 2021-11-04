
import {
ADD_TO_CART
} from '../Types'

export default (state, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                products:[...state.products, action.payload]
            }
        default :
        return state
    }
}