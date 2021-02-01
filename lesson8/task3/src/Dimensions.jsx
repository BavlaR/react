import React, { Component } from 'react';

class Dimensions extends Component {
   state = {
      width: null,
      height: null,
   };

   setDimensions(width, height) {
      this.setState({
         width,
         height,
      });

      document.title = `${width} x ${height}`;
   }

   onResize = e => {
      const { innerWidth, innerHeight } = e.target;

      this.setDimensions(innerWidth, innerHeight);
   };

   componentDidMount() {
      window.addEventListener('resize', this.onResize);

      const { innerWidth, innerHeight } = window;

      this.setDimensions(innerWidth, innerHeight);
   }

   componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
   }

   render() {
      return (
         <div className="dimensions">
            {this.state.width}px - {this.state.height}px
         </div>
      );
   }
}

export default Dimensions;
