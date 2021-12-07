import React,{useReducer} from 'react';
import {db} from '../../config/firebase';
import {collection, getDocs, where, query} from 'firebase/firestore'


import CheckoutContext from "./checkoutContext";
import CheckoutReducer from "./checkoutReducer";
import { 
    SET_CHECKOUT_FIELDS

} from '../Types';

const CheckoutState = (props) => {
    const initialState = {
        checkoutFields: null,
    }

    const [state,dispatch] = useReducer(CheckoutReducer,initialState);

    //Logic
    const setFields = (inputFields) => {
        dispatch({type:SET_CHECKOUT_FIELDS, psayload:inputFields})
    }


    

    return (
        <CheckoutContext.Provider
          value={{
            checkoutFields:state.checkoutFields,
          }}
        >
          {props.children}
        </CheckoutContext.Provider>
      );
}

export default CheckoutState;

