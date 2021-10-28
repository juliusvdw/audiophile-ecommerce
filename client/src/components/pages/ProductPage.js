import React from 'react';

import ThreeImages from '../layout/productPage/ThreeImages'

const ProductPage = () => {
    return (
        <>
        <div className = 'container'>
         <div id = 'category-product-row' className = 'row' style = {rowStyle}>
                    <div className = 'col-lg-6'>
                        <img src = '/assets/category-headphones/desktop/image-xx99-mark-two.jpg' className = 'img-fluid' style = {imageStyle}/>
                    </div>
                    <div className = 'col-lg-6' style = {textContainerStyle}>
                        <div className = 'category-product-text-container' style = {textStyle}>
                            <h6  className = 'mb-3' style = {newProductStyle} >NEW PRODUCT</h6>
                            <h1 className = 'mb-4 category-product-title' style = {titleStyle}>XX99 Mark II Headphones</h1>
                            <p className = 'mb-4 category-product-subtext' >The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>

                            <p style = {priceStyle} className = 'product-price mb-4'><strong>$ 2,999</strong> </p>

                            <div className = 'product-add-to-cart-container d-flex mt-2'>
                                <input  className = 'mr-3' type = 'number'  style = {inputStyle}/>

                             <button className = 'btn btn-lg btn-light-custom d-flex text-white category-product-btn'>ADD TO CART</button>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className = 'features-section'>
                    <div className = 'row'>

                    <div className = 'col-lg-7'>

                        <div className = 'featured-left'>
                            <h1 className = 'features-heading mb-4' style = {featuresHeading}>FEATURES</h1>
                            <p className = 'featured-subtext' style = {featuresText}>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
                           </p>
                            <p className = 'featured-subtext' style = {featuresText}>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
                           </p>
                        </div>
                    </div>

                    <div className = 'col-lg-5'>

                        <div className = 'featured-right' style = {featuredRightContainerStyle}>
                            <h1 className = 'mb-4' style = {featuresHeading}>IN THE BOX</h1>
                            <ul className = 'in-box-ul'>
                                <li className = 'in-box-li'><span style = {boxNumberStyle} className = 'mr-3 in-box-number'>1x </span> Headphone Unit</li>
                                <li className = 'in-box-li'><span style = {boxNumberStyle} className = 'mr-3 in-box-number'>2x </span> Replacement Earcups</li>
                                <li className = 'in-box-li'><span style = {boxNumberStyle} className = 'mr-3 in-box-number'>1x </span>User Manual </li>
                                <li className = 'in-box-li'><span style = {boxNumberStyle} className = 'mr-3 in-box-number'>1x </span> 3.5mm Audio Jack</li>
                                <li className = 'in-box-li'><span style = {boxNumberStyle} className = 'mr-3 in-box-number'>1x </span> Travel Bag</li>
                            </ul>
                        </div>
                    </div>

                    </div>

                </div>

                <ThreeImages />
                </div>
        </>
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

const featuresHeading = {
    fontSize:'32px'
}
const featuresText = {
    fontSize:'15px',
    lineHeight:'25px',
    opacity:'0.5'
}
const inputStyle = {
    width:'120px'
}

const featuredRightContainerStyle = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
}

const boxNumberStyle = {
    color:'#d87d4a',
    fontWeight:'bold',
    opacity:'1'
    
}


export default ProductPage;