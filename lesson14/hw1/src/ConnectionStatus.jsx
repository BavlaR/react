import React, { useEffect, useState } from 'react';
import './index.scss';

const ConnectionStatus = () => {
   const [status, setStatus] = useState('online');

   useEffect(() => {
      const handleOnline = () => {
         setStatus('online');
      };

      const handleOffline = () => {
         setStatus('offline');
      };

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
         window.removeEventListener('online', handleOnline);
         window.removeEventListener('offline', handleOffline);
      };
   }, []);

   const offlineClass = `${status === 'offline' ? 'status_offline' : ''}`;

   return <div className={`status ${offlineClass}`}>{status}</div>;
};

export default ConnectionStatus;
