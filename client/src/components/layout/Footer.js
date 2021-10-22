import React from 'react';

const Footer = () => {
    return (
        <div id = 'footer-container ' style = {footerContainerStyle}>
            <div className = 'container d-flex flex-row'>

            
                 <div id = 'footer-text-section d-flex' style = {textSectionStyle} >
                     <div id = 'footer-logo'>
                         <img src = '/assets/shared/desktop/logo.svg' />
                     </div>
                     
                     <p id ='footer-text' style = {footerTextStyle}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>

                     <p style = {copywrightStyle}>Copyright 2021. All Rights Reserved</p>
                     
                 </div>

                 <div id = 'footer-links-section w-100 ' style = {linksSectionStyle} >
                     <div className = 'd-flex flex-row w-100 text-right' style = {linksContainerStyle}> 
                        <a style = {linkStyle} className = 'link'>HOME</a>
                        <a style = {linkStyle} className = 'link'>HEADPHONES</a>
                        <a style = {linkStyle} className = 'link'>SPEAKERS</a>
                        <a style = {linkStyle} className = 'link'>EARPHONES</a>
                        
                     </div>

                 </div>

            </div>
        </div>
    )
}

const footerContainerStyle = {
    height:'365px',
    width:'100%',
    backgroundColor:'#000000',
    paddingTop:'85px',
    paddingBottom:'40px'
    
}

const textSectionStyle = {
    maxWidth:'50%',
}

const footerTextStyle = {
    marginTop:'35px',
    color:'#FFFFFF',
    fontSize:'15px',
    opacity:'0.5'
}

const copywrightStyle = {
    marginTop:'80px',
    color:'#FFFFFF',
    fontSize:'15px',
    opacity:'0.5',
    fontWeight:'bold'
}

const linksSectionStyle = {
    width:'100%',
}

const linksContainerStyle = {
    justifyContent:'end'
}

const linkStyle =  {
    letterSpacing:'2px',
    fontSize : '13px',
    fontWeight:'bold',
    color:'#FFFFFF',
    marginLeft:'35px',
    justifyContent:'end'


}
export default Footer