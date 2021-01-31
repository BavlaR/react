import React from 'react';
import Transaction from './Transaction';

const TransactionsList = ({ transactions }) => {
   return (
      <ul className="transactions">
         {transactions.map(oneTransact => (
            <Transaction {...oneTransact} key={oneTransact.id} />
         ))}
      </ul>
   );
};

export default TransactionsList;
