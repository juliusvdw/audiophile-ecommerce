import React from 'react';

const InformationSection = () => {
return (
     <div className = 'container' style = {containerStyle}>
         <div className = 'row h-100 '>
             <div className = 'col-lg-6'>
                 <div className = 'd-flex flex-column h-100 ' style = {informationTextStyle} >
                    <h1 className = 'mb-4' style = {informationHeadingStyle}>BRINGING YOU THE <span style = {{color:'#d87d4a'}}>BEST</span> AUDIO GEAR</h1>
                    <p style = {informationSubtextextStyle}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                 </div>
                 
             </div>
             <div className = 'col-lg-6'>
                 <div >
                     <img className = 'img-fluid w-100' src = '/assets/shared/desktop/image-best-gear.jpg' style = {{borderRadius:'8px'}}/>
                 </div>

             </div>
         </div>
                    
     </div>
)

}

const containerStyle = {
    marginTop:'190px',
    height:'566px',
    marginBottom:'195px'
}

const informationTextStyle = {
    justifyContent:'center',
    width:'445px'
}

const informationHeadingStyle = {
    fontSize:'40px',
    letterSpacing :'1.5px'
}

const informationSubtextextStyle = {
    fontSize:'15px',
    fontWeight:'light',
    opacity:'0.5'
}

export default InformationSection