
import {
    SET_CHECKOUT_FIELDS,
    SET_ERROR,
    CLEAR_ERROR
    } from '../Types'
    
    export default (state,action) => {
        switch(action.type) {
            case    SET_CHECKOUT_FIELDS:
                return {
                    ...state,
                    checkoutFields:action.payload
                }
            case    SET_ERROR:
                return {
                    ...state,
                    error:true
                }
            case    CLEAR_ERROR:
                return {
                    ...state,
                    error:false
                }
            
    
            default:
            return state
        }
    }