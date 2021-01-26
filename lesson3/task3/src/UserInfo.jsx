import React from 'react';
import './userInfo.scss';
import Avatar from './Avatar';

export default props => (
   <div className="user-info">
      <Avatar avatarUrl={props.author.avatarUrl} name={props.author.name} />
      <div className="user-info__name">{props.author.name}</div>
   </div>
);
