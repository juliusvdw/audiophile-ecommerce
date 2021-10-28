import React from 'react';

const Recommended = () => {
    return (
        
        <div style = {containerStyle}>
         <h1 className = 'text-center' style = {headingStyle}>YOU MAY ALSO LIKE</h1>
         <div className = 'row'>
             <div className = 'col-lg-4 text-center'>
                 <div className = 'recommended-image-container' style = {imageContainerStyle}>
                     <img src = '/assets/shared/desktop/image-xx59-headphones.jpg' className = 'h-100 w-100' style = {imageStyle} />
                 </div>

                 <h1 style = {titleStyle} className = 'mt-4 mb-4'>XX99 MARK II</h1>

                 <button className = 'btn btn-primary btn-lg btn-light-custom'>SEE PRODUCT</button>
             </div>
             <div className = 'col-lg-4 text-center'>
             <div className = 'recommended-image-container' style = {imageContainerStyle}>
                     <img src = '/assets/shared/desktop/image-xx59-headphones.jpg' className = 'h-100 w-100' style = {imageStyle} />
                 </div>

                 <h1 style = {titleStyle} className = 'mt-4 mb-4'>XX99 MARK II</h1>

                 <button className = 'btn btn-primary btn-lg btn-light-custom'>SEE PRODUCT</button>
             </div>
             <div className = 'col-lg-4 text-center'>
             <div className = 'recommended-image-container' style = {imageContainerStyle}>
                     <img src = '/assets/shared/desktop/image-xx59-headphones.jpg' className = 'h-100 w-100' style = {imageStyle} />
                 </div>

                 <h1 style = {titleStyle} className = 'mt-4 mb-4'>XX99 MARK II</h1>

                 <button className = 'btn btn-primary btn-lg btn-light-custom'>SEE PRODUCT</button>
             </div>
         </div>
        </div>
    )
}

const headingStyle = {
    marginBottom:'55px'
}
const containerStyle = {
    marginTop:'160px'
}
const imageContainerStyle = {
    height:'320px'
}
const imageStyle = {
    borderRadius:'8px'
}
const titleStyle = {
    fontSize:'24px',
    fontWeight:'bold',
    letterSpacing:'1.7px'
}

export default Recommended