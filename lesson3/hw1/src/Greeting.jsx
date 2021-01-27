import React from 'react';
import './greeting.scss';
import moment from 'moment';

export default p => {
   const howOld = moment().diff(p.birthDate, 'years');
   console.log(howOld);

   return (
      <div className="greeting">
         My name is {p.firstName} {p.lastName}. I'm {howOld} years old
      </div>
   );
};
