import React, { Component } from 'react';
import logo from '../public/logo.svg';
import '../public/App.css';
import '../public/Button.css';
import Button from './Button';

class App extends Component {

  constructor(props) { 
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      class: 'buttonStyle'
    }
  }

  render() {
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
            className={this.state.class}
            onClick={this.onClick} />
        </div>
      </div>
    );
  }

  onClick() {
    this.setState({ 
      class: 'hideButton'
    });
  }
}

export default App;
