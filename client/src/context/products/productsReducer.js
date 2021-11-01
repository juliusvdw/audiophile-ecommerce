
import {
GET_ALL_PRODUCTS,
SET_ACTIVE_CATEGORY
} from '../Types'

export default (state,action) => {
    switch(action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products:action.payload
            }
        case SET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory:`${action.payload}`
            }

        default:
        return state
    }
}