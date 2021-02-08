import React from 'react';
import User from './User';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Users = ({ match }) => {
   return (
      <Router>
         <div className="page__content">
            <h1>Users</h1>
            <ul className="navigation">
               <li className="navigation__item">
                  <link to={`${match.path}/github`}>Github</link>
               </li>
               <li className="navigation__item">
                  <link to={`${match.path}/facebook`}>Facebook</link>
               </li>
            </ul>

            <Switch>
               <Route exact path={match.path}>
                  <span>Select a user please</span>
               </Route>
               <Route path={`${match.path}/:userId`} component={User} />
            </Switch>
         </div>
      </Router>
   );
};

export default Users;
