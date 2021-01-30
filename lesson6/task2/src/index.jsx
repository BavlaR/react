import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Mailbox from './Mailbox';

ReactDOM.render(<Mailbox unreadMessages={[6]} />, document.querySelector('#root'));
