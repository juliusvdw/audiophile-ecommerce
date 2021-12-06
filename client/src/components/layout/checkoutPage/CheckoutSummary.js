import React, {useContext, useState} from 'react'

import SummaryItem from './SummaryItem'
import PaySuccessModal from './PaySuccessModal'

//Import context
import CartContext from '../../../context/cart/cartContext'

const CheckoutSummary = () => {

    //Modal show state
    const [modalShow,setModalShow] = useState(false);

    const cartContext = useContext(CartContext);
    const {products} = cartContext

    //Determine total of all products 
    let total = 0;
    products.forEach(product => {
        total += product.totalPrice
    })

    return (
        <div>
            <div clasName = 'jubmbotron' style = {cartContainerStyle} id = 'cart-summary-container' >

                <div className = 'd-flex  px-4'>
                <h3 style = {headingStyle}>Summary</h3> 
                </div> 

                {products.length > 0 && products.map(product => {
                    return (
                        <SummaryItem product = {product} />
                    )
                })}


                    <div className = 'mt-4 px-4' id = 'cart-checkout-container '>
                        <div className = 'd-flex mb-3' id = 'cart-checkout-price-container'>
                            <p style = {totalStyle}>TOTAL</p>
                            <p style = {totalPriceStyle} className = 'ml-auto'>$ {total}.00</p>
                        </div>

                        <dv className = 'btn btn-primary btn-light-custom d-flex mx-auto' id = 'checkout-btn' onClick = {() => setModalShow(true)}>CONTINUE & PAY</dv>
                    </div>
                </div>

                <PaySuccessModal show = {modalShow} onHide = {setModalShow} products = {products} />
        </div>
    )
}

const cartContainerStyle = {
   
    height:'488px',
    paddingTop:'25px',
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
