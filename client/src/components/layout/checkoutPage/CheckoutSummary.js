import React from 'react'

import SummaryItem from './SummaryItem'

const CheckoutSummary = () => {
    return (
        <div>
            <div clasName = 'jubmbotron' style = {cartContainerStyle} id = 'cart-summary-container' >

                <div className = 'd-flex  px-4'>
                <h3 style = {headingStyle}>Summary</h3> 
                </div> 

                <SummaryItem />
                <SummaryItem />
                <SummaryItem />


                    <div className = 'mt-4 px-4' id = 'cart-checkout-container '>
                        <div className = 'd-flex mb-3' id = 'cart-checkout-price-container'>
                            <p style = {totalStyle}>TOTAL</p>
                            <p style = {totalPriceStyle} className = 'ml-auto'>$ 5,396</p>
                        </div>

                        <dv className = 'btn btn-primary btn-light-custom d-flex mx-auto' id = 'checkout-btn'>CONTINUE & PAY</dv>
                    </div>
                </div>
        </div>
    )
}

const cartContainerStyle = {
   
    height:'488px',
    right:'180px',
    zIndex:'999',
    backgroundColor:'white',
    borderRadius:'8px',
    
}

const headingStyle = {
    fontWeight:'bold',
    fontSize:'18px',
    letterSpacing:'1.3px'
}
const totalStyle = {
    fontSize:'15px',
    opacity:'0.5'
}
const totalPriceStyle = {
    fontSize:'18px',
    fontWeight:'bold'
}

export default CheckoutSummary
