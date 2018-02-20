import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  render() {
    const {
      errorMessage,
      labelText,
      maxLength,
      multiLine,
      disabled,
      placeholderText,
      inputAriaLabel,
      accessibilityDescription
    } = this.props;

    const remainingCharacterCount = maxLength - this.state.value.length;
    const hasError = remainingCharacterCount <= 0;

    const inputClassName = classNames(
      'input-field__input',
      {
        'input-field__input--textarea': multiLine,
        'input-field__input--error': hasError
      }
    );

    const inputProps = {
      onChange: this.onChange,
      value: this.state.value,
      ref: (ref) => this._input = ref,
      placeholder: placeholderText,
      'aria-invalid': !!errorMessage,
      'aria-label': inputAriaLabel,
      className: inputClassName,
      disabled: disabled
    };

    if (maxLength) {
      inputProps.maxLength = `${maxLength}`;
    }

    const counterClassName = classNames(
      'input-field__counter',
      { 'input-field__counter--error': hasError }
    );

    let errorElement;
    if (hasError) {
      errorElement = (
        <div
          className="input-field__error">
          {errorMessage}
        </div>
      )
    }

    let accessibilityDescriptionElement;
    if (accessibilityDescription) {
      const accessibilityId = 'accessibility-description';
      inputProps['aria-describedby'] = accessibilityId;
      accessibilityDescriptionElement = (
        <div
          className="input-field__visibly-hidden"
          id={accessibilityId}>
            {accessibilityDescription}
        </div>
      );
    }

    let characterLimitElement;
    if (maxLength) {
      characterLimitElement = (
        <span
          className={counterClassName}
          aria-live="polite"
          aria-atomic="true">

          {remainingCharacterCount}

          <span
            className="visibly-hidden">
            &ensp;characters remaining
          </span>
        </span>
      );
    }

    let inputElement;
    if (multiLine) {
      inputElement = (
        <textarea
          {...inputProps} />
      );
    } else {
      inputElement = (
        <input
          {...inputProps} />
      );
    }

    let labelElement;
    if (labelText) {
      labelElement = (
        <label>
          {labelText}
        </label>
      );
    }

    return (
      <div
        className="input-field">

        {labelElement}

        <div>
          {inputElement}
          {characterLimitElement}
          {errorElement}
          {accessibilityDescriptionElement}
        </div>

      </div>
    );
  }

  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }
}

InputField.propTypes = {
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,

  // to count characters and raise error on 
  maxLength: PropTypes.number,
  errorMessage: PropTypes.string,

  // to make a more than 1 line ling input field
  multiLine: PropTypes.bool,

  // to disable any input
  disabled: PropTypes.bool,

  // for accessibility purposes
  inputAriaLabel: PropTypes.string,
  accessibilityDescription: PropTypes.string
};