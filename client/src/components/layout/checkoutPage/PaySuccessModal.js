import React from 'react';
import {Modal, Button} from 'react-bootstrap'

const PaySuccessModal = (props) =>  {
    return (
        <div>
            <Modal
      {...props}
      dialogClassName="checkout-modal"
      aria-labelledby="contained-modal-title-vcenter"
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
          
          </div>
          <div className = 'modal-product-right' style = {boxRightStyle}> 
          
          </div>
            
        </div>

        <div className = 'btn btn-primary btn-light-custom d-flex w-100 ' style = {btnStyle}>BACK TO HOME</div>
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
  height:'140px',
  borderRadius:'8px',
  display:'flex'

}

const boxLeftStyle  = {
  flex:'1',
  backgroundColor:'#f1f1f1',
  borderRadius:'8px 0px 0px 8px'
}
const boxRightStyle  = {
  flex:'1',
  backgroundColor:'#000000',
  borderRadius:'0px 8px 8px 0px'
}

const btnStyle = {
marginTop:'50px'

}


export default PaySuccessModal
