import React from 'react'

const FeaturesSection = ({productData}) => {
    return (
        <div className = 'features-section'>
                    <div className = 'row'>

                    <div className = 'col-lg-7'>

                        <div className = 'featured-left'>
                            <h1 className = 'features-heading mb-4' style = {featuresHeading}>FEATURES</h1>
                            <p className = 'featured-subtext' style = {featuresText}>
                                {productData.features}
                           </p>
                            
                        </div>
                    </div>

                    <div className = 'col-lg-5'>

                        <div className = 'featured-right' style = {featuredRightContainerStyle}>
                            <h1 className = 'mb-4 in-box-heading' style = {featuresHeading}>IN THE BOX</h1>
                            <ul className = 'in-box-ul'>
                                {productData.includes.map((item) => {
                                    return <li className = 'in-box-li'><span style = {boxNumberStyle} className = 'mr-3 in-box-number'>X{item.quantity}</span> {item.item}</li>
                                })}
                                
                                
                            </ul>
                        </div>
                    </div>

                    </div>

                </div>
    )
}

const featuresHeading = {
    fontSize:'32px'
}
const featuresText = {
    fontSize:'15px',
    lineHeight:'25px',
    opacity:'0.5'
}


const featuredRightContainerStyle = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
}

const boxNumberStyle = {
    color:'#d87d4a',
    fontWeight:'bold',
    opacity:'1'
    
}

export default FeaturesSection
