import React, { Component } from 'react';

class ConnectionStatus extends Component {
   state = {
      status: 'Online',
   };

   handleOnline = () => {
      document.querySelector('.status').classList.remove('status_offline');
      this.setState({
         status: 'Online',
      });
   };

   online = window.navigator.onLine;

   handleOffline = () => {
      document.querySelector('.status').classList.add('status_offline');
      this.setState({
         status: 'Offline',
      });
   };

   componentDidMount() {
      window.addEventListener('online', this.handleOnline);
      window.addEventListener('offline', this.handleOffline);
   }

   componentWillUnmount() {
      window.removeEventListener('online', this.handleOnline);
      window.removeEventListener('offline', this.handleOffline);
   }

   render() {
      return <div className="status">{this.state.status}</div>;
   }
}

export default ConnectionStatus;
