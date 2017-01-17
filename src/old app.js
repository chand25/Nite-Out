import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ActivityFeed from './ActivityFeed';

class App extends Component {
  constructor(){
    super();
    this.state = {
      activities: [],
      dates: [],
      value: '',
      date: [],
      currentDate: {},
      location: '',
      time: '',
      title: '',
    };
      this.getAll = this.getAll.bind(this);
      this.postActivties = this.postActivties.bind(this);
  }

componentDidMount(){
   this.getAll();
 }

getAll() {
  axios.get("https://date-night-alive.firebaseio.com/.json?print=pretty")
  .then((res) => {
    this.setState({date: res.data})
  })
   .catch((error) => {
    console.log(error);
  })
}

postActivties(titleText, locationText, time){
let newActivity ={
   title: this.state.title,
   location: this.state.location,
   time: this.state.time
}
  const url = "https://date-night-alive.firebaseio.com/.json?print=pretty"
  axios.post(url,{
   activities: newActivity
  })
.then((res) => {
  let activities = this.state.activities
  let id = res.activities.title
  activities[id] = newActivity
  this.setState({value: ''})
  this.set({activities: newActivity})
}).catch((error) => {
    console.log(error);
})
}

handleChange(event){
   this.setState({
    location: event.target.value,
    time: event.target.value,
    title: event.target.value,
  })
 }


handleSubmit(event){
  event.preventDefault();

  const activity = {
      title: this.title.value,
      time: this.time.value,
      location: this.location.value
  }
  this.handleChange(event)
  this.postActivities();
}

  render() {
    return (
      <div className="App">
              <form ref={(input) => input} className="message-edit" onSubmit={(event) => this.handleSubmit(event)}>
                    <input value={(input) => this.state.title=input} type="text" placeholder="Title" />
                    <input value={(input) => this.state.time=input} type="text" placeholder="Time" />
                    <textarea ref={(input) => this.state.location=input} placeholder="Location" ></textarea>
                    <button type="submit">+ Add Activity</button>
              </form>
              <ActivityFeed
               dates={this.state.dates}
               date={this.state.date}
               currentdate={this.state.currentDate}
              />
      </div>
    )
  }
}

export default App;
