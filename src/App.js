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
            <Link to='/paragraphs'>
              Paragraphs
            </Link>
          </div>

          <div>
            <Link to='/input-fields'>
              Input fields
            </Link>
          </div>

          <div>
            <Link to='/lists'>
              Lists
            </Link>
          </div>

          <div>
            <Link to='/radios'>
              Radios
            </Link>
          </div>

          <div>
            <Link to='/dropdown-menus'>
              Dropdown Menus
            </Link>
          </div>

          <div>
            <Link to='/audios-and-videos'>
              Audio & Videos
            </Link>
          </div>

          <div>
            <Link to='/comment'>
              Comments
            </Link>
          </div>

          <div>
            <Link to='/pop-up-boxes'>
              Pop-up boxes
            </Link>
          </div>

          <div>
            <Link to='/iframes'>
              Iframes
            </Link>
          </div>

          <div>
            <Link to='/svgs'>
              SVGs
            </Link>
          </div>

          <div>
            <Link to='/svg-cards-animation'>
              SVGs cards animation
            </Link>
          </div>

          <div>
            <Link to='/toggle-switch'>
              Toggle switch
            </Link>
          </div>

          <div>
            <Link to='/css-positioning'>
              CSS Positioning
            </Link>
          </div>

          <div
            className="bigger-grid-item">
            <Link to='/responsive-design'>
              Responsive & Adaptive designs
            </Link>
          </div>

          <div>
            <Link to='/accessibility'>
              Accessibility
            </Link>
          </div>

          <div>
            <Link to='/api-uses'>
              Using APIs
            </Link>
          </div>

          <div>
            <Link to='/analytics'>
              Analytics
            </Link>
          </div>

          <div>
            <Link to='/matter-js'>
              Testing Matter JS
            </Link>
          </div>

          <div>
            <Link to='/game-kit'>
              Testing React Game Kit
            </Link>
          </div>

          <div>
            <Link to='/random'>
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