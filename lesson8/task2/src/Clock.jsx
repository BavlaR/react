import React, { Component } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
   const currentTime = new Date();
   const utcOffset = currentTime.getTimezoneOffset() / 60;
   return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
   constructor(p) {
      super(p);

      this.getTime = () => moment(getTimeWithOffset(p.offset)).format('h:mm:ss A');

      this.state = {
         location: p.location,
         time: this.getTime(),
      };
   }

   componentDidMount() {
      this.interval = setInterval(() => {
         this.setState({
            time: this.getTime(),
         });
      }, 1000);
   }

   componentWillUnmount() {
      clearInterval(this.interval);
   }

   render() {
      return (
         <div className="clock">
            <div className="clock__location">{this.state.location}</div>
            <div className="clock__time">{this.state.time}</div>
         </div>
      );
   }
}

export default Clock;
