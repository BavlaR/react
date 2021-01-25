import React from 'react';
import ReactDOM from 'react-dom';

const elem = (
   <>
      <h1>Search Form</h1>
      <div>
         <input type="text" />
         <button>Search</button>
      </div>
   </>
);

ReactDOM.render(elem, document.querySelector('#root'));
