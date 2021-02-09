import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
   const [visible, setVisible] = useState(true);
   const handleVision = () => setVisible(!visible);

   return (
      <>
         <button onClick={handleVision}>Toggle</button>
         {visible && [
            <Clock location={'New York'} offset={-5} key={1} />,
            <Clock location={'Kyiv'} offset={2} key={2} />,
            <Clock location={'London'} offset={0} key={3} />,
         ]}
      </>
   );
};

export default App;
