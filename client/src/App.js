
import './App.css';
import React,{useState} from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import HomePage from './components/pages/HomePage'
import ProductCategoryPage from './components/pages/ProductCategoryPage'
import ProductPage from './components/pages/ProductPage'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CartModal from './components/modals/CartModal'



function App() {

  //Set state for cart modal
  const [cartModalShow, setCartModalShow] = useState(false);

  return (
    <div className="App">
      <Router>
      <Navbar setCartModalShow={setCartModalShow}/>

      <Switch>

      <Route exact path = {'/'} render  = {(props) => <HomePage {...props} />}/>
      <Route  path = {'/category/:category'} render  = {(props) => <ProductCategoryPage {...props} />}/>
      <Route  path = {'/product/:product'} render  = {(props) => <ProductPage {...props} />}/>

      </Switch>

      <Footer />
      <CartModal show={cartModalShow} onHide={() => setCartModalShow(false)}/>
      </Router>
      
    </div>
  );
}

export default App;
