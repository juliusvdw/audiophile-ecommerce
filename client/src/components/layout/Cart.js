import React from 'react'

const Cart = ({ cartShow}) => {
    if(cartShow) {
        return (
            <div clasName = 'jubmbotron' style = {cartContainerStyle}>
                    <h1>Test</h1>
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
