
import {
GET_ALL_PRODUCTS,
SET_ACTIVE_CATEGORY,
SET_ACTIVE_CATEGORY_PRODUCTS,
SET_SINGLE_PRODUCT,
SET_PRODUCT_LOADING
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
                activeCategory:`${action.payload}`,
                
            }
        case SET_ACTIVE_CATEGORY_PRODUCTS:
            return {
                ...state,
                activeCategoryProducts:action.payload,
                
            }
        case SET_SINGLE_PRODUCT:
            return {
                ...state,
                singleProduct:action.payload
                
            }
        case SET_PRODUCT_LOADING:
            return {
                ...state,
                loading:action.payload
                
            }

        default:
        return state
    }
}