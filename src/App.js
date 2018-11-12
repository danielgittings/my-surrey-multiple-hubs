import React, { Component } from 'react';
import { Router } from "@reach/router";
import loadable from '@loadable/component';

const Library = loadable(() => import('./hubs/library/Library'));
const Wellbeing = loadable(() => import('./hubs/wellbeing/Wellbeing'));
const Home = loadable(() => import('./components/Home'));

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
