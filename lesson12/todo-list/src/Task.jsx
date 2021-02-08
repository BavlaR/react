import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ id, done, text, onChange, onDelete }) => {
   return (
      <li className={`list-item ${done ? 'list-item_done' : ''}`}>
         <input
            type="checkbox"
            className="list-item__checkbox"
            checked={done}
            onChange={() => onChange(id)}
         />
         <span className="list-text">{text}</span>
         <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
      </li>
   );
};

Task.propTypes = {
   id: PropTypes.number,
   done: PropTypes.bool,
   text: PropTypes.string,
   onChange: PropTypes.func,
   onDelete: PropTypes.func,
};

export default Task;
