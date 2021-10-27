import React from 'react';

const CategoryProductLeft = () => {
    return (
            <> 
                <div id = 'category-product-row' className = 'row' style = {rowStyle}>
                    <div className = 'col-lg-6'>
                        <img src = '/assets/category-headphones/desktop/image-xx99-mark-two.jpg' className = 'img-fluid' style = {imageStyle}/>
                    </div>
                    <div className = 'col-lg-6' style = {textContainerStyle}>
                        <div className = 'category-product-text-container' style = {textStyle}>
                            <h6  className = 'mb-3' style = {newProductStyle} >NEW PRODUCT</h6>
                            <h1 className = 'mb-4 category-product-title' style = {titleStyle}>XX99 Mark II Headphones</h1>
                            <p className = 'mb-4 category-product-subtext' style = {subTextStyle}>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                            <div className = 'btn btn-lg btn-light-custom d-flex text-white category-product-btn'>SEE PRODUCT</div>
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