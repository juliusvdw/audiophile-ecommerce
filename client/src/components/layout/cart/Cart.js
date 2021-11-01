import React from 'react'

import CartItem from './CartItem'

const Cart = ({ cartShow, setCartShow}) => {

    
    if(cartShow) {
        return (
            <div clasName = 'jubmbotron' style = {cartContainerStyle} id = 'cart-container' >

                   <div className = 'd-flex mt-4 px-4'>
                     <h3 style = {headingStyle}>CART(3)</h3> <span className = 'ml-auto' onClick = {() => setCartShow(false)}>X</span>
                   </div> 

                       <CartItem />
                       <CartItem />
                       <CartItem />

                       <div className = 'mt-4 px-4' id = 'cart-checkout-container '>
                            <div className = 'd-flex mb-3' id = 'cart-checkout-price-container'>
                                <p style = {totalStyle}>TOTAL</p>
                                <p style = {totalPriceStyle} className = 'ml-auto'>$ 5,396</p>
                            </div>

                            <dv className = 'btn btn-primary btn-light-custom d-flex mx-auto' id = 'checkout-btn'>CHECKOUT</dv>
                       </div>
            </div>
        )
    }

    return ( <> 
    
    </>)
}

const cartContainerStyle = {
    position:'absolute',
    height:'488px',
    top:'100px',
    right:'180px',
    zIndex:'999',
    backgroundColor:'white',
    width:'377px',
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

export default Cart
