import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Memories from './components/Memories.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/memories" render={(props) => <Memories {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
