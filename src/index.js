import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import InputFields from './InputFields';
import Paragraphs from './Paragraphs';
import Radios from './Radios';
import DropdownMenus from './DropdownMenus';
import AudiosAndVideos from './AudiosAndVideos';
import Comment from './Comment';
import Overlays from './Overlays';
import SVGs from './SVGs';
import SVGsCardsAnimation from './SVGsCardsAnimation';
import '../public/index.css';

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>

        <Route
          exact
          path="/"
          component={App}/>

        <Route
          exact
          path="/paragraphs"
          component={Paragraphs}/>

        <Route
          exact
          path="/input-fields"
          component={InputFields}/>

        <Route
          exact
          path="/radios"
          component={Radios}/>

        <Route
          exact
          path="/dropdown-menus"
          component={DropdownMenus}/>

        <Route
          exact
          path="/audios-and-videos"
          component={AudiosAndVideos}/>

        <Route
          exact
          path="/comment"
          component={Comment}/>

        <Route
          exact
          path="/overlays"
          component={Overlays}/>

        <Route
          exact
          path="/svgs"
          component={SVGs}/>

        <Route
          exact
          path="/svg-cards-animation"
          component={SVGsCardsAnimation}/>

      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('root')
);
