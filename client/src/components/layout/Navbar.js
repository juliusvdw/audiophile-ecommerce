import React from'react';

const Navbar = ({setCartShow}) => {
    return (

       
        <nav className ="navbar navbar-expand-lg  " style = {navStyle}>
            <div className = 'container p-0' style = {navContainerStyle}>
  <a className ="navbar-brand" href="#"><img src = '/assets/shared/desktop/logo.svg'></img></a>
  <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className ="navbar-toggler-icon"></span>
  </button>
  <div className ="collapse navbar-collapse" id="navbarNav">
    <ul className ="navbar-nav mx-auto" style = {navLinkStyle}>
      <li className ="nav-item text-white">
        <a className ="nav-link text-white link" href="#">HOME </a>
      </li>
      <li className ="nav-item">
        <a className ="nav-link text-white link" href="#">HEADPHONES</a>
      </li>
      <li className ="nav-item">
        <a className ="nav-link text-white link" href="#">SPEAKERS</a>
      </li>
      <li className ="nav-item">
        <a className ="nav-link text-white link" href="#">EARPHONES</a>
      </li>
    </ul>
  </div>
  <div className = 'ml-auto'> <i className=" bi-cart link"style = {{color:'white', fontSize:'24px'}} onClick = {() => setCartShow(true)}/>
</div>
  </div>
</nav>
    )
}

const navStyle = {
    backgroundColor :'#191919',
    height:'105px',
    zIndex:'999'
}

const navLinkStyle =  {
    letterSpacing:'2px',
    fontSize : '13px',
    fontWeight:'bold',
    justifyContent:'space-around',
    width:'460px',
    color:'#FFFFFF'

}

const navContainerStyle = {
    borderBottom :'1px solid rgba(151,151,151, .2)',
    height:'95px'
}

export default Navbar;