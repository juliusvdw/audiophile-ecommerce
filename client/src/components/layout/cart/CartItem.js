import React from'react';


const CartItem = () => {
    return (
        <div className = 'd-flex cart-item-container mt-3 px-4' style = {ContainerStyle}>
            <div className = 'cart-item-information-container d-flex'>
                <img src = '/assets/cart/image-xx59-headphones.jpg' style = {imageStyle}/>
                <div className = 'cart-price-container ml-3' style = {priceContainerStyle }>
                    <h6 style = {titleStyle}>XX99 MK 11</h6>
                    <p style = {priceStyle}>$ 2,999</p>
                </div>
            </div>
            <div className = 'cart-item-amount-container ml-auto'>
                <input type = 'number'  style = {inputStyle}/>
            </div>
        </div>
    )
}

const ContainerStyle = {
    alignItems:'center'
}

const imageStyle = {
height:'64px',
width:'64px',
borderRadius:'8px'
}

const titleStyle = {
    fontSize:'15px',
    fontWeight:'bold'
}

const inputStyle = {
    width:'96px',
    
}

const priceContainerStyle = {
    marginTop:'10px'
}

const priceStyle = {
    fontSize:'14px',
    opacity:'0.5',
    fontWeight:'bold'
}

export default CartItem;