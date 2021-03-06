import React, {useContext} from'react';
import {Link} from 'react-router-dom'

//Import context
import CartContext from '../../context/cart/cartContext';

const Navbar = ({setCartShow}) => {

  const cartContext = useContext(CartContext)
  const {products} = cartContext;
    return (

       
        <nav className ="navbar navbar-expand-lg  " style = {navStyle}>
            <div className = 'container p-0' style = {navContainerStyle}>
            <Link to = {'/'} className ="navbar-brand" ><img src = '/assets/shared/desktop/logo.svg'></img></Link>
            <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className ="navbar-toggler-icon"></span>
            </button>
            <div className ="collapse navbar-collapse" id="navbarNav">
                <ul className ="navbar-nav mx-auto" style = {navLinkStyle}>
                  <li className ="nav-item text-white">
                    <Link to = {'/'} className ="nav-link text-white link" href="#">HOME </Link>
                  </li>
                  <li className ="nav-item">
                    <Link to = {'/category/headphones'} className ="nav-link text-white link" href="#">HEADPHONES</Link>
                  </li>
                  <li className ="nav-item">
                    <Link to = {'/category/speakers'}className ="nav-link text-white link" href="#">SPEAKERS</Link>
                  </li>
                  <li className ="nav-item">
                    <Link to = {'/category/earphones'} className ="nav-link text-white link" href="#">EARPHONES</Link>
                  </li>
                </ul>
            </div>
            <div className = 'ml-auto d-flex flex-column' style = {cartContainerStyle}> 
            {products.length > 0 && <i className="bi bi-circle-fill" style = {cartCircleStyle}></i>
}
            <i className=" bi-cart link"style = {{color:'white', fontSize:'24px'}} onClick = {() => setCartShow(true)} />
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

const cartContainerStyle = {
  position:'relative'
}

const cartCircleStyle = {
  position:'absolute',
  right:'0',
  top:'-7px',
  fontSize:'10px',
  color:'#d87d4a'
}

export default Navbar;