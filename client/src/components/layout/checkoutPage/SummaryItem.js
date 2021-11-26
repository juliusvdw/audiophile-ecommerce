import React,{useContext} from 'react'



const SummaryItem = ({product}) => {

   
    return (
        <div className = 'd-flex cart-item-container mt-3 px-4' style = {containerStyle}>
        <div className = 'cart-item-information-container d-flex'>
            <img src = {`${product.image.mobile}`} style = {imageStyle}/>
            <div className = 'cart-price-container ml-3' style = {priceContainerStyle }>
                <h6 style = {titleStyle}>{product.name}</h6>
                <p style = {priceStyle}>{product.price}</p>
            </div>
        </div>
        <div className = 'summary-item-amount-container ml-auto'>
            <p>x{product.amount}</p>
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
