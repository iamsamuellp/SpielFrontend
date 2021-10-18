import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import 'bootswatch/dist/sketchy/bootstrap.min.css';





const jsxElement = <h1>Spiel Website</h1>

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Router>,
  document.getElementById('root')
);
