import React from 'react'
import { useMediaQuery } from 'react-responsive'

const ThreeImages = ({productData}) => {

    //Set media query for reposnisve size 
    const isTablet  = useMediaQuery({ minWidth: 481, maxWidth: 780 })
    const isDesktop  = useMediaQuery({ minWidth: 1024 })
    const isMobile  = useMediaQuery({ maxWidth: 480 })

    //Determinew which images to display based on device size

    let image1;
    let image2;
    let image3;

    if(isDesktop) {
        image1 = '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
        image2 = '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
        image3 = '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
    }else if(isTablet){
        image1 = '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg'
        image2 = '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg'
        image3 = '/assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg'
    } else {
        image1 = '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'
        image2 = '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'
        image3 = '/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'
    }

    return (
        <div className = 'row three-images-row' style = {rowStyle} >

            <div className = 'col-lg-5 col-md-5 product-images-left-col' >
                <div className = 'row h-100'>
                    <div className = 'col-lg-12  product-images-left-top'>
                        <img className = ' img-fluid'style = {imageStyle} src = {`${productData.gallery.first.desktop}`} />
                    </div>
                    <div className = 'col-lg-12  product-images-left-bottom'>
                    <img className = 'img-fluid mt-4' style = {imageStyle} src = {`${productData.gallery.second.desktop}`} />

                    </div>
                </div>
            </div>

            <div className = 'col-lg-7 col-md-7 product-images-right-col'>
                <img style = {imageStyle} src = {`${productData.gallery.third.desktop}`} className = ' img-fluid three-images-3' />

            </div>
            
        </div>
    )
}

const rowStyle = {
    marginTop:'160px',
    height:'592px'
}

const imageStyle = {
    borderRadius:'8px'
}

export default ThreeImages
