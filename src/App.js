import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './main-page';

const root = document.createElement('div');
root.id = 'guillaume-app';
document.body.appendChild(root);

ReactDOM.render(
  (
    <BrowserRouter>
      <Route path="/" component={MainPage}/>
    </BrowserRouter>
  ),
  document.getElementById('guillaume-app')
);
