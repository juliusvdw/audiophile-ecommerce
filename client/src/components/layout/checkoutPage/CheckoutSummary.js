import React, {useContext, useState} from 'react'

import SummaryItem from './SummaryItem'
import PaySuccessModal from './PaySuccessModal'

//Import context
import CartContext from '../../../context/cart/cartContext'

const CheckoutSummary = () => {

    //Set States
    const [modalShow,setModalShow] = useState(false);
    const [payLoading,setPayloading] = useState(false);
    const [paid,setPaid] = useState(false)

    const cartContext = useContext(CartContext);
    const {products, clearCart} = cartContext

    //Determine total of all products 
    let total = 0;
    products.forEach(product => {
        total += product.totalPrice
    })

    //Handle modal show on click of continue and pay
    const handleModalShow = (bool) => {

        setPayloading(true)
        
        
        //Set timeout to improve user experience from click till the modal shows (set loading animation)
        setTimeout(() => {
            setModalShow(bool);
            setPayloading(false);
            setPaid(true)
            
        },1000)

    }


    //Determine what to return based on products in cart 
    if(products.length > 0 ) {
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
    
                            <div className = 'btn btn-primary btn-light-custom d-flex mx-auto' id = 'checkout-btn' onClick = {() => handleModalShow(true)}>{!payLoading ? <span> PAY & CONTINUE</span> :
                            <div class="spinner-border spinner-border-sm text-light" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>}</div>
                        </div>
                    </div>
    
                    <PaySuccessModal show = {modalShow} onHide = {setModalShow} products = {products} />
            </div> 
              
        
        
        )

    } else {
        return <h1>Testing</h1>
    }

    
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
