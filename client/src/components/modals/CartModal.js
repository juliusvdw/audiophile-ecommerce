import React from 'react'
import Modal from 'react-bootstrap/Modal';


const CartModal = (props) =>  {
    return (
        <div>
             <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation
    >
      
        <Modal.Header closeButton className=" ">
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>Send us a message</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      
    </Modal>
        </div>
    )
}

export default CartModal
