import React, { Component } from 'react';

class Expand extends Component {
   state = {
      isShown: false,
   };

   handleIsShown = () => {
      this.setState({
         isShown: !this.state.isShown,
      });
   };

   render() {
      const { isShown } = this.state;
      return (
         <div className="expand border">
            <div className="expand__header">
               <span className="expand__title">{this.props.title}</span>
               <button className="expand__toggle-btn" onClick={this.handleIsShown}>
                  <i className={isShown ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
               </button>
            </div>
            <div className="expand__content">{isShown ? this.props.children : null}</div>
         </div>
      );
   }
}

export default Expand;
