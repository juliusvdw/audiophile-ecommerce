import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

//Import context
import CartContext from '../../../context/cart/cartContext'

const Cart = ({ cartShow, setCartShow}) => {

    const cartContext = useContext(CartContext);
    const {products} = cartContext;

    

    
    if(cartShow) {
         
            return (
                <div clasName = 'jubmbotron' style = {cartContainerStyle} id = 'cart-container' >

                    <div className = 'd-flex mt-4 px-4'>
                        { products.length > 0 && <h3 style = {headingStyle}>CART({products.length})</h3> } <span id = 'cart-close' className = 'ml-auto' onClick = {() => setCartShow(false)}>X</span>
                    </div> 
                        {products.length > 0 ?  products.map((item) =>  <CartItem />) : <h1> Nothing in cart </h1>   }
                        

                        { products.length > 0 && <div className = 'mt-4 px-4' id = 'cart-checkout-container '>
                                <div className = 'd-flex mb-3' id = 'cart-checkout-price-container'>
                                    <p style = {totalStyle}>TOTAL</p>
                                    <p style = {totalPriceStyle} className = 'ml-auto'>$ 5,396</p>
                                </div>

                                <Link to = {'/checkout'}><div className = 'btn btn-primary btn-light-custom d-flex mx-auto' id = 'checkout-btn' onClick = {() => setCartShow(false)}>CHECKOUT</div></Link>
                        </div> }
                </div>
                ) }
                 

    return ( <> 
    
    </>)
}

const cartContainerStyle = {
    position:'absolute',
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
