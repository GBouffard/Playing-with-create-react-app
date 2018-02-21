import React, { Component } from 'react';

export default class PopUpBoxes extends Component {
  constructor() {
    super();
    this.onAlertClick = this.onAlertClick.bind(this)
    this.onConfirmClick = this.onConfirmClick.bind(this);
    this.onPromptClick = this.onPromptClick.bind(this);
    this.onShowChuckNorris = this.onShowChuckNorris.bind(this);
    this.onEnterName = this.onEnterName.bind(this);
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

  onShowChuckNorris() { 
    const isHappyOrSad = confirm('Show Chuck Norris?') ? 'happy' : 'sad';
    document.getElementById("chuckNorrisDiv").innerHTML = `<img src="../images/chuck-norris-${isHappyOrSad}.jpg">`;
  }

  onEnterName() {
    const name = prompt('Enter your name');
    if (name) {
      document.getElementById('myNameDiv').innerHTML = `<div>Hello ${name}!! What's up?</div>`;
    }
  }

  render() {
    let promptVal = this.state.promptValue ? this.state.promptValue.toString() : 'null';
    let buttonStyle = {
      margin:'5rem',
      background: 'yellow'
    };

    let buttonStyle2 = {
      padding:'2rem',
      margin: '2rem',
      background: 'lightgreen',
      color: 'seagreen'
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

        <button
          style={buttonStyle2}
          onClick={this.onShowChuckNorris}>
          The Chuck Norris Button
        </button> 

        <div id="chuckNorrisDiv"></div>

        <div id="myNameDiv"></div>

        <button
          style={buttonStyle2}
          onClick={this.onEnterName}>
          Enter your name prompt
        </button>
      </div>
    );
  }
}