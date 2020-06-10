import React from 'react';
import ReactDOM from 'react-dom';
import Principal from './principal/principal'
import Home from './home/home'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js';
ReactDOM.render(
  <Router>
    <div>
      <Switch>

        {/* Páginas */}
        <Route exact path='/' component={Principal} />
        <Route path='/home' component={Home} />

      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);