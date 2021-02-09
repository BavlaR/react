import React, { useEffect, useState } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
   const currentTime = new Date();
   const utcOffset = currentTime.getTimezoneOffset() / 60;
   return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ offset, location }) => {
   const getTime = () => moment(getTimeWithOffset(offset)).format('h:mm:ss A');

   const [TIME, setTime] = useState(getTime());

   useEffect(() => {
      const interval = setInterval(() => {
         setTime(getTime());
      }, 1000);

      return () => clearInterval(interval);
   });

   return (
      <div className="clock">
         <div className="clock__location">{location}</div>
         <div className="clock__time">{TIME}</div>
      </div>
   );
};

export default Clock;
