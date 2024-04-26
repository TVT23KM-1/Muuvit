import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from '@pages/Home';
import Shows from '@pages/Shows.jsx';
import Movies from '@pages/Movies.jsx';
import Community from '@pages/Community.jsx';
import Login from '@pages/Login.jsx';
import MyAccount from '@pages/MyAccount.jsx';
import ScreenError from '@content/ScreenError.jsx';
import Navi from '@components/header/Navi.jsx';
import Footer from '@components/Footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import LoginDataProvider from './context/LoginDataProvider.jsx';
import PrivateRoute from './pages/PrivateRoute.jsx';
import Review from '@content/Review.jsx';
import GroupPage from '@content/GroupPage.jsx';
import SharedLists from '@pages/SharedLists.jsx';

/**
 * App component is the main component of the application.
 * @returns {Element}
 */


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
                        <Route element={<PrivateRoute />}>                        
                            <Route path="/myaccount" element={<MyAccount/>}/>
                            <Route path="/review/:type/:id/:title" element={<Review/>}/>
                            <Route path="/groups/private/group/:groupId" element={<GroupPage/>}/>
                        </Route>
                        <Route path="/community" element={<Community/>}/>
                        <Route path="/search-tmdb" element={<Movies language={"fi"}/>}/>
                        <Route path="/login" element={<Login/>}/> 
                        <Route path="*" element={<ScreenError/>}/>
                        <Route path="/sharedLists/:userName/:shareSlur" element={<SharedLists/>}/>
                    </Routes>
                </div>
                <div className="curtain-right"></div>
            </div>
            <Footer/>
        </LoginDataProvider>
        
    );
}

export default App;
