import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default function Paragraph (props) {
  const {
    children,
    type,
    className
  } = props

  const classNames = classnames('paragraph', className,
    { 'paragraph--large': type === 'large' }
  )

  return (
    <p
      className={classNames}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['large'])
}
