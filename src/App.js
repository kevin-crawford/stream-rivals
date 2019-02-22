import React, { Component } from 'react';
import {Route, withRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
