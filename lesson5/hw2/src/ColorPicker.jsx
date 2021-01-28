import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleEnter = e => {
    this.setState({
      text: e.target.dataset.color,
    });
  };

  handleLeave = () => {
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.text}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            data-color="coral"
            onMouseEnter={this.handleEnter}
            onMouseLeave={this.handleLeave}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            data-color="aqua"
            onMouseEnter={this.handleEnter}
            onMouseLeave={this.handleLeave}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            data-color="bisque"
            onMouseEnter={this.handleEnter}
            onMouseLeave={this.handleLeave}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
