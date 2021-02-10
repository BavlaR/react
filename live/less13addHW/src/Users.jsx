import React from 'react';
import User from './User';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Users = ({ match }) => {
   return (
      <div className="page__content">
         <Router>
            <h1>Users</h1>
            <ul className="navigation">
               <li className="navigation__item">
                  <Link to={`${match.path}/github`}>Github</Link>
               </li>
               <li className="navigation__item">
                  <Link to={`${match.path}/facebook`}>Facebook</Link>
               </li>
            </ul>

            <Switch>
               <Route exact path={match.path}>
                  <span>Select a user please</span>
               </Route>
               <Route path={`${match.path}/:userId`} component={User} />
            </Switch>
         </Router>
      </div>
   );
};

export default Users;
