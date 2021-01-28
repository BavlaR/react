import React, { Component } from 'react';

class Toggler extends Component {
  constructor() {
    super();
    this.state = {
      isOff: true,
    };
  }

  onClickHandler() {
    this.setState({
      isOff: !this.state.isOff,
    });
  }

  render() {
    if (this.state.isOff)
      return (
        <button onClick={() => this.onClickHandler()} className="toggler">
          Off
        </button>
      );

    return (
      <button onClick={() => this.onClickHandler()} className="toggler">
        On
      </button>
    );
  }
}

export default Toggler;
