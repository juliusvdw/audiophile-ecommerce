import React from 'react'

function FeaturedSection() {
    return (
        <>
        <div className = 'container' style = {containerStyle}>
            <div id = 'first-product' style = {firstProductStyle}>
                <div id = 'first-product-image-container'>
                    <img src = '/assets/home/desktop/image-speaker-zx9.png'  style  =  {firstImageStyle} />
                    <img src = '/assets/home/desktop/pattern-circles.svg'  style  =  {firstPatternStyle} />
                </div>


                <div id = 'first-product-text-container' style = {firstTextStyle}>
                    <h1 style = {firstHeadingStyle} className = 'mb-4'> ZX9 SPEAKER</h1>
                    <p style = {firstSubtextStyle}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <div className = 'btn btn-primary btn-lg btn-dark-custom d-flex' style = {firstBtnStyle}>SEE PRODUCT</div>
                </div>
                
            </div>

            <div id = 'second-product'>

            </div>

            <div id = 'third-product'>

            </div>
        </div>

        </>
    )
}

const containerStyle = {
    marginTop:'170px',
}

const firstProductStyle = {
    height:'560px',
    backgroundColor:'#d87d4a',
    borderRadius:'8px',
    position:'relative'
}

const firstTextStyle = {
    position:'absolute',
    right:'80px',
    color:'white',
    width:'339px',
    marginTop:'130px',
    zIndex:'999'
    }

 const firstHeadingStyle = {
        fontSize:'58px'
    }
 const firstSubtextStyle = {
        fontSize:'14px',
        fontWeight:'light',
        lineHeight:'25px',
        opacity:'0.7'
    }

    const firstBtnStyle = {
        marginTop:' 55px'
    }

    const firstImageStyle = {
        position:'absolute',
        height:'600px',
        height:'480px',
        bottom:'-10px',
        left:'130px',
        zIndex:'11'
    }

    const firstPatternStyle = {
        zIndex:'10',
        position:'absolute',
        left:'-145px',
        top:'-20px'
    }

export default FeaturedSection