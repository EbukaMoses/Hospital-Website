import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Header from './Component/Common/Header/Header';
import Footer from './Component/Common/Footer/Footer';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Doctors from './Component/Doctors/Doctors';
import Services from "./Component/Services/Services";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/services" Component={Services} />
          <Route path="/doctors" Component={Doctors} />
          {/* <Route path="/pricing" Component={Pricing} /> */}
          {/* <Route path="/contact" Component={Contact} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App
