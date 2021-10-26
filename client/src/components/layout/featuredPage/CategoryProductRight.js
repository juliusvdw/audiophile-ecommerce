import React from 'react';

const CategoryProductRight = () => {
    return (
            <> 
                <div className = 'row' style = {rowStyle}>
                    <div className = 'col-lg-6' style = {textContainerStyle}>
                    <div className = 'category-product-text-container' style = {textStyle}>
                            <h6 style = {newProductStyle} >NEW PRODUCT</h6>
                            <h1 className = 'mb-4' style = {titleStyle}>XX99 Mark II Headphones</h1>
                            <p className = 'mb-4' style = {subTextStyle}>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                            <div className = 'btn btn-lg btn-light-custom d-flex text-white'>SEE PRODUCT</div>
                        </div>
                    </div>
                    <div className = 'col-lg-6' >
                    <img src = '/assets/category-headphones/desktop/image-xx99-mark-one.jpg' className = 'img-fluid' style = {imageStyle}/>

                    </div>
                </div>
            </>
            
    )
}

const rowStyle = {
    height:'560px',
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