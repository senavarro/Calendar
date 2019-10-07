The project is to design a functional calendar with React. It will allow us to choose a date for delivery (only one). 

I have designed the JSX structure of the main component (I haven't had time to create the other components, which I know it was the point of using React) I have started to structure the CSS using flex but I am still creating the columns. I can't find yet why is not responding to my requests of diving the rows after 7 elements. 

Do make the dates functional, I use getDate() from an starting date to an end date and with that I loop the dates pushin them into an array that I later use to display the days creating <li> elements. 
  

What is left to be done is:

- Finishing the CSS structure for columns and that the first day starts on Thursday making the first <li> elements empty.
- Every tuesday and thursday should have a different appearance, that would be done on CSS giving them an extra className besides the one that already have
  
- A hover function that makes the days in the calendar be highlighted so we always know over which day are we in. 
  
- Make the buttons functional. This shouldn't be hard, the button of Change date will make an element appear (rendering a new component reacting to the onClick function) that will allow us to choose one of the dates of the <li> elements corresponding to the days. The button cancel, don't change will just make the new component disappear again. 
  
- The choosen date will receive a new class that will mark it in a different color so we know, also we will add the text "Delivery date" to the box. 
  

