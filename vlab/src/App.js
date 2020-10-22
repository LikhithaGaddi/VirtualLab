import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home} from './components/Home';
import {Page1} from './components/Page1';
import {Page2} from './components/Page2';
import {Navigation} from './components/Navigation';

import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">

        <h3 className="m-3 d-flex justify-content-center">
          Vlab Demo
        </h3>
        <h5 className="m-3 d-flex justify-content-center">
          Vlab Portal
        </h5>

        <Navigation/>

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/page1' component={Page1} exact />
          <Route path='/page2' component={Page2} exact />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;