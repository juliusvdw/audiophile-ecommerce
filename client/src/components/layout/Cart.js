import React from 'react'

const Cart = ({ cartShow, setCartShow}) => {

    
    if(cartShow) {
        return (
            <div clasName = 'jubmbotron' style = {cartContainerStyle} id = 'cart-container' >
                   <div className = 'd-flex'>
                   <h3>Cart(3)</h3> <span className = 'ml-auto' onClick = {() => setCartShow(false)}>X</span>
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

export default Cart
