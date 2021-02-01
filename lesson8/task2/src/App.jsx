import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
   state = {
      visible: true,
   };

   toggle = () => {
      this.setState({
         visible: !this.state.visible,
      });
   };

   render() {
      return (
         <>
            <button onClick={this.toggle}>Toggle</button>
            {this.state.visible && [
               <Clock location={'New York'} offset={-5} key={1} />,
               <Clock location={'Kyiv'} offset={2} key={2} />,
               <Clock location={'London'} offset={0} key={3} />,
            ]}
         </>
      );
   }
}

export default App;
