import React, { createContext } from 'react';
import {useEffect} from 'react'
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
<<<<<<< HEAD
import Review from './components/content/Review';
=======
import LoginDataProvider from './context/LoginDataProvider';
import PrivateRoute from './pages/PrivateRoute';

>>>>>>> 034cb78ee34df1385f5dc4565df818d1c19ca7be

const App = () => {
    
    return (
        <LoginDataProvider>
            <Header/>
            <Navi/>
            <div id="the-theatre-container">
                <div className="curtain-left"></div>
                <div id="the-page-container">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/search-finnkino" element={<Shows/>}/>
<<<<<<< HEAD
                        <Route path="/search-tmdb" element={<Movies searchString={"The Mask"} language={"en"}/>}/>
                        <Route path="/community" element={<Community/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/review" element={<Review/>}/>
                        <Route path="/myaccount" element={<MyAccount/>}/>
=======
                        <Route element={<PrivateRoute />}>
                            <Route path="/myaccount" element={<MyAccount/>}/>
                            <Route path="/community" element={<Community/>}/>
                        </Route>
                        <Route path="/search-tmdb" element={<Movies searchString={"The Mask"} language={"fi"}/>}/>                        
                        <Route path="/login" element={<Login/>}/> 
>>>>>>> 034cb78ee34df1385f5dc4565df818d1c19ca7be
                        <Route path="*" element={<ScreenError/>}/>
                    </Routes>
                </div>
                <div className="curtain-right"></div>
            </div>
            <Footer/>
        </LoginDataProvider>
        
    );
}

export default App;