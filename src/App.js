import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/logo.svg';
import '../public/AllcssFiles.css';
import Button from './Button';
import SnapShotLink from './snapshot_link';
import classNames from 'classnames';
import _ from 'lodash';

export default class MainPage extends Component {
  constructor(props) { 
    super(props);
    this.onClick = _.bind(this.onClick, this);
    this.onChangeLanguageClick = _.bind(this.onChangeLanguageClick, this);
    this.state = {
      isHidden: false,
      greeting: "Hello",
      buttonText: "Frenchify"
    }
  }

  render() {
    const buttonClassName = classNames('hideButton', { 'hiddenState': this.state.isHidden });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Guillaume s React App Sandbox</h2>
        </div>

        <div>
          <Button
            text="HIDE ME"
            id="hideMe"
            className={buttonClassName}
            onClick={this.onClick} />
        </div>

        <div>
          <SnapShotLink
            className="link-with-animation"
            page={'http://www.thulium69.com/'}>
            Thulium (my band)
          </SnapShotLink>
        </div>

        <div>
          <div className="languageContainer">
            {this.state.greeting}
          </div>
          <Button
            text={this.state.buttonText}
            className="changeLanguageButton"
            onClick={this.onChangeLanguageClick} />
        </div>

        <div
          className="App-grid">
          <div>
            <Link
              className="App-grid__link"
              to='/paragraphs'>
              Paragraphs
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/input-fields'>
              Input fields
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/lists'>
              Lists
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/radios'>
              Radios
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/dropdown-menus'>
              Dropdown Menus
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/audios-and-videos'>
              Audio & Videos
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/comment'>
              Comments
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/pop-up-boxes'>
              Pop-up boxes
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/iframes'>
              Iframes
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/svgs'>
              SVGs
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/svg-cards-animation'>
              SVGs cards animation
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/toggle-switch'>
              Toggle switch
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/css-positioning'>
              CSS Positioning
            </Link>
          </div>

          <div
            className="bigger-grid-item">
            <Link
              className="App-grid__link"
              to='/responsive-design'>
              Responsive & Adaptive designs
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/accessibility'>
              Accessibility
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/api-uses'>
              Using APIs
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/analytics'>
              Analytics
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/matter-js'>
              Testing Matter JS
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/game-kit'>
              Testing React Game Kit
            </Link>
          </div>

          <div>
            <Link
              className="App-grid__link"
              to='/random'>
              Random stuff
            </Link>
          </div>

        </div>
      </div>
    );
  }

  onClick() {
    this.setState({ 
      isHidden: true 
    });
  }

  onChangeLanguageClick() {
    this.setState({
      greeting: this.state.greeting === "Hello" ? "Bonjour" : "Hello",
      buttonText: this.state.greeting === "Hello" ? "Englishfy" : "Frenchify"
    });
  }
}