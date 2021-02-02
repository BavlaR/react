import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const users = [
   { id: 1, name: 'Bob', age: 21 },
   { id: 2, name: 'Tom', age: 17 },
   { id: 3, name: 'Ted', age: 18 },
   { id: 4, name: 'Max', age: 22 },
   { id: 5, name: 'Ron', age: 23 },
   { id: 6, name: 'Helen', age: 23 },
   { id: 7, name: 'John', age: 23 },
];

ReactDOM.render(<UsersList users={users} />, document.querySelector('#root'));
