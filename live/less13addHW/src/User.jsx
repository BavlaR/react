import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = p => {
   // input init state
   // output array (state val + func)
   const [userData, setUserData] = useState({
      avatar: null,
      name: null,
      location: null,
   });

   const { userId } = useParams(); // Hook rout

   // input: callback, [arr]
   // output: undef

   //callback input: -
   // callback output: undef/fn
   useEffect(() => {
      fetch(`https://api.github.com/users/${userId}`)
         .then(res => res.json())
         .then(userData => {
            const { avatar_url, name, location } = userData;
            setUserData({
               avatar: avatar_url,
               name: name,
               location: location,
            });
         });
   }, [userId]);

   const { avatar, name, location } = userData;

   if (!avatar || !name || !location) return null;

   return (
      <div className="user">
         <img alt="User Avatar" src={avatar} className="user__avatar" />
         <div className="user__info">
            <span className="user__name">{name}</span>
            <span className="user__location">{location}</span>
         </div>
      </div>
   );
};

export default User;
