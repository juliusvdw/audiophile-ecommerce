import React from 'react';

const HomePage = () => {
    return (
        <div id = 'hero-section' style = {heroStyle}>
              <div className = 'container' id = 'hero-section-container'>
                  <div id = 'hero-text-container' style = {textContainerStyle}>
                      <p style = {heroLightHeading} className = 'mb-3'>NEW PRODUCT</p>
                      <h1 style = {heroProductHeading} className = 'mb-3'> XX99 MARK 11 HEADPHONES</h1>
                      <p style = {heroSubtextStyle} >Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                      <div className = 'btn btn-primary btn-lg btn-light-custom d-flex'>SEE PRODUCT </div>

                  </div>

                  <div id = 'hero-image-container' style= {heroImageContainerStyle}>
                     <img src = '/assets/home/desktop/image-hero.jpg' style = {heroImageStyle}/>
                  </div>
              </div>
        </div>
    )
}

export default HomePage;

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
    top:'-540px',
    zIndex:'-9',
    left:'-100px'
}