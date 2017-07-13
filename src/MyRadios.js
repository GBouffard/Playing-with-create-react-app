import React from 'react';

export default class MyRadios extends React.Component {
  constructor() {
    super();
    this.onChange = this.changeRadio.bind(this);
    this.state = {
      checkedRadio: null
    };
  }

  makeRadio(number) {
    const radioValue = `value${number}`;
    const radioLabel = this.props.radiosLabels && this.props.radiosLabels[number] ?
      this.props.radiosLabels[number] : radioValue;

    return (
      <label>
        <input
        type="radio"
        onChange={this.onChange}
        value={radioValue}
        checked={this.state.checkedRadio === radioValue} />
        <strong>{radioLabel}</strong>
      </label>
    );
  }

  renderRadios(number) {
    // loop inside React JSX can be returned through an array
    let radios = [];
    for(let i = 0; i < number; i++) {
      radios.push(this.makeRadio(i));
    }
    return radios;
  }

  changeRadio(event) {
    this.setState({
      checkedRadio: event.target.value
    });
  }

  render() {
    const radiosElement = this.renderRadios(this.props.radiosNumber);
    
    return (
      <div>
        Radios for Testing purposes:
        {radiosElement}
      </div>
    )
  }
}

MyRadios.propTypes = {
  radiosNumber: React.PropTypes.number.isRequired,
  radiosLabels: React.PropTypes.arrayOf(React.PropTypes.string)
};
