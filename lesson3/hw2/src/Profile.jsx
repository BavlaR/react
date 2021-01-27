import React from 'react';
import './profile.scss';
import moment from 'moment';

export default p => {
   const birth = moment(p.user.birthDate).format('DD MMM YY');

   return (
      <div className="profile">
         <p className="profile__name">
            {p.user.firstName} {p.user.lastName}
         </p>
         <p className="profile__birth">
            Was born {birth} in {p.user.birthPlace}
         </p>
      </div>
   );
};
