import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
   constructor() {
      super();
      this.state = {
         isLoggedIn: false,
      };
   }

   handleLogin = () => {
      this.setState({
         isLoggedIn: true,
      });
   };

   handleLogout = () => {
      this.setState({
         isLoggedIn: false,
      });
   };

   render() {
      const button = this.state.isLoggedIn ? (
         <Logout onLogout={this.handleLogout} />
      ) : (
         <Login onLogin={this.handleLogin} />
      );

      return (
         <div className="panel">
            <Greeting isLoggedIn={this.state.isLoggedIn} />
            <div>{button}</div>
         </div>
      );
   }
}

export default Auth;
