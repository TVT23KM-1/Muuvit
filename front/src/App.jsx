import React from 'react';
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from '@pages/Home';
import Shows from '@components/content/Shows';
import Movies from '@pages/Movies.jsx';
import Community from '@pages/Community';
import Login from '@pages/Login';
import MyAccount from '@pages/MyAccount';
import ScreenError from '@content/ScreenError';
import Navi from '@components/header/Navi';
import Footer from '@components/footer/Footer';
import Header from './components/header/Header';

const App = () => {

    return (
        <>
            <Header/>
            <Navi/>
            <div id="the-theatre-container">
                <div className="curtain-left"></div>
                <div id="the-page-container">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/search-finnkino" element={<Shows/>}/>
                        <Route path="/search-tmdb" element={<Movies searchString={"The Mask"} language={"en"}/>}/>
                        <Route path="/community" element={<Community/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/myaccount" element={<MyAccount/>}/>
                        <Route path="*" element={<ScreenError/>}/>
                    </Routes>
                </div>
                <div className="curtain-right"></div>
            </div>
            <Footer/>
        </>
        
    );
}

export default App;