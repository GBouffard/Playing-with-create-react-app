import React from 'react'
import classNames from 'classnames'

const status = {
  hovered: 'hovered',
  normal: 'normal'
}

export default class SnapShotLink extends React.Component {
  constructor (props) {
    super(props)
    this._onMouseEnter = this._onMouseEnter.bind(this)
    this._onMouseLeave = this._onMouseLeave.bind(this)
    this.state = {
      class: status.normal
    }
  }

  _onMouseEnter () {
    console.log('enter')
    this.setState({ class: status.hovered })
  }

  _onMouseLeave () {
    console.log('leave')
    this.setState({ class: status.normal })
  }

  render () {
    const snapShotLinkClass = classNames('link-with-animation', this.state.class)

    return (
      <a
        className={snapShotLinkClass}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}>
        {this.props.children}
      </a>
    )
  }
}

SnapShotLink.propTypes = {
  page: React.PropTypes.string
}
