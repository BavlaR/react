import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const getTime = () => {
   const seconds = new Date().getSeconds();
   const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
   const textColor = seconds % 2 !== 0 ? '#fff' : '#000';
   const styles = {
      color: textColor,
      backgroundColor,
   };

   const elem = (
      <div className="seconds" style={styles}>
         Now is {seconds}
      </div>
   );

   ReactDOM.render(elem, document.querySelector('#root'));
};

setInterval(getTime, 1000);
