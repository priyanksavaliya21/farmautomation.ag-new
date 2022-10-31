import {Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import React from 'react';
import Landing from './Pages/Landing';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from "./Compoment/Header";
import Footer  from "./Compoment/Footer";
import Solution from "./Pages/Owr_Slution";
import Faq from "./Pages/Faq";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <>
        <Header />
          <Routes>
              <Route path="/" element={<Landing/>} />
              <Route exact path="/solution" element={<Solution/>} />
              <Route exact path="/faq" element={<Faq/>} />
              <Route exact path="/aboutus" element={<AboutUs/>} />
          </Routes>
        <Footer />
    </>
  );
}

export default App;