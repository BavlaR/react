import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting';

ReactDOM.render(
   <Greeting firstName="Joe" lastName="Doe" birthDate={new Date(2010, 1, 20)} />,
   document.querySelector('#root'),
);
