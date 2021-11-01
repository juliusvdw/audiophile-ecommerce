
import {
GET_ALL_PRODUCTS,
} from '../Types'

export default (state,action) => {
    switch(action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products:action.payload
            }

        default:
        return state
    }
}