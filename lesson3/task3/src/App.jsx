import React from 'react';
import Comment from './Comment';

const user = {
   name: 'Tom',
   avatarUrl: 'https://avatars1.githubusercontent.com',
};

export default () => <Comment author={user} text="Good job!" date={new Date()} />;
