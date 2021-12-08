import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
    Navigate,
  } from 'react-router-dom';

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';


import { HomeScreen } from './HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                
                <NavBar />

                <div className="container">
                    <Routes>
                        <Route exact path="/" component={ HomeScreen } />

                        <Route exact path="/about" component={ AboutScreen } />
                        <Route exact path="/login" component={ LoginScreen } />
                        
                        <Route  path="*" element={<Navigate replace to="/" />} /> 

                    </Routes>
                </div>
            </div>
        </Router>
    )
}
