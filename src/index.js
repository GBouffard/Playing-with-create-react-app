import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import CardFlipContainer from './CardFlipContainer';
import AudiosAndVideos from './AudiosAndVideos';
import '../public/index.css';

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/cards-container" component={CardFlipContainer}/>
        <Route exact path="/audios-and-videos" component={AudiosAndVideos}/>
      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('root')
);
