import React from 'react'

const ThreeImages = () => {
    return (
        <div className = 'row' style = {rowStyle}>

            <div className = 'col-lg-5 product-images-left-col' >
                <div className = 'row h-100'>
                    <div className = 'col-lg-12 product-images-left-top'>
                        <img className = 'w-100'style = {imageStyle} src = '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg' />
                    </div>
                    <div className = 'col-lg-12 product-images-left-bottom'>
                    <img className = 'w-100' style = {imageStyle} src = '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg' />

                    </div>
                </div>
            </div>

            <div className = 'col-lg-7 product-images-right-col'>
                <img style = {imageStyle} src = '/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg' className = 'h-100 w-100' />

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
