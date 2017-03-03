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
      this.getDates = this.getDates.bind(this);
      this.getActivities = this.getActivities.bind(this);
      this.getAll = this.getAll.bind(this);
  }

componentDidMount(){
   this.getAll();
 }

getDates(){
  const url = "https://date-night-alive.firebaseio.com/.json?print=pretty"
  axios.get(url)
}

getActivities(dateNumber){
  const url = `https://date-night-alive.firebaseio.com/${dateNumber}/.json?print=pretty`
  axios.get(url)
}

getAll() {
  axios.all([
  this.getDates(), this.getActivities(dateNumber)
  ])
  .then(function (dates, activities){
    return {
     activities: activities.data,
     dates: dates.data
    }
  }))
 }
/*
or

getAll() {
  axios.all([
  axios.get("https://date-night-alive.firebaseio.com/.json?print=pretty")
  axios.get("https://date-night-alive.firebaseio.com/Date1/.json?print=pretty")
  ])
  .then(axios.spread(function (dates, activities){
    let what = Object.keys(dates)
    console.log(what)
  }))
 }

*/

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
