import React, { Component } from 'react';


export default class Calendar extends React.Component {
    render(){
        const days = ["M", "T", "W", "T", "F", "S", "S"]; //Names of days of the week
        const startDate= new Date(2019,7,1) // The first date that we want to use 
        const endDate = new Date(2019,8,1); // Last date we need as a limit

        console.log(startDate + endDate) //We make sure that the dates are correct. 


        //getDateArray creates an Array where the dates get pushed one by one ((date.getDate()+1)) into the Array to later be displayed
        //end-1 makes us avoid the first date of September, making sure we always go until the last day of the month we want
        const getDateArray = function(start, end){
            const arr = new Array()
            const date = new Date(start);

            while(date <= end-1){
                arr.push(new Date(date));
                date.setDate(date.getDate()+1);
            }
            return arr;
        }

       const dateArr = getDateArray(startDate, endDate)

       console.log(dateArr); //We check that we have managed to get all the desired dates
       

      return (
        <div className="calendarBox">
          <div className="monthName">
            <h2>August 2019</h2>
          </div>
          <div className="daysName">
              <ul className="daysName">
                {days.map((day, index) => {
                    return <li className="daysName" key={index}>{day}</li>
            })}
              </ul>
          </div>
          <ul className="daysNumbers">
            {dateArr.map((date, index) => {
                return <li className="numbers" key={index}>{date.getDate()}</li>
          })}
          </ul>
          <div className="buttons">
            <button type="submit" className="cancel">Cancel, <br></br> don't change</button>
            <button type="submit" className="changeDate">Change date</button>
        </div>
     
        </div>

      )
    }
  }
