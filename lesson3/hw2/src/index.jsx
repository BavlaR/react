import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

const userData = {
   firstName: 'John',
   lastName: 'Doe',
   birthDate: '1991-01-17T11:11:11.819Z',
   birthPlace: 'London',
};

ReactDOM.render(<Profile user={userData} />, document.querySelector('#root'));
