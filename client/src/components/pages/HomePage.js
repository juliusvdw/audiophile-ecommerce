import React from 'react';

const HomePage = () => {
    return (
        <div id = 'hero-section' style = {heroStyle}>
              <div className = 'container' id = 'hero-section-container'>
                  <div id = 'hero-text-container'>
                      
                  </div>
              </div>
        </div>
    )
}

export default HomePage;

const heroStyle = {
    backgroundColor : '#191919',
    height:'720px'
}