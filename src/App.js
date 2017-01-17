import React, { Component } from 'react';
import axios from 'axios';
import ActivityFeed from './components/ActivityFeed';
import EditActivityFeed from './components/EditActivityFeed';
import Input from './components/Input'
import EditInput from './components/EditInput'
import  _ from 'lodash';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      activities: [],
      value: '',
      isPressed: false,
      editkey: '',
      location: '',
      time: '',
      editvalue: '',
      editTimeValue: '',
      editLocationValue: '',
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
            //console.log(activity)
            return {
            activity,
            key: id
           }
        });
       }
         this.setState({activities});
    })
  .catch((error) => {
    console.log(error);
  })
}


postActivities(){
     let newActivity ={
      title: this.state.value,
      time: this.state.timevalue,
      location: this.state.locationvalue,
     }
     const url = "https://date-night-alive.firebaseio.com/.json?print=pretty"
     axios.post(url, {
      Activities: newActivity
    })
    .then(() =>{
      this.getActivities();
      this.setState({value: '' })
      this.setState({locationvalue: '' })
      this.setState({timevalue: '' })

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
  //each data record has its own unique end point
  //access the keys for each record
axios.delete(`https://date-night-alive.firebaseio.com/${key}.json?print=pretty`)
.then(() => {
    this.getActivities();
    console.log(key);
   })
   .catch((error) => {console.log(error)
 })
}


///all the individual on change event for first form
 handleTitleChange(event){this.setState({value: event.target.value})}
 handleTimeChange(event){this.setState({timevalue: event.target.value})}
 handleLocationChange(event){this.setState({locationvalue: event.target.value})}

//Edit Values
handleChangeAgain(event){this.setState({editvalue: event.target.value})}
handleEditTimeChange(event){this.setState({editTimeValue: event.target.value})}
handleEditLocationChange(event){this.setState({editLocationValue: event.target.value})}


handleSubmit(event){
  event.preventDefault();
  this.postActivities();
}

render() {
     const isPressed = this.state.isPressed;

  if (isPressed) {
    return(
          <div className="App">
          <nav className="navbar navbar-inverse fixed-top ">
              <div className="container-fluid">
                  <div className="bg-primary">
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
          <nav className="navbar navbar-inverse fixed-top ">
              <div className="container-fluid">
                  <div className="bg-primary">
                      <h1>Nite Out</h1>
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
                      inputTime={this.state.timevalue}
                      inputLocale={this.state.locationvalue}
              />
             <ActivityFeed
                   activities={this.state.activities}
                   deleteActivity={this.deleteActivity}
                   newEditField={this.handleEditClick}
              />
         </div>
      </div>
    );
  }
}

export default App;

