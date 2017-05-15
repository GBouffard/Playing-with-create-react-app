import React from 'react'

const Button = (props) => {
  return (
    <button
      className={props.className}>
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: React.PropTypes.string.isRequired,
  className: React.PropTypes.string
}

export default Button