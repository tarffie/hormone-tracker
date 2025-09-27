import React from 'react';
import { format } from 'date-fns';

const App: React.FC = () => {
  return (
    <div>
      <h1>HormoneTracker Calendar</h1>
      <p>Today's date: {format(new Date(), 'PPP')}</p>
      <p>Track your HRT shots here!</p>
    </div>
  );
};

export default App;
