import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Melbourne">Melbourne</Link>
        </li>
        <li>
          <Link to="/Sydney">Sydney</Link>
        </li>
        <li>
          <Link to="/Brisbane">Brisbane</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/Melbourne" component={Melbourne} />
      <Route path="/Sydney" component={Sydney} />
      <Route path="/Brisbane" component={Brisbane} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Melbourne = () => (
  <div>
    <h2>Melbourne</h2>

  </div>
);

const Sydney = () => (
  <div>
    <h2>Sydney</h2>
  </div>
)

const Brisbane = () => (
  <div>
    <h2>Brisbane</h2>
  </div>
)

export default App;