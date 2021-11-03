import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

//Import context
import ProductsContext from '../../../context/products/productsContext';

const Recommended = ({productData}) => {

    
    const productsContext = useContext(ProductsContext)
    const {setSingleProduct} = productsContext;

    //Set media query for reposnisve size 
    const isTablet  = useMediaQuery({ minWidth: 481, maxWidth: 780 })
    const isDesktop  = useMediaQuery({ minWidth: 1024 })
    const isMobile  = useMediaQuery({ maxWidth: 480 })

    //Determine which image to load based on device size 
    // let device;
    

    // if(isDesktop) {
    //     device = desktop;
        
    // }else if(isTablet){
    //     device = tablet;
    // } else {
    //     device = mobile
    // }

    return (
        
        <div style = {containerStyle} className = 'recoomended-container'>
         <h1 className = 'text-center' style = {headingStyle} className = 'recommended-heading'>YOU MAY ALSO LIKE</h1>
         <div className = 'row'>
             <div className = 'col-lg-4 col-md-4 text-center recommended-product-container'  >
                 <div className = 'recommended-image-container' style = {imageContainerStyle}>
                     <img src = {`${productData.others[0].image.desktop}`} className = 'h-100 w-100' style = {imageStyle} />
                 </div>

                 <h1 style = {titleStyle} className = 'mt-4 mb-4'>{productData.others[0].name}</h1>

                 <Link to = {`${productData.others[0].slug}`}><button className = 'btn btn-primary btn-lg btn-light-custom' >SEE PRODUCT</button></Link>
             </div>
             <div className = 'col-lg-4 col-md-4 text-center recommended-product-container' >
             <div className = 'recommended-image-container' style = {imageContainerStyle}>
                     <img src = {`${productData.others[1].image.desktop}`} className = 'h-100 w-100' style = {imageStyle} />
                 </div>

                 <h1 style = {titleStyle} className = 'mt-4 mb-4'>{productData.others[1].name}</h1>

                 <Link to = {`${productData.others[1].slug}`} ><button className = 'btn btn-primary btn-lg btn-light-custom' >SEE PRODUCT</button></Link>
             </div>
             <div className = 'col-lg-4 col-md-4 text-center recommended-product-container' >
             <div className = 'recommended-image-container' style = {imageContainerStyle}>
                     <img src = {`${productData.others[2].image.desktop}`} className = 'h-100 w-100' style = {imageStyle} />
                 </div>

                 <h1 style = {titleStyle} className = 'mt-4 mb-4'>{productData.others[2].name}</h1>

                 <Link to = {`${productData.others[2].slug}`}><button className = 'btn btn-primary btn-lg btn-light-custom' >SEE PRODUCT</button></Link>
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