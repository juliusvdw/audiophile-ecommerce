import React,{useContext, useEffect,useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import CartItem from './CartItem'

//Import context
import CartContext from '../../../context/cart/cartContext'

const Cart = ({ cartShow, setCartShow}) => {

    
    const [checkoutLoading, setCheckoutLoading] = useState(false)

    const cartContext = useContext(CartContext);
    const {products} = cartContext;

    const history = useHistory();

    //Logic to determine total output
        let total = 0;
        products.forEach(product => {
            total += product.totalPrice
        })

        //Logic to handle checkout btn click
        const handleCheckoutClick = () => {
            
            setCheckoutLoading(true)

            setTimeout(() => {
                history.push('/checkout')
                setCheckoutLoading(false)
                setCartShow(false);
            },1000)
        }

    

    
    if(cartShow) {
         
            return (
                <div clasName = 'jubmbotron ' style = {cartContainerStyle} id = 'cart-container' >

                    <div className = 'd-flex mt-4 px-4'>
                        { products.length > 0 ? <h3 style = {headingStyle}>CART({products.length})</h3> : <h6 className = 'mb-4' style = {noItemsStyle}> No Items In Cart </h6> } <span className = 'ml-auto'><i className="bi bi-x " id = 'cart-close' onClick = {() => setCartShow(false)}></i></span>
                    </div> 
                        {products.length > 0 &&  products.map((item) =>  <CartItem data = {{name:item.name, amount:item.amount, price:item.price, image:item.image.mobile, slug:item.slug}}/>)    }
                        

                        { products.length > 0 && <div className = 'mt-4 px-4' id = 'cart-checkout-container '>
                                <div className = 'd-flex mb-3' id = 'cart-checkout-price-container'>
                                    <p style = {totalStyle}>TOTAL</p>
                                    <p style = {totalPriceStyle} className = 'ml-auto'>$ {total}.00</p>
                                </div>

                                <div className = 'btn btn-primary btn-light-custom d-flex mx-auto mb-4' id = 'checkout-btn' onClick = {() => handleCheckoutClick()}>{!checkoutLoading ? <span> CHECKOUT</span> : <div class="spinner-border spinner-border-sm text-light" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>}</div>
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
    transition:'0.3s',  
    border :'1px solid rgb(240,240,240)'  
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

const noItemsStyle = {
    opacity:'0.5'
}

export default Cart
