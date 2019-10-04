import React from 'react';


/* I have decided to use an array for the names of the days 
and the numbers because it makes the code scalable and easier 
to work with, also reduces the ammount of code and it looks cleaner */ 

/* The method date will help us get the correct days without the
need to make an Array manually.  */

export default class Calendar extends React.Component {
    render(){
        const days = ["M", "T", "W", "T", "F", "S", "S"] 
        const dayNumbers = new Date()
      return (
        <div className="calendarBox">
          <div className="monthName">
            <h2>August</h2>
          </div>
          <div className="daysName">
              <ul className="daysName">
            {days.map(day => {
                return <li className="daysName">{day}</li>
            })}
              </ul>
          </div>
        </div>       
      )
    }
  }