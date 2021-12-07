import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'

import CartContext from '../../../context/cart/cartContext';

const PaySuccessModal = (props) =>  {

  const history = useHistory();

  //Use cart context 
  const cartContext = useContext(CartContext)
  const {clearCart} = cartContext

  //Determine total amount of cart
  let totalPrice = 0;
  props.products.forEach(product => {
    totalPrice += product.totalPrice

  })

  //Handle back to home button click
  const handleExit = () => {

    history.push('/');
    clearCart()
  }
    return (
        <div>
            <Modal
      {...props}
      dialogClassName="checkout-modal"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop = 'static'
      centered
    >
    
      <Modal.Body 
      dialogClassName="modal-body"
 >
        <i className = 'bi bi-check-circle-fill' style = {iconStyle}></i>
        <h1 style = {headingStyle}>THANK YOU FOR YOUR ORDER</h1>
        <p style = {subtextStyle}>You will recieve an email confirmation shortly</p>

        <div style = {productBoxStyle}>
          <div className = 'modal-product-left' style = {boxLeftStyle}> 
              <div className = 'cart-item-information-container d-flex'>
                <img src = {`${props.products[0].image.mobile}`} style = {boxImageStyle}/>
                <div className = 'cart-price-container ml-3' style = {boxPriceContainerStyle }>
                    <h6 style = {boxTitleStyle}>{props.products[0].name}</h6>
                    <div className = 'd-flex' style = {rowTwoStyle} > 
                      <p style = {boxPriceStyle}>$ {props.products[0].price}</p>
                      <p classname = 'ml-4' style = {boxPriceStyle}>x{props.products[0].amount}</p>
                    </div>
                    
                </div>
              
            </div>
            { props.products.length > 1 &&
            <>
              <hr className = 'mt-1'/>
              
              <p className = 'mx-auto text-center' style = {moreItemsStyle}> And {props.products.length -1 } other Items </p>

            </>
            }
          </div>
          <div className = 'modal-product-right text-white' style = {boxRightStyle}> 
            <h6 style = {totalHeadingStyle}>GRAND TOTAL</h6>
            <p style = {totalPriceStyle}> $ {totalPrice}</p>
          </div>
            
        </div>

        <div className = 'btn btn-primary btn-light-custom d-flex w-100 ' style = {btnStyle} onClick = {() => handleExit()}>BACK TO HOME</div>
      </Modal.Body>
      
    </Modal> 
        </div>
    )
}

const iconStyle = {
  fontSize:'64px',
  color:'#D87D4A'
}

const headingStyle = {
    maxWidth:'284px',
    fontSize:'32px',
    marginBottom:'35px'
}

const subtextStyle = {
  fontWeight:'medium',
  fontSize:'15px',
  opacity:'0.5',
  lineHeight:'25px',
  marginBottom:'35px'

}

const productBoxStyle = {
  width:'444px',
  minHeight:'140px',
  borderRadius:'8px',
  display:'flex'

}

const boxLeftStyle  = {
  flex:'1',
  padding:'15px',
  backgroundColor:'#f1f1f1',
  borderRadius:'8px 0px 0px 8px',
  alignItems:'center',
  justifyContent:'center',
  
}
const boxRightStyle  = {
  flex:'1',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  backgroundColor:'#000000',
  borderRadius:'0px 8px 8px 0px',
  paddingLeft:'30px'
}

const btnStyle = {
marginTop:'50px'

}

const boxImageStyle = {
  height:'64px',
  width:'64px',
  borderRadius:'8px'
  }
  
  const boxTitleStyle = {
      fontSize:'15px',
      fontWeight:'bold'
  }
  
  
  const boxPriceContainerStyle = {
      marginTop:'10px'
  }
  
  const boxPriceStyle = {
      fontSize:'14px',
      opacity:'0.5',
      fontWeight:'bold',
  }

  const rowTwoStyle = {
    width:'80%',
    justifyContent:'space-between'
  }

  const moreItemsStyle = {
    fontSize:'12px',
    opacity:'0.5',
    fontWeight:'bold'
  }

  const totalHeadingStyle = {
    fontSize:'15px',
    fontWeight:'bold',
    opacity:'0.5'
  }
  const totalPriceStyle = {
    fontWeight:'bold',
    fontSize:'18px'
  }
 


export default PaySuccessModal
