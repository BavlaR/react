import React from 'react';
import Users from './Users';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
   return (
      <Router>
         <div className="page">
            <ul className="navigation">
               <li className="navigation__item">
                  <link to="/">Home</link>
               </li>
               <li className="navigation__item">
                  <link to="/users">Users</link>
               </li>
            </ul>
            <Switch>
               <Route path="/users" component={Users}></Route>
               <Route exact path="/">
                  <Home />
               </Route>
            </Switch>
         </div>
      </Router>
   );
};

export default App;
