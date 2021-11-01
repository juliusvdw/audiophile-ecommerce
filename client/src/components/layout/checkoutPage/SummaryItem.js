import React from 'react'

const SummaryItem = () => {
    return (
        <div className = 'd-flex cart-item-container mt-3 px-4' style = {containerStyle}>
        <div className = 'cart-item-information-container d-flex'>
            <img src = '/assets/cart/image-xx59-headphones.jpg' style = {imageStyle}/>
            <div className = 'cart-price-container ml-3' style = {priceContainerStyle }>
                <h6 style = {titleStyle}>XX99 MK 11</h6>
                <p style = {priceStyle}>$ 2,999</p>
            </div>
        </div>
        <div className = 'summary-item-amount-container ml-auto'>
            <p>x2</p>
        </div>
    </div>
    )
}

const containerStyle = {
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

export default SummaryItem
