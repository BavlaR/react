import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const USERS = [
   { id: 1, name: 'John', age: 30 },
   { id: 2, name: 'Bob', age: 40 },
   { id: 3, name: 'Marie', age: 21 },
   { id: 4, name: 'HuanCarlos', age: 36 },
   { id: 5, name: 'Dickembe', age: 51 },
   { id: 6, name: 'LeBron', age: 34 },
   { id: 7, name: 'Praskovia', age: 102 },
   { id: 8, name: 'Bob', age: 18 },
];

ReactDOM.render(<UsersList users={USERS} />, document.querySelector('#root'));
