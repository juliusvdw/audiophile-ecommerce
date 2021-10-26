
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import HomePage from './components/pages/HomePage'
import ProductCategoryPage from './components/pages/ProductCategoryPage'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      <Switch>

      <Route exact path = {'/'} render  = {(props) => <HomePage {...props} />}/>
      <Route exact path = {'/category'} render  = {(props) => <ProductCategoryPage {...props} />}/>

      </Switch>

      <Footer />
      </Router>
      
    </div>
  );
}

export default App;
