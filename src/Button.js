import React from 'react'

// same as
// import React, { Component } from 'react';
// export default class Button extends Component {

export default class Button extends React.Component {
  render () {
    const {
      onClick,
      text,
      className,
      id
    } = this.props

    return (
      <button
        id={id}
        className={className}
        onClick={onClick}>
        {text}
      </button>
    )
  }
}

Button.propTypes = {
  text: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
  className: React.PropTypes.string,
  id: React.PropTypes.string
}
