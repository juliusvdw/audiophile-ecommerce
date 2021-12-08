import React, {useContext} from 'react'

//Import context
import CheckoutContext from '../../../context/checkout/checkoutContext'
import { SET_CHECKOUT_FIELDS } from '../../../context/Types';

const CheckoutForm = () => {

    const checkoutContext = useContext(CheckoutContext);
    const {setFields,error,checkoutFields} = checkoutContext;

    const handleSetFields = (e) => {
        setFields(e.target.name,e.target.value)
        
    }

     
    return (
        <div className = '' id = 'checkout-container ' style = {checkoutContainerStyle}>
            <h1 style = {checkoutTitleStyle}>   CHECKOUT</h1>
            
            <h6 style = {sectionTitleStyle}>BILLING DETAILS</h6>

                <div className = 'row' style = {rowStyle}>
                   
                    <div className = 'col-lg-6 mt-3'>
                        <div className = 'd-flex flex-column'>
                            <h6 style = {inputLabelStyle} >Name</h6>
                            <input type = 'text' className = {`form-control form-item ${error && checkoutFields['name'] == '' ? 'invalid-input' : ''}`} style = {inputStyle} name = 'name' value = {checkoutFields.name} onChange = {(e) => handleSetFields(e)} />
                        </div>
                    </div>
                    <div className = 'col-lg-6 mt-3'>
                        <div className = 'd-flex flex-column'>
                        <h6 style = {inputLabelStyle}>Email Address</h6>
                            <input type = 'email' className = {`form-control form-item ${error && checkoutFields['email'] == '' ? 'invalid-input' : ''}`} style = {inputStyle} name = 'email' onChange = {(e) => handleSetFields(e)}/>
                        </div> 
                    </div>
                    <div className = 'col-lg-6 mt-3'>
                        <div className = 'd-flex flex-column'>
                        <h6 style = {inputLabelStyle}>Phone Number</h6>
                            <input type = 'text' className = {`form-control form-item ${error && checkoutFields['number'] == '' ? 'invalid-input' : ''}`} style = {inputStyle} name = 'number'onChange = {(e) => handleSetFields(e)}/>
                        </div>
                    </div>
                </div>

                <h6 style = {sectionTitleStyle}>SHIPPING INFO</h6>
                <div className = 'row' style = {rowStyle}>  
                        <div className = 'col-lg-12 mt-3'>
                                <div className = 'd-flex flex-column'>
                                    <h6 style = {inputLabelStyle}>Address</h6>
                                    <input type = 'text' className = {`form-control form-item ${error && checkoutFields['address'] == '' ? 'invalid-input' : ''}`} style = {inputStyle} name = 'address' onChange = {(e) => handleSetFields(e)}red/>
                                </div>
                            </div>

                            <div className = 'col-lg-6 mt-3'>
                                <div className = 'd-flex flex-column'>
                                    <h6 style = {inputLabelStyle}>Zip Code</h6>
                                    <input type = 'text' className = {`form-control form-item ${error && checkoutFields['zipCode'] == '' ? 'invalid-input' : ''}`} style = {inputStyle} name = 'zipCode' onChange = {(e) => handleSetFields(e)}/>
                                </div>
                            </div>
                            <div className = 'col-lg-6 mt-3'>
                                <div className = 'd-flex flex-column'>
                                <h6 style = {inputLabelStyle}>City</h6>
                                    <input type = 'text' className = {`form-control form-item ${error && checkoutFields['city'] == '' ? 'invalid-input' : ''}`} style = {inputStyle} name = 'city' onChange = {(e) => handleSetFields(e)}/>
                                </div> 
                            </div>
                            <div className = 'col-lg-6 mt-3'>
                                <div className = 'd-flex flex-column'>
                                <h6 style = {inputLabelStyle}>Country</h6>
                                    <input type = 'text' className = {`form-control form-item ${error && checkoutFields['country'] == '' ? 'invalid-input' : ''}`} style = {inputStyle} name = 'country' onChange = {(e) => handleSetFields(e)}/>
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
    borderRadius:'8px',
    transition:'0.3s'
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

const alertStyle = {
    width:'60%',
    fontSize:'14px',
    height:'40px',
    padding: '5px',
    alignItems:'center',
}
export default CheckoutForm
