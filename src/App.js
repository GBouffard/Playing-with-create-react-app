import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './main-page';

ReactDOM.render(
  (
    <BrowserRouter>
      <Route path="/" component={MainPage}/>
    </BrowserRouter>
  ),
  document.getElementsByTagName('body')[0]
);
