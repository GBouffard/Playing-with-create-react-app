import React from 'react';

// same as
// import React, { Component } from 'react';
// export default class Button extends Component {

export default class Button extends React.Component {
  render() {
    return (
      <button
        id={this.props.id}
        className={this.props.className}
        onClick={this.props.onClick}>
        {this.props.text}
      </button>
    )
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  id: React.PropTypes.string
}
