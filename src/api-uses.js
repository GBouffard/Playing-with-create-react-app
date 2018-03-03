import React, { Component } from 'react';
import Button from './Button';

class APIUses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imgsrc: '',
      showImage: false
    };
  }

  onChange = (event) => {
    this.setState({ 
      input: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ 
      showImage: true
    });

    const api_key = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.input}&api_key=${api_key}`;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        input: '',
        imgsrc: data.data[0].images.fixed_height.url
      }))
      .catch(e => console.log('error', e));
  }

  render() {
    const imageElement = (
      <img
        className="giphy-image"
        src={this.state.imgsrc}
        alt={this.state.input} />
    );

    return (
      <div>
        <h3>An image renderer calling the Giphy API:</h3>
        <form
          onSubmit={this.onSubmit}>

          <input
            className="giphy-api-input"
            value={this.state.input}
            onChange={this.onChange} />

          <Button
            className="giphy-api-button"
            text="Search" />
        </form>

        {this.state.showImage && imageElement}

      </div>
    );
  }
}

export default APIUses;