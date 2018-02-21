import React, { Component } from 'react';

export default class PopUpBoxes extends Component {
  constructor() {
    super();
    this.onAlertClick = this.onAlertClick.bind(this)
    this.onConfirmClick = this.onConfirmClick.bind(this);
    this.onPromptClick = this.onPromptClick.bind(this);
    this.state = {
      confirmValue: false,
      promptValue: null,
    };
   }

  onAlertClick() {
    alert('Alert boxes only give a piece of information. They have no return value.');  
  }

  onConfirmClick(e) {
    const storedValue = confirm('When a confirm box pops up, the user will have to click either OK (true) or Cancel (false) to proceed');
    this.setState({
      confirmValue: storedValue
    })
  }

  onPromptClick() {
    const storedValue = prompt('A prompt box is used to input a value. Once entered, the user will have to click either OK (returns the input value) or Cancel (returns null)');  
    this.setState({
      promptValue: storedValue
    })
  }

  render() {
    let promptVal = this.state.promptValue ? this.state.promptValue.toString() : 'null';
    let buttonStyle = {
      margin:'5rem',
      background: 'yellow'
    };

    let stateDivStyle = {
      width: '80%',
      padding: '.75rem',
      border: '.25rem solid lightpink',
      margin:'0 auto',
      background: 'lavenderblush'
    };

    return (
      <div>
        <button
          style={buttonStyle}
          onClick={this.onAlertClick}>
          Alert Box
        </button>

        <button
          style={buttonStyle}
          onClick={this.onConfirmClick}>
          Confirm Box
        </button>

        <button
          style={buttonStyle}
          onClick={this.onPromptClick}>
          Prompt Box
        </button>

        <div
          style={stateDivStyle}>
          <h1>state values of the component</h1>
          Alert has no return value<br/>
          Confirm Value: {this.state.confirmValue.toString()}<br/>
          Prompt Value: {promptVal}
        </div>
      </div>
    );
  }
}