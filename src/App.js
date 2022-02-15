import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Config from './pages/Config';
import GamePage from './pages/GamePage';
import Login from './pages/Login';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/config" component={ Config } />
        <Route exact path="/game" component={ GamePage } />
      </Switch>
    </div>
  );
}
