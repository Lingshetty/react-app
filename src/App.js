
import './App.css';

import { useState } from 'react';
import Header from './components/header'
import Home from './components/home'
import Card from './components/Card';
import Cardcontainer from './components/Cardcontainer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/footer';

function App() {
  
  return (
    <div className="App">
      
      <Header/>
      <Home/>
    
     <ToastContainer position="top-right"/>
     <Footer/>
    </div> 
  );
}

export default App;
