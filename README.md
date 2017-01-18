#  Nite-Out App


## Synopsis:
The motivation behind this application is to avoid scheduling conflicts and have a graphical interface for looking at my whole schedule. The alternative was looking 
through jumbled text messages on my phone. We all know that sometimes that can be an epic fail if you miss  one text message that has an event you agreed to attend.
Here comes Nite-Out, where you can make your life and your partner life better by putting your schedule into one.


![Alt text](src/assets/screenshot.png "Picture of Game Board")



## Code Example
```` ``` ````ReactJS/Javascript```` ``` ````
  deleteActivity(key){

let precaution = confirm("Are you sure your plans have been cancelled? ")
if(precaution){
axios.delete(`https://date-night-alive.firebaseio.com/${key}.json?print=pretty`)
.then(() => {
    this.getActivities();
    console.log(key);
   })
   .catch((error) => {console.log(error)
 })
}
}
  ```` ``` ````

## Build Strategy
Originally I wanted to build a nite-out application where you can schedule your daily activities and only have 5 activities per page.  My first step was to setup a firebase database to store my information and setup structure for project. From there, I wrote the logic to get the date in the format that I wanted so that it could render succesfully on 
the page. Originally, I wanted to test my skill with ReactJS and only write code in Vanilla Javascript/ React.  I used lodash for some parts
 and will work on adding more to application 



## Technologies

For this project, I have used the following technologies:

ReactJS
Firebase
Axios
Lodash
Vanilla Javacript
HTML
CSS
GitHub

## Future Improvements (not in any particular order)

add Browser Router so I can have a navigation history for users
add a Date component
Link to the Google API so a map cna display when you click on Location
Add a sort functionality to organize activities by time within each date


## Contributing
Stack Overflow 
W3 Schools
ReactJS Documentation
Lodash Documentation
These resources really help with my syntax issues. 

##Authors
Shantel Moore
