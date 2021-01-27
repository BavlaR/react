import React from 'react';
import './profile.scss';
import moment from 'moment';

const Profile = p => {
   const birth = moment(p.userData.birthDate).format('DD MMM YY');

   return (
      <div className="profile">
         <p className="profile__name">
            {p.userData.firstName} {p.userData.lastName}
         </p>
         <p className="profile__birth">
            Was born {birth} in {p.userData.birthPlace}
         </p>
      </div>
   );
};

export default Profile;
