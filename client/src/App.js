
import './App.css';
import React,{useState} from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import HomePage from './components/pages/HomePage'
import ProductCategoryPage from './components/pages/ProductCategoryPage'
import ProductPage from './components/pages/ProductPage'
import CheckoutPage from './components/pages/CheckoutPage'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Cart from './components/layout/cart/Cart'
import ScrollToTop from './components/function/ScrollToTop';



function App() {


  //set cartShow state
  const [cartShow, setCartShow] = useState(false)

  

  return (
    <div className="App" >
      <Router>
        <ScrollToTop>
      <Navbar cartShow = {cartShow} setCartShow = {setCartShow}/>

      <Switch>

      <Route exact path = {'/'} render  = {(props) => <HomePage {...props} />}/>
      <Route  path = {'/category/:category'} render  = {(props) => <ProductCategoryPage {...props} />}/>
      <Route  path = {'/product/:product'} render  = {(props) => <ProductPage {...props} />}/>
      <Route  path = {'/checkout'} render  = {(props) => <CheckoutPage {...props} />}/>

      </Switch>

      <Footer />
      <Cart  cartShow = {cartShow} setCartShow = {setCartShow}/>
      </ScrollToTop>
      </Router>
      
    </div>
  );
}

export default App;
