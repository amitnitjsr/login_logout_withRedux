import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from './components/Login/Signin';
import Signup from './components/Login/Signup';
// import Home from './components/Home/Home';
import Weather from './components/Weather/Weather';

import './App.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Weather />
          {/* <Route exact path='/' component={Signin} />
          <Route path='/signup' component={Signup} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
