import React, { Component } from 'react';
import _ from 'lodash';

navbar navbar-inverse fixed-top
container-fluid
bg-primary
<div id="listTitle" className="text-white">Date It Changer</div>

font-family: 'Luckiest Guy', cursive;
<h1>Nite Out</h1>
class DateFeed extends Component {

navbar navbar-inverse

let dates = this.props.dates
let currentDate =[];

for (let date of dates) {
 if (this.props.activities[date]){
console.log(this.props.activities[date])
   currentDate.push(this.props.activities[date])
 }
}
console.log(currentDate)



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


render() {
let dates = this.props.dates;
let deleter = this.props.deleteActivity;
let editer =this.props.newEditField;

for (date of dates) {
  return dates[0].activity.activity.Activities.title
}


  return (
        <a href="#" key={activity.key} className="list-group-item list-group-item-info">
              <h3>{activity.activity.Activities.title}</h3>
              <i className="fa fa-trash fa-2x pull-left topR" onClick={ () => {deleter(activity.key)}}></i>
              <i className="fa fa-pencil-square-o fa-2x pull-left topL" onClick={ () => {editer(activity.key)}}></i>
              <h4>{activity.activity.Activities.time}</h4>
              <h4>{activity.activity.Activities.location}</h4>
          </a>
    )
})


  return (
    <div className="panel-group">
       <div className="panel panel-default">
          <div id="listTitle" className="bg-primary text-white">Activities Manager</div>
             <div className="panel-body">
                  <div className="list-group">
                     {activityList}
                  </div>
             </div>
        </div>
         <button onClick={this.props.onPrevious}>Previous</button>
         <button onClick={this.props.onNext}>Next</button>
    </div>
    );
  }
}
export default ActivityFeed;
