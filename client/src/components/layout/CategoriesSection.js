import React from "react";

const CategoriesSection = () => {
    return (
        <div className = 'container' style = {containerStyle}>
            <div className = 'row'>
                <div className = 'col-lg-4 home-category-box' >
                    <div className = 'home-category-box' style = {categoryBoxStyle}>
                        <div className = 'home-category-image-container w-100'>
                            <img src = '/assets/shared/desktop/image-headphones.png' style = {categoryImageStyle}/>
                        </div>

                        <div className = 'home-category-text-container text-center'style = {categoryTextStyle}>
                            <h5 style = {categoryHeaderStyle}>HEADPHONES</h5>
                            <a href = '#' className = 'category-link' style = {categoryLinkStyle}>SHOP <span style = {{color:'#d87d4a'}}>  {'>'}</span> </a>
                        </div>

                    </div>
                </div>
                <div className = 'col-lg-4 home-category-box' >
                    <div className = 'home-category-box' style = {categoryBoxStyle}>

                    </div>
                </div>
                <div className = 'col-lg-4 home-category-box' >
                    <div className = 'home-category-box' style = {categoryBoxStyle}>

                    </div>
                </div>
            </div>
        </div>
    )
}

const containerStyle = {
    marginTop:'230px'
}
const categoryBoxStyle = {
    height:'200px',
    backgroundColor :'#f1f1f1',
    position:'relative'
}
const categoryImageStyle = {
    width:'250px',
    transform:'translate(-50%,-50%)',
    left:'50%',
    position:'absolute',
    top:'30px'
}

const categoryTextStyle = {
    paddingTop:'125px'
}
const categoryHeaderStyle = {
   letterSpacing: '1.5px',
   fontSize:'18px'
}
const categoryLinkStyle = {
   letterSpacing: '1px',
   fontSize:'13px',
   fontWeight:'bold',
   color:'#000000',
   opacity:'0.5'
}


export default CategoriesSection