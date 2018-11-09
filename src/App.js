import React, { Component } from 'react';
import { Router } from "@reach/router";
import Library from './hubs/library/Library';
import Wellbeing from './hubs/wellbeing/Wellbeing';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Home path="/" />
          <Library path="/library/*" />
          <Wellbeing path="/wellbeing/*" />
        </Router>
      </div>
    );
  }
}

export default App;
