import React,{useReducer} from 'react';
import {db} from '../../config/firebase';


import CheckoutContext from "./checkoutContext";
import CheckoutReducer from "./checkoutReducer";
import { 
    SET_CHECKOUT_FIELDS,
    SET_ERROR,
    CLEAR_ERROR,
    CLEAR_FIELDS


} from '../Types';

const CheckoutState = (props) => {
    const initialState = {
        checkoutFields: {name:'', email:'', number:'', address:'', zipCode:'', city:'', country:''},
        error:false
    }

    const [state,dispatch] = useReducer(CheckoutReducer,initialState);

    //Logic
    const setFields = (inputName, value) => {
        let inputFields = state.checkoutFields;
        inputFields[`${inputName}`] = value;
        dispatch({type:SET_CHECKOUT_FIELDS, payload:inputFields})
    }

    const setError = () => {
        dispatch({type:SET_ERROR})

        setTimeout(() => {

          dispatch({type:CLEAR_ERROR})

        }, 50000)
        
    }

    //Clear input fields
    const clearFields = () => {

        let emptyFields = state.checkoutFields;
        

        for(let field in emptyFields) {
            emptyFields[field] = ''
        }

       dispatch({type:CLEAR_FIELDS, payload:emptyFields})
    }


    

    return (
        <CheckoutContext.Provider
          value={{
            checkoutFields:state.checkoutFields,
            error:state.error,
            setFields,
            setError,
            clearFields
          }}
        >
          {props.children}
        </CheckoutContext.Provider>
      );
}

export default CheckoutState;

