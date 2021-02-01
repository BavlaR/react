import React, { Component } from 'react';

class ConnectionStatus extends Component {
   state = {
      status: 'online',
   };

   handleOnline = () => {
      document.querySelector('.status').classList.toggle('status_offline');
      this.setState({
         status: 'online',
      });
   };

   handleOffline = () => {
      document.querySelector('.status').classList.toggle('status_offline');
      this.setState({
         status: 'offline',
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
