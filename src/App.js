import React, { Component } from 'react';
import logo from '../public/logo.svg';
import '../public/App.css';
import '../public/Button.css';
import Button from './Button';
import classNames from 'classnames';
import _ from 'lodash';

class App extends Component {
  constructor(props) { 
    super(props);
    this.onClick = _.bind(this.onClick, this);
    this.state = {
      isHidden: false
    }
  }

  render() {
    const buttonClassName = classNames('buttonStyle', { 'hideButton': this.state.isHidden });
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
            text="click me"
            className={buttonClassName}
            onClick={this.onClick} />
        </div>
      </div>
    );
  }

  onClick() {
    this.setState({ 
      isHidden: true 
    });
  }
}

export default App;
