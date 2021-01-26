import React, { Component } from 'react';
import './search.scss';

export default class extends Component {
   render() {
      return (
         <div className="search">
            <h1 className="search__title">Hello, {this.props.name}. What to search for you?</h1>
            <div className="search__field">
               <input className="search__input" type="text" />
               <button className="search__button">Search</button>
            </div>
         </div>
      );
   }
}
