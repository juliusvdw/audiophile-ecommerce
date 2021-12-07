
import {
    SET_CHECKOUT_FIELDS
    } from '../Types'
    
    export default (state,action) => {
        switch(action.type) {
            case    SET_CHECKOUT_FIELDS:
                return {
                    ...state,
                    checkoutFields:action.payload
                }
            
    
            default:
            return state
        }
    }