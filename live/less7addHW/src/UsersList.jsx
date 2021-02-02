import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         currentPage: 1,
         usersPerPage: 3,
      };
   }

   goPrev = () => {
      this.setState({
         currentPage: this.state.currentPage - 1,
      });
   };

   goNext = () => {
      this.setState({
         currentPage: this.state.currentPage + 1,
      });
   };

   render() {
      const { users } = this.props;
      const { currentPage, usersPerPage } = this.state;
      const start = (currentPage - 1) * usersPerPage;
      const usersToDisplay = users.slice(start, start + usersPerPage);

      return (
         <div>
            <Pagination
               goPrev={this.goPrev}
               goNext={this.goNext}
               currentPage={currentPage}
               totalItems={users.length}
               itemsPerPage={usersPerPage}
            />

            <ul className="users">
               {usersToDisplay.map(user => (
                  <User name={user.name} age={user.age} key={user.id} />
               ))}
            </ul>
         </div>
      );
   }
}

export default UsersList;
