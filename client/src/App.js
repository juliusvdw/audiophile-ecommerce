
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import HomePage from './components/pages/HomePage'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'



function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
      
    </div>
  );
}

export default App;
