import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import CardFlipContainer from './CardFlipContainer';
import '../public/index.css';

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/cards-container" component={CardFlipContainer}/>
      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('root')
);
