import React from 'react';

import CheckoutForm from '../layout/checkoutPage/CheckoutForm';

const CheckoutPage = () => {
    return (

        <div style = {pageStyle}>
           <div className = 'container py-4 px-4' style = {containerStyle}>

               <div className = 'row' style = {rowStyle}>
                   <div className = 'col-lg-8'>
                       <CheckoutForm />
                   </div>
                   <div className = 'col-lg-8'>

                   </div>
               </div>

           </div> 
        </div>
    )
}

const pageStyle = {
    backgroundColor:'#f2f2f2'
}

const rowStyle = {
    marginTop:'100px'
}

const containerStyle = {
}

export default CheckoutPage