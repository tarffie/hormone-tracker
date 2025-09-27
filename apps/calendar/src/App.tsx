import React from 'react';
import { format } from 'date-fns';

// [sidebar| calendar screen | another sidebar] 
/*
  * Button to toggle between months | week days              | upcoming shots
  * whole month days                | shots and med hours    | upcoming meds
  * A Tag or filter utility         |                        | reminders if you'd like to make an entry to your journal(?)
*/

/** 
  * each square for WeekUtility will be an individual component with the capability
  * for "events", they could something of the sort like an injection shot
  * a stamp or a pill
  */

/* generic overview of how this document should be structured?
<LeftSidebar />
<WeekUtility />
<RightSidebar />
*/

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
