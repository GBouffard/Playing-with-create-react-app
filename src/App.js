import React, { Component } from 'react';
import logo from '../public/logo.svg';
import '../public/App.css';
import '../public/Button.css';
import Button from './Button';
import SnapShotLink from './snapshot_link';
import classNames from 'classnames';
import _ from 'lodash';

class App extends Component {
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
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Button
            text="HIDE ME"
            id="hideMe"
            className={buttonClassName}
            onClick={this.onClick} />
        </div>
        <div>
          <SnapShotLink 
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

export default App;
