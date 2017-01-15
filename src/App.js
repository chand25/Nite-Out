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
    let activities = res.data
    this.setState({date: activities})
    console.log(activities)
    let activitiesArr =[];


       }
    })
  }
     console.log(activitiesArr)
     this.setState({
      dates: activitiesArr
   })
  })
   .catch((error) => {
    console.log(error);
  })
}

postActivties(){
const activity = {
      title: this.title.value,
      time: this.time.value,
      location: this.location.value
  }
  const url = "https://date-night-alive.firebaseio.com/.json?print=pretty"
  axios.post(url,{
   title: this.state.title
   address: this.state.location
   time: this.state.time

  })
.then(() => {
  this.getAll();
  this.setState({value: ''})
})
}

handleChange(event){
   this.setState({
    value: event.target.value
  })
 }


handleSubmit(event){
  event.preventDefault();

  const activity = {
      title: this.title.value,
      time: this.time.value,
      location: this.location.value
  }
  this.postActivities();
}

  render() {
    return (
      <div className="App">
              <form ref={(input) => this.addMessageForm = input} className="message-edit" onClick={(event) => this.createActivity(event)}>
                    <input ref={(input) => this.title = input} type="text" placeholder="Title" />
                    <input ref={(input) => this.time = input} type="text" placeholder="Time" />
                    <textarea ref={(input) => this.location = input} placeholder="Location" ></textarea>
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
