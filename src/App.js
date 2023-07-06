import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Start from './components/Start/Start';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Product from './components/Product/Product';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <div>
    <Navbar/>
    <Start/>
    <About/>
    <Skills/>
    <Product/>
    <Contact/>
    <Footer/>
   </div>
  );
}

export default App;
