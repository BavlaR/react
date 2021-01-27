import React from 'react';
import Auth from './Auth';
import Logout from './Logout';
import Login from './Login';
import Spinner from './Spinner';

export default () => {
   const someFunc = () => {
      console.log('CLICKED!');
   };

   return (
      <div>
         <Auth />
         <Login />
         <Logout />
         <Spinner />
      </div>
   );
};
