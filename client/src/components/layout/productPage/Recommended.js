import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Recommended = () => {

    //Set media query for reposnisve size 
    const isTablet  = useMediaQuery({ minWidth: 481, maxWidth: 780 })
    const isDesktop  = useMediaQuery({ minWidth: 1024 })
    const isMobile  = useMediaQuery({ maxWidth: 480 })

    //Determine which image to load based on device size 
    let image1;
    let image2;
    let image3;

    if(isDesktop) {
        image1 = '/assets/shared/desktop/image-xx59-headphones.jpg'
        image2 = '/assets/shared/desktop/image-xx59-headphones.jpg'
        image3 = '/assets/shared/desktop/image-xx59-headphones.jpg'
    }else if(isTablet){
        image1 = '/assets/shared/tablet/image-xx59-headphones.jpg'
        image2 = '/assets/shared/tablet/image-xx59-headphones.jpg'
        image3 = '/assets/shared/tablet/image-xx59-headphones.jpg'
    } else {
        image1 = '/assets/shared/mobile/image-xx59-headphones.jpg'
        image2 = '/assets/shared/mobile/image-xx59-headphones.jpg'
        image3 = '/assets/shared/mobile/image-xx59-headphones.jpg'
    }

    return (
        
        <div style = {containerStyle} className = 'recoomended-container'>
         <h1 className = 'text-center' style = {headingStyle} className = 'recommended-heading'>YOU MAY ALSO LIKE</h1>
         <div className = 'row'>
             <div className = 'col-lg-4 col-md-4 text-center recommended-product-container'  >
                 <div className = 'recommended-image-container' style = {imageContainerStyle}>
                     <img src = {`${image1}`} className = 'h-100 w-100' style = {imageStyle} />
                 </div>

                 <h1 style = {titleStyle} className = 'mt-4 mb-4'>XX99 MARK II</h1>

                 <button className = 'btn btn-primary btn-lg btn-light-custom'>SEE PRODUCT</button>
             </div>
             <div className = 'col-lg-4 col-md-4 text-center recommended-product-container' >
             <div className = 'recommended-image-container' style = {imageContainerStyle}>
                     <img src = {`${image2}`} className = 'h-100 w-100' style = {imageStyle} />
                 </div>

                 <h1 style = {titleStyle} className = 'mt-4 mb-4'>XX99 MARK II</h1>

                 <button className = 'btn btn-primary btn-lg btn-light-custom'>SEE PRODUCT</button>
             </div>
             <div className = 'col-lg-4 col-md-4 text-center recommended-product-container' >
             <div className = 'recommended-image-container' style = {imageContainerStyle}>
                     <img src = {`${image3}`} className = 'h-100 w-100' style = {imageStyle} />
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