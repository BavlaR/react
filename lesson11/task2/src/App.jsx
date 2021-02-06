import React, { Component } from 'react';
import Dialog from './Dialog';

class App extends Component {
   state = {
      isOpen: false,
   };

   handleHide = () => {
      this.setState({
         isOpen: false,
      });
   };

   handleShow = () => {
      this.setState({
         isOpen: true,
      });
   };

   render() {
      return (
         <div className="app">
            <button className="btn" onClick={this.handleShow}>
               Show dialog
            </button>
            <Dialog isOpen={this.state.isOpen} title="Recommendation" onClose={this.handleHide}>
               <p>Use immutable array methods to work with data. It will help to avoid bugs</p>
            </Dialog>
         </div>
      );
   }
}

export default App;
