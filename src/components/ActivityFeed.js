import React, { Component } from 'react';
import _ from 'lodash';




class ActivityFeed extends Component {

niteOut() {
let dateTotal = 5;
let begIndex = this.props.counter * dateTotal
let endIndex = begIndex + dateTotal
}



render() {
let activities = this.props.activities;
let deleter = this.props.deleteActivity;
let editer =this.props.newEditField;


let activityList = activities.map(function(activity){
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
