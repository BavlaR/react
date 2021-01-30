import React, { Component } from 'react';
import Logout from './Logout';
import Login from './Login';
import Spinner from './Spinner';

class Auth extends Component {
   constructor() {
      super();

      this.state = {
         isLoggedIn: false,
         isProcessing: false,
      };
   }

   loginHandler = () => {
      this.setState({
         isProcessing: true,
      });

      setTimeout(() => {
         this.setState({
            isProcessing: false,
            isLoggedIn: true,
         });
      }, 2000);
   };

   logoutHandler = () => {
      this.setState({
         isLoggedIn: false,
      });
   };

   render() {
      if (this.state.isProcessing) {
         return <Spinner size={50} />;
      }

      if (this.state.isLoggedIn) {
         return <Logout onLogout={this.logoutHandler} />;
      }

      return (
         <div>
            <Login onLogin={this.loginHandler} />
         </div>
      );
   }
}

export default Auth;
