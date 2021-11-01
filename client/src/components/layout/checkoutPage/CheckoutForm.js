import React from 'react'

const CheckoutForm = () => {
    return (
        <div className = '' id = 'checkout-container ' style = {checkoutContainerStyle}>
            <h1 style = {checkoutTitleStyle}>   CHECKOUT</h1>

           

            
            <h6 style = {sectionTitleStyle}>BILLING DETAILS</h6>

                <div className = 'row' style = {rowStyle}>
                   
                    <div className = 'col-lg-6 mt-3'>
                        <div className = 'd-flex flex-column'>
                            <h6 style = {inputLabelStyle}>Name</h6>
                            <input type = 'text' className = 'form-control' style = {inputStyle}/>
                        </div>
                    </div>
                    <div className = 'col-lg-6 mt-3'>
                        <div className = 'd-flex flex-column'>
                        <h6 style = {inputLabelStyle}>Email Address</h6>
                            <input type = 'text' className = 'form-control' style = {inputStyle}/>
                        </div> 
                    </div>
                    <div className = 'col-lg-6 mt-3'>
                        <div className = 'd-flex flex-column'>
                        <h6 style = {inputLabelStyle}>Phone Number</h6>
                            <input type = 'text' className = 'form-control' style = {inputStyle}/>
                        </div>
                    </div>
                </div>

                <h6 style = {sectionTitleStyle}>SHIPPING INFO</h6>
                <div className = 'row' style = {rowStyle}>  
                        <div className = 'col-lg-12 mt-3'>
                                <div className = 'd-flex flex-column'>
                                    <h6 style = {inputLabelStyle}>Address</h6>
                                    <input type = 'text' className = 'form-control' style = {inputStyle}/>
                                </div>
                            </div>

                            <div className = 'col-lg-6 mt-3'>
                                <div className = 'd-flex flex-column'>
                                    <h6 style = {inputLabelStyle}>Zip Code</h6>
                                    <input type = 'text' className = 'form-control' style = {inputStyle}/>
                                </div>
                            </div>
                            <div className = 'col-lg-6 mt-3'>
                                <div className = 'd-flex flex-column'>
                                <h6 style = {inputLabelStyle}>City</h6>
                                    <input type = 'text' className = 'form-control' style = {inputStyle}/>
                                </div> 
                            </div>
                            <div className = 'col-lg-6 mt-3'>
                                <div className = 'd-flex flex-column'>
                                <h6 style = {inputLabelStyle}>Country</h6>
                                    <input type = 'text' className = 'form-control' style = {inputStyle}/>
                                </div>
                            </div>
                    </div>

                    <h6 style = {sectionTitleStyle}>PAYMENT DETAILS</h6> 

                    <div className = 'row mt-4' style = {rowStyle}>

                        <div className = 'col-lg-6'>
                            <h6 style = {inputLabelStyle}  >Payment Method</h6>
                        </div>
                        
                        <div className = 'col-lg-6  d-flex flex-column'>
                            <label style = {checkboxStyle} className = 'pl-3 '> <input type = 'checkbox' className = 'mr-3'  />e-Money </label>
                            <label style = {checkboxStyle} className = 'pl-3'> <input type = 'checkbox'  className = 'mr-3' /> Cash On Delivery</label>
                        </div>
                    </div>


                    <div className = 'row mt-4' style = {rowStyle}>

                        <div className = 'col-lg-6'>
                            <div className = 'd-flex flex-column'>
                               <h6 style = {inputLabelStyle}>e-Money Number</h6>
                               <input type = 'text' className = 'form-control' style = {inputStyle}/>
                             </div>
                        </div>
                        
                        <div className = 'col-lg-6  d-flex flex-column'>
                        <div className = 'd-flex flex-column'>
                               <h6 style = {inputLabelStyle}>e-Money Pin</h6>
                               <input type = 'text' className = 'form-control' style = {inputStyle}/>
                             </div>
                        </div>
                    </div>
           

        </div>
    )
}

const checkoutContainerStyle = {
    height:'1126px',
    backgroundColor:'#FFFFFF',
    borderRadius:'8px',
    padding:'40px'
}
const checkoutTitleStyle = {
   fontSize:'32px',
   letterSpacing:'1px',
   marginBottom:'40px'
}

const rowStyle = {
    marginBottom:'60px'
}

const sectionTitleStyle = {
    color:'#D87D4A',
    fontSize:'13px',
    fontWeight:'bold'
}

const inputLabelStyle = {
    fontSize:'12px',
    fontWeight:'bold'
}

const inputStyle = {
    height:'56px',
    borderRadius:'8px'
}
const checkboxStyle = {
   height:'54px',
   borderRadius:'8px',
   border:'1px solid #ced4da',
   display:'flex',
   alignItems:'center',
   fontWeight:'bold',
   fontSize:'14px'
}
export default CheckoutForm
