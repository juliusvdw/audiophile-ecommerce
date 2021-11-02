import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Product = ({productData}) => {

    //Set media query for reposnisve size 
    const isTablet  = useMediaQuery({ minWidth: 481, maxWidth: 780 })
    const isDesktop  = useMediaQuery({ minWidth: 1024 })
    const isMobile  = useMediaQuery({ maxWidth: 480 })

    //Determine which image to display for profuct based on screen size
    let productImage;

    if(isDesktop){
       productImage = '/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'
    } else if (isTablet){
       productImage = '/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg'
    }else {
       productImage = '/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
    }

    return (
        <div id = 'category-product-row' className = 'row' style = {rowStyle}>
                    <div className = 'col-lg-6 col-md-5'>
                        <img src = {`${productImage}`} className = 'img-fluid h-100' style = {imageStyle}/>
                    </div>
                    <div className = 'col-lg-6 col-md-7' style = {textContainerStyle}>
                        <div className = 'category-product-text-container product-container' style = {textStyle}>
                            <h6  className = 'mb-3' style = {newProductStyle} >NEW PRODUCT</h6>
                            <h1 className = 'mb-4 category-product-title product-title' style = {titleStyle}>{productData.name}</h1>
                            <p className = 'mb-4 category-product-subtext' style = {productSubtextStyle}>{productData.description}</p>

                            <p style = {priceStyle} className = 'product-price mb-3'><strong>$ {productData.price}</strong> </p>

                            <div className = 'product-add-to-cart-container d-flex mt-2'>
                                <input  className = 'mr-2' type = 'number'  style = {inputStyle}/>

                             <button className = 'btn btn-lg btn-light-custom d-flex text-white add-to-cart-btn'>ADD TO CART</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
    )
}

const rowStyle = {
    minHeight:'560px',
    marginTop:'160px',
    marginBottom:'160px'
}

const imageStyle = {
    borderRadius:'8px'
}

const textContainerStyle = {
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
}
const textStyle = {
    paddingLeft:'125px'
}

const newProductStyle = {
    letterSpacing:'10px',
    fontSize:'14px',
    color:'#D87D4A'
}
const titleStyle = {
    letterSpacing:'1.5px',
    fontSize:'40px',
    fontWeight:'bold'
}

const priceStyle = {

}

const inputStyle = {
    width:'120px',
    height:'48px'
}

const productSubtextStyle = {
    opacity:'0.5',
    fontSize:'15px'
}



export default Product