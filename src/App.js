import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/logo.svg';
import '../public/AllcssFiles.css';
import Button from './Button';
import SnapShotLink from './snapshot_link';
import MyRadios from './MyRadios';
import DropdownList from './dropdown-list';
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
    const radiosLabelsArray = [
      'This is Value 0!',
      'only passing 2 strings!'
    ];
    const dropdownArray = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ];

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

        <MyRadios
          radiosNumber={3}
          radiosLabels={radiosLabelsArray} />

        <DropdownList
          options={dropdownArray}
          dropdownListId="days-of-the-weeks-dropdown-list"/>

        <div>
          <Link to='/cards-container'>
            SVGs cards container
          </Link>
        </div>

        <div>
          <Link to='/audios-and-videos'>
            Audio and videos
          </Link>
        </div>

        {/* This is how you comment a JSX element */}

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