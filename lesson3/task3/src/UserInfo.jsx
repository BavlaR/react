import React from 'react';
import './userInfo.scss';
import Avatar from './Avatar';

export default props => (
   <div className="user-info">
      <Avatar avatarUrl={props.user.avatarUrl} name={props.user.name} />
      <div className="user-info__name">{props.user.name}</div>
   </div>
);
