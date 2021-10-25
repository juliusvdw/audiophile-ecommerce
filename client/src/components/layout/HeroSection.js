import React from 'react';
import { useMediaQuery } from 'react-responsive'



const HeroSection = ()=> {

    //Set media query for tablet size 
    const isTablet  = useMediaQuery({ minWidth: 481, maxWidth: 720 })
    const isDesktop  = useMediaQuery({ minWidth: 1024 })
    const isMobile  = useMediaQuery({ maxWidth: 480 })

    //Determine which hero image to be displayed based on device

    let heroImage; 
    if(isDesktop){
        heroImage = '/assets/home/desktop/image-hero.jpg'
    } else if (isTablet){
        heroImage = '/assets/home/tablet/image-header.jpg'
    } else {
        heroImage = '/assets/home/mobile/image-header.jpg'
    }

    return (
    <div id = 'hero-section' style = {heroStyle}>
        <div className = 'container' id = 'hero-section-container'>
            <div id = 'hero-text-container' style = {textContainerStyle}>
                <p style = {heroLightHeading} className = 'mb-3'>NEW PRODUCT</p>
                <h1 id = 'hero-heading' style = {heroProductHeading} className = 'mb-3'> XX99 MARK 11 HEADPHONES</h1>
                <p style = {heroSubtextStyle} id = 'hero-subtext'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <div className = 'btn btn-primary btn-lg btn-light-custom d-flex' id = 'hero-btn'>SEE PRODUCT </div>

            </div>

            <div id = 'hero-image-container' style= {heroImageContainerStyle}>
               <img src = {`${heroImage}`} style = {heroImageStyle} id ='hero-image'/>
            </div>
        </div>
  </div>
    )
}


const heroStyle = {
    background : '#191919',
    height:'720px',
    position:'relative',
    zIndex:'20'
}


const textContainerStyle = {
    width:'400px',
    paddingTop:'130px'
}

const heroLightHeading = {
    letterSpacing:'10px',
    color:'#FFFFFF',
    opacity:'0.4',
    fontSize:'14px'
}

const heroProductHeading = {
    fontWeight:'bold',
    color:'#FFFFFF',
    fontSize:'54px',
    letterSpacing :'2px'
}
const heroSubtextStyle = {
    fontWeight:'light',
    color:'#FFFFFF',
    opacity:'0.6',
    fontSize:'15px',
    lineHeight:'25px',
    width:'85%',
    marginBottom:'45px'
}

const heroImageContainerStyle = {
    position:'relative'
}

const heroImageStyle = {
    position:'absolute',
    width:'1300px',
    top:'-530px',
    zIndex:'-9',
    left:'-70px'
}

export default HeroSection