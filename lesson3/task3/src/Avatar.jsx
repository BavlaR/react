import React from 'react';
import './avatar.scss';

export default props => <img className="avatar" src={props.avatarUrl} alt={props.name} />;
