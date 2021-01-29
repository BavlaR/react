import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }

  handleEnterCoral = e => {
    this.setState({
      text: 'Coral',
    });
  };

  handleEnterAqua = e => {
    this.setState({
      text: 'Aqua',
    });
  };

  handleEnterBisque = e => {
    this.setState({
      text: 'Bisque',
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
            onMouseEnter={this.handleEnterCoral}
            onMouseLeave={this.handleLeave}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.handleEnterAqua}
            onMouseLeave={this.handleLeave}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.handleEnterBisque}
            onMouseLeave={this.handleLeave}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
