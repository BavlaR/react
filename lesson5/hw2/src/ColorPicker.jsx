import React, { Component } from 'react';

class ColorPicker extends Component {
  state = {
    text: '',
  };

  handleEnter = color => {
    this.setState({
      text: color,
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
            onMouseEnter={() => this.handleEnter('Coral')}
            onMouseLeave={this.handleLeave}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.handleEnter('Aqua')}
            onMouseLeave={this.handleLeave}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.handleEnter('Bisque')}
            onMouseLeave={this.handleLeave}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
