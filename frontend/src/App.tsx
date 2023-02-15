import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Navbhar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import PlayList from './components/PlayList/PlayList';

function App() {


  return (
    <div className="relative-flex">
      
    <div className="flex-col" >
     
         <Router>
       
          <Routes>
          <Route  path="/" element={<Login/>}/>
          <Route  path="/home" element={<Home/>}/>
          <Route  path="/playlist" element={<PlayList/>}/>
          
          </Routes>

      </Router>
      </div>
    </div>
  );
}

export default App;
