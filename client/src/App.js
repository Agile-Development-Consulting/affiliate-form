import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import HtmlOne from './components/HtmlOne';
import HtmlTwo from './components/HtmlTwo';
import HtmlThree from './components/HtmlThree';

class App extends Component {
  render() {
    return (
      <div>
      <div>
      <Router>
        <div>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/:affiliateId/html-one" component={HtmlOne} />
        <Route exact path="/:affiliateId/html-two" component={HtmlTwo} />
        <Route exact path="/:affiliateId/html-three" component={HtmlThree} />
        </div>
      </Router>
      </div>
      </div>
    );
  }
}

export default App;
