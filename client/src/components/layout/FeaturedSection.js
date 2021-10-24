import React from 'react'

function FeaturedSection() {
    return (
        <>
        <div className = 'container' style = {containerStyle}>
            <div id = 'first-product' style = {firstProductStyle}>
                <div id = 'first-product-image-container'>
                    <img id = 'featured-first-image' src = '/assets/home/desktop/image-speaker-zx9.png'  style  =  {firstImageStyle} />
                    <img id = 'featured-first-pattern' src = '/assets/home/desktop/pattern-circles.svg'  style  =  {firstPatternStyle} />
                </div>


                <div id = 'first-product-text-container' style = {firstTextStyle}>
                    <h1 style = {firstHeadingStyle} className = 'mb-4'> ZX9 SPEAKER</h1>
                    <p style = {firstSubtextStyle}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <div id = 'featured-first-btn' className = 'btn btn-primary btn-lg btn-dark-custom d-flex' style = {firstBtnStyle}>SEE PRODUCT</div>
                </div>
                
            </div>

            <div id = 'second-product' style = {secondProductStyle}>

                <div id = 'second-product-text-container' style = {secondTextStyle}>
                    <h1 style = {secondHeadingStyle}>ZX7 SPEAKER</h1>
                    <div className = 'btn btn-primary btn-dark-outline-custom d-flex' style = {secondBtnStyle}>SEE PRODUCT</div>

                </div>
                <div id = 'second-product-image-container' >
                    <img src = '/assets/home/desktop/image-speaker-zx7.jpg' style = {secondImageStyle}/>
                </div>

            </div>

            <div id = 'third-product' style = {thirdProductStyle}>
                <div className = 'row'>
                    <div className = 'col-lg-6' style = {thirdImageStyle}>
                        <img src = '/assets/home/desktop/image-earphones-yx1.jpg' style = {{borderRadius:'8px'}}/>
                    </div>
                    <div className = 'col-lg-6' style = {thirdTextStyle}>
                        <h1 style = {thirdHeadingStyle}>YX1 EARPHONES</h1>
                        <div className = 'btn btn-primary btn-lg btn-dark-outline-custom d-flex' style = {thirdBtnStyle}>SEE PRODUCT</div>

                    </div>
                </div>
            </div>
            
        </div>

        </>
    )
}

//First featured product styling

const containerStyle = {
    marginTop:'170px',
}

const firstProductStyle = {
    height:'560px',
    backgroundColor:'#d87d4a',
    borderRadius:'8px',
    position:'relative',
    overflow:'hidden'
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

    //Second featured product styling

    const secondProductStyle = {
        marginTop:'50px',
        height:'320px',
        backgroundColor:'#F1f1f1',
        borderRadius:'8px',
        position:'relative',
        overflow:'hidden'
        
    }

    const secondTextStyle = {
        paddingLeft:'100px',
        paddingTop:'100px',
        zIndex:'10',
        position:'absolute',
        zIndex:'999'
    }

    const secondImageStyle = {
        position:'absolute',
        top:'0',
    }
    const secondHeadingStyle = {
        fontSize:'28px',
        letterSpacing:'2px'

    }

    const secondBtnStyle = {
        marginTop:'32px',
        zIndex:'999'
    }

    //Third featured product styling

    const thirdProductStyle = {
        marginTop:'50px'
    }

    const thirdImageStyle = {
        height:'320px',
        borderRadius:'8px',
        overflow:'hidden'
    }
    const thirdTextStyle = {
        height:'320px',
        borderRadius:'8px',
        backgroundColor:'#f1f1f1',
        paddingTop:'100px',
        paddingLeft:'100px'
    }

    const thirdHeadingStyle = {
        
    }

    const thirdBtnStyle = {
        marginTop:'40px'
    }

export default FeaturedSection
