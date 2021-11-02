import React from 'react';

const CategoryProductRight = (props) => {

    
    return (
            <> 
                <div id = 'category-product-row' className = 'row' style = {rowStyle}>
                    <div id = 'category-product-right-text'className = 'col-lg-6' style = {textContainerStyle}>
                    <div className = 'category-product-text-container' style = {textStyle}>
                            {props.productData.isNew && <h6 className = 'category-product-new mb-3' style = {newProductStyle} >NEW PRODUCT</h6>}
                            <h1 className = 'mb-4 category-product-title' style = {titleStyle}>{props.productData.name}</h1>
                            <p className = 'mb-4 category-product-subtext' style = {subTextStyle}>{props.productData.description}</p>
                            <div className = 'btn btn-lg btn-light-custom d-flex text-white category-product-btn'>SEE PRODUCT</div>
                        </div>
                    </div>
                    <div className = 'col-lg-6' >
                    <img id = 'category-product-right-image' src = {`${props.productData.image.desktop}`} className = 'img-fluid' style = {imageStyle}/>

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
    paddingRight:'125px'
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

export default CategoryProductRight;