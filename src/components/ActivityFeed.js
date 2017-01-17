import React, { Component } from 'react';
import _ from 'lodash';
import { Button } from 'react-bootstrap';



class ActivityFeed extends Component {

render() {
let activities = this.props.activities;
let deleter = this.props.deleteActivity;
let editer =this.props.newEditField;

let activityList = activities.map(function(activity){
  return (
        <li key={activity.key}>
              <h3>{activity.activity.Activities.title}</h3>
             <i className="fa fa-trash fa-2x" onClick={ () => {deleter(activity.key)}}></i>
              <i className="fa fa-pencil-square-o fa-2x" onClick={ () => {editer(activity.key)}}></i>
              <h4>{activity.activity.Activities.time}</h4>
              <h4>{activity.activity.Activities.location}</h4>
          </li>
    )
})

  return (
    <div className="panel-group">
       <div className="panel panel-default">
          <div id="listTitle" className="bg-primary text-white">Date It Manager</div>
             <div className="panel-body">
                  <ul className="message-board">
                     {activityList}
                  </ul>
             </div>
        </div>
         <button onClick={this.props.onPrevious}>Previous</button>
         <button onClick={this.props.onNext}>Next</button>
    </div>
    );
  }
}
export default ActivityFeed;
