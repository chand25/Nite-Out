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
       console.log(activity)
       return {
        dates: activity,
        key: id
       }
    })
  }
  //console.log(activitiesArr)
   this.setState({
    dates: activitiesArr
   })

  })
   .catch((error) => {
    console.log(error);
  })
}

postTweeds(){
  const url = "https://date-night-alive.firebaseio.com/.json?print=pretty"
  axios.post(url,{


  })
}





  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
           <input/>
        </p>
      </div>
    );
  }
}

export default App;
