import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
   state = {
      text: '',
   };

   handleChange = e => {
      this.setState({
         text: e.target.value,
      });
   };

   render() {
      const { text } = this.state;
      const { users } = this.props;
      const filteredUsers = users.filter(user => user.name === text);

      return (
         <div>
            <Filter onChange={this.handleChange} count={filteredUsers.length} filterText={text} />

            <ul className="users">
               {(!text ? users : filteredUsers).map(user => (
                  <User name={user.name} age={user.age} key={user.id} />
               ))}
            </ul>
         </div>
      );
   }
}

export default UsersList;
