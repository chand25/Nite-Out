import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      activities: [],
      dates: [],
      value: '',
    };
      this.getAll = this.getAll.bind(this);
      this.postActivties = this.postActivties.bind(this);
      this.createActivity =this.createActivity.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

componentDidMount(){
   this.getAll();
 }

getAll() {
  axios.get("https://date-night-alive.firebaseio.com/.json?print=pretty")
  .then((res) => {
    let activities = res.data
    //console.log(activities)
    let activitiesArr =[];
    if (activities) {
    activitiesArr = Object.keys(activities).map((id)=>{
       const activity = activities[id]
       this.setState({activities: activity})
       //console.log(activity)
       return {
        dates: activity,
        key: id
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
  const url = "https://date-night-alive.firebaseio.com/.json?print=pretty"
  axios.post(url,{
   activities: this.state.activities
  })
.then(() => {
  this.getAll();
  this.setState({value: ''})
})
}

createActivity(event) {
    event.preventDefault();

    const activity = {
      title: this.title.value,
    }
    this.addActivityForm.reset();
    this.postActivties();
  }

handleChange(event){
   this.setState({value: event.target.value})
 }

  render() {
    return (
      <div className="App">
              <input value={this.title} type="text" placeholder="Title" />
              <button type="submit" onClick={(event) => this.createActivity(event)}>Add Activity</button>
      </div>
    )
  }
}

export default App;
