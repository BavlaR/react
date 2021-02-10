import React from 'react';
import Users from './Users';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const App = () => {
   return (
      <div className="page">
         <Router>
            <ul className="navigation">
               <li className="navigation__item">
                  <Link to="/">Home</Link>
               </li>
               <li className="navigation__item">
                  <Link to="/users">Users</Link>
               </li>
            </ul>
            <Switch>
               <Route path="/users" component={Users}></Route>
               <Route exact path="/">
                  <Home />
               </Route>
            </Switch>
         </Router>
      </div>
   );
};

export default App;
