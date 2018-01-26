import React, { Component } from 'react';
import PropTypes from 'prop-types';;
import classNames from 'classnames';

//reminder: role are useful for accessibility purposes

function makeOptions(arr) {
  return arr.map(function(option) {
    const optionProps = {
      className: 'dropdown-list__option',
      role: 'option',
      value: option
    };

    return (
      <option {...optionProps}>
        {option}
      </option>
    );
  });
}

function getDateFromLocalStorage() {
  return localStorage.selectedDay || null;
}

export default class DropdownList extends Component {
  constructor() {
    super();
    this.onChange = this.changeSelectedValue.bind(this);
    this.state = {
      selectedValue: getDateFromLocalStorage()
    };
  }

  changeSelectedValue(event) {
    this.setState({
      selectedValue: event.target.value
    });
    localStorage.setItem("selectedDay", event.target.value); 
  }

  render() {
    const {
      options,
      dropdownListId,
      additionalClassName
    } = this.props;
    
    const optionComponents = makeOptions(options);
    let className = classNames('dropdown-list', additionalClassName);

    return (
      <div
        className={className}>
        <select
          className="dropdown-list__select"
          role="listbox"
          value={this.state.selectedValue}
          id={dropdownListId}
          onChange={this.onChange}>
          {optionComponents}
        </select>
      </div>
    );
  }
}

DropdownList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object
    ])
  ).isRequired,
  selectedValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  dropdownListId: PropTypes.string,
  additionalClassName: PropTypes.string
};