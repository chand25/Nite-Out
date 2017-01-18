import React, { Component } from 'react';
import axios from 'axios';
import ActivityFeed from './components/ActivityFeed';
import EditActivityFeed from './components/EditActivityFeed';
import Input from './components/Input'
import EditInput from './components/EditInput';
import  _ from 'lodash';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      activities: [],
      value: '',
      dates: [],
      isPressed: false,
      editkey: '',
      location: '',
      time: '',
      editvalue: '',
      editTimeValue: '',
      editLocationValue: '',
      counter: 0,
    };
    this.getActivities=this.getActivities.bind(this);
    this.postActivities=this.postActivities.bind(this);
    this.deleteActivity=this.deleteActivity.bind(this);
    this.updateActivities=this.updateActivities.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleEditClick=this.handleEditClick.bind(this);
    this.handleChangeAgain=this.handleChangeAgain.bind(this);
    this.handleTitleChange=this.handleTitleChange.bind(this);
    this.handleTimeChange=this.handleTimeChange.bind(this);
    this.handleLocationChange=this.handleLocationChange.bind(this);
    this.handleEditTimeChange=this.handleEditTimeChange.bind(this);
    this.handleEditLocationChange=this.handleEditLocationChange.bind(this);
    this.nextDate=this.nextDate.bind(this);
    this.previousDate=this.previousDate.bind(this);
    //where we would bind functions */
  }


componentDidMount(){
       this.getActivities();
      }

//set all objects keys to array
//the value of objects to array inside a state
getActivities() {
 const url = "https://date-night-alive.firebaseio.com/.json?print=pretty"
  axios.get(url)
  .then((res) => {
       //console.log(res.data)
       const info = res.data;
       let activities =[];
       if (info) {
        activities = Object.keys(info).map((id) => {
            const activity = info[id];
            return {
            activity,
            key: id
           }
        });

       }
         this.setState({activities});
         let dates =  _.chunk(activities, 5)
         console.log(dates)
         this.setState({dates});
    })
  .catch((error) => {
    console.log(error);
  })
}


postActivities(){
     let newActivity ={
      title: this.state.value,
      time: this.state.time,
      location: this.state.location,
     }
     const url = "https://date-night-alive.firebaseio.com/.json?print=pretty"
     axios.post(url, {
      Activities: newActivity
    })
    .then(() =>{
      this.getActivities();
      this.setState({value: '' })
      this.setState({location: '' })
      this.setState({time: '' })

    })
    .catch((error) => {
      console.log(error);
    })
  }


handleEditClick(key){
  this.setState({
    isPressed: true,
    editkey: key,
  });
  console.log(key);
}

 nextDate(){
  let currentDate = this.state.counter;
  this.setState({counter: currentDate +1});
  console.log(this.state.counter);
 }

previousDate(){
  let currentDate = this.state.counter;
  this.setState({counter: currentDate - 1});
  console.log(this.state.counter);
}

updateActivities(editkey){
  let editActivity ={
      title: this.state.editvalue,
      time: this.state.editTimeValue,
      location: this.state.editLocationValue,
     }
axios.patch(`https://date-night-alive.firebaseio.com/${editkey}.json?print=pretty`, {
    Activities: editActivity
    })
   .then(() =>{
      console.log(editkey);
      this.setState({editvalue: '' });
      this.setState({isPressed: false});
      this.setState({editkey: '' });
      this.getActivities();
     })
    .catch((err) => { console.error(err); });
  }



deleteActivity(key){
  console.log(key);
let precaution = confirm("Are you sure your plans have been cancelled? ")
  //each data record has its own unique end point
  //access the keys for each record
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

///all the individual on change event for first form
 handleTitleChange(event){this.setState({value: event.target.value})}
 handleTimeChange(event){this.setState({time: event.target.value})}
 handleLocationChange(event){this.setState({location: event.target.value})}

//On change events for Edit Values
handleChangeAgain(event){this.setState({editvalue: event.target.value})}
handleEditTimeChange(event){this.setState({editTimeValue: event.target.value})}
handleEditLocationChange(event){this.setState({editLocationValue: event.target.value})}


handleSubmit(event){
  event.preventDefault();
  this.postActivities();
}

render() {
     const isPressed = this.state.isPressed;

//conditional rendering
  if (isPressed) {
    return(
          <div className="App">
          <nav className="navbar navbar-inverse fixed-top ">
              <div className="container-fluid">
                  <div className="bg-primary topheader">
                      <h1>Nite Out</h1>
                  </div>
              </div>
          </nav>
          <div className="container">
              <EditInput
                   handleEditTimeChange={this.handleEditTimeChange}
                   handleEditLocationChange={this.handleEditLocationChange}
                    writeEdits={this.handleChangeAgain}
                    editvalue={this.state.editvalue}
                    editTimeValue={this.state.editTimeValue}
                    editLocationValue={this.state.editLocationValue}
                    updater={this.updateActivities}
                    activities={this.state.activities}
                    editkey={this.state.editkey}
               />
         </div>
           <EditActivityFeed
                   activities={this.state.activities}
                   deleteActivity={this.deleteActivity}
                   newEditField={this.handleEditClick}
              />
      </div>
    );
  }
   return(
     <div className="App">
          <nav className=" fixed-top topheader">
              <div className="container-fluid">
                  <div className="">

                  </div>
              </div>
          </nav>
          <div className="container">

            <Input
                      Title={this.handleTitleChange}
                      Time={this.handleTimeChange}
                      Locale={this.handleLocationChange}
                      postActivityDB={this.handleSubmit}
                      inputTitle={this.state.value}
                      inputTime={this.state.time}
                      inputLocale={this.state.location}
                      changeTimeSelector={this.changeTimeSelector}
              />
             <ActivityFeed
                   counter={this.state.counter}
                   activities={this.state.activities}
                   deleteActivity={this.deleteActivity}
                   newEditField={this.handleEditClick}
                   onNext={this.nextDate}
                   onPrevious={this.previousDate}
                  dates={this.state.dates}
              />
         </div>
      </div>
    );
  }
}

export default App;

