import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Home from "./landing_page/Home/home"
import Search from "./landing_page/Search"
import Navbar from "./landing_page/Navbar"
import Footer from "./landing_page/Footer"
import SecondNavbar from "./landing_page/SecondNavbar"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter >
    <Navbar />
    <SecondNavbar />
    <Search />
    <Footer />
  </HashRouter>
);

