import React from 'react';
import { Link } from 'react-router-dom';

const CategoryProductLeft = ({productData}) => {

    console.log(productData)
    return (
            <> 
                <div id = 'category-product-row' className = 'row' style = {rowStyle}>
                    <div className = 'col-lg-6'>
                        <img src = {`${productData.image.desktop}`} className = 'img-fluid' style = {imageStyle}/>
                    </div>
                    <div className = 'col-lg-6' style = {textContainerStyle}>
                        <div className = 'category-product-text-container' style = {textStyle}>
                            { productData.isNew && <h6  className = 'mb-3' style = {newProductStyle} >NEW PRODUCT</h6>} 
                            <h1 className = 'mb-4 category-product-title' style = {titleStyle}>{productData.name}</h1>
                            <p className = 'mb-4 category-product-subtext' style = {subTextStyle}>{productData.description}</p>
                            <Link to = {`/product/${productData.slug}`}><div className = 'btn btn-lg btn-light-custom d-flex text-white category-product-btn'>SEE PRODUCT</div> </Link>
                        </div>
                    </div>
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

const subTextStyle = {

}

export default CategoryProductLeft;