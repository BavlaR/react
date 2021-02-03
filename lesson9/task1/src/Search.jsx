import React, { Component } from 'react';

class Search extends Component {
   state = {
      value: '',
   };

   handleChange = e => {
      this.setState({
         value: e.target.value,
      });
   };

   handleSubmit = e => {
      e.preventDefault();
      alert(`Search text: ${this.state.value}`);
   };

   render() {
      return (
         <form className="search" onSubmit={this.handleSubmit}>
            <input
               type="text"
               className="search__input"
               value={this.state.value}
               onChange={this.handleChange}
            />
            <button className="search__button" type="submit">
               Search
            </button>
         </form>
      );
   }
}

export default Search;
