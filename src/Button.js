import React from 'react'

const Button = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}>
      {props.text}
    </button>
  )
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
  className: React.PropTypes.string
}

export default Button