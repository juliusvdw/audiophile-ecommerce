import React,{useReducer} from 'react';
import {db} from '../../config/firebase';


import CheckoutContext from "./checkoutContext";
import CheckoutReducer from "./checkoutReducer";
import { 
    SET_CHECKOUT_FIELDS,
    SET_ERROR,
    CLEAR_ERROR


} from '../Types';

const CheckoutState = (props) => {
    const initialState = {
        checkoutFields: {name:'', email:'', number:'', address:'', zipCode:'', city:'', country:''},
        error:false
    }

    const [state,dispatch] = useReducer(CheckoutReducer,initialState);

    //Logic
    const setFields = (inputFields) => {
        dispatch({type:SET_CHECKOUT_FIELDS, psayload:inputFields})
    }

    const setError = () => {
        dispatch({type:SET_ERROR})

        setTimeout(() => {
            dispatch({type:CLEAR_ERROR})
        },2000)
    }


    

    return (
        <CheckoutContext.Provider
          value={{
            checkoutFields:state.checkoutFields,
            error:state.error,
            setFields,
            setError
          }}
        >
          {props.children}
        </CheckoutContext.Provider>
      );
}

export default CheckoutState;

