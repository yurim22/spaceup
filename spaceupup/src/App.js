import React from 'react';
import './App.css';

import {Route} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ReservationPage from './pages/ReservationPage';
import ConfirmPage from './pages/ConfirmPage';
import MainPage from './pages/MainPage';


function App() {
  return (
    <div className="App">
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={ReservationPage} path="/reservation" />
      <Route component={ConfirmPage} path="/confirm" />
      <Route component ={MainPage} exact path ="/" />
    </div>
  );
}

export default App;
