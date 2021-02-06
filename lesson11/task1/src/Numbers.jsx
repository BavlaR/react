import React, { PureComponent } from 'react';
import propTypes from 'prop-types';

class Numbers extends PureComponent {
   render() {
      return (
         <div className="number">
            <span className="number__title">{this.props.title}</span>
            <span className="number__value">{this.props.number}</span>
         </div>
      );
   }
}

Numbers.propTypes = {
   title: propTypes.string,
   number: propTypes.number.isRequired,
};

export default Numbers;
