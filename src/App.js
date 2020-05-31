import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from './components/Login/Signin';
import Signup from './components/Login/Signup';
import Home from './components/Home/Home';
import Weather from './components/Weather/Weather';
import { connect } from 'react-redux';
import './App.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Signin} />
          <Route path='/signup' component={Signup} />
          {this.props.isSignedIn && (
            <Route path='/home' component={Home} />
          )}
          {this.props.isSignedIn && (
            <Route path='/weather' component={Weather} />
          )}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  null
)(App);


