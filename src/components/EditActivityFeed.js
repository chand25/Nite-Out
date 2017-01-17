import React, { Component } from 'react';
import _ from 'lodash';


class EditActivityFeed extends Component {

render() {
let activities = this.props.activities
let deleter = this.props.deleteActivity
let editer =this.props.newEditField

let activityList = activities.map(function(activity){
  return (
    <li key={activity.key}>
          <h3>{activity.activity.Activities.title}</h3>
           <i className="fa fa-trash pull-right" onClick={ () => {deleter(activity.key)}}></i>
           <i className="fa fa-pencil pull-right" onClick={ () => {editer(activity.key)}}></i>
          <h4>{activity.activity.Activities.time}</h4>
          <h4>{activity.activity.Activities.location}</h4>
      </li>
    )
})


  return (
    <div className="panel-group">
       <div className="panel panel-success">
          <div id="listTitle" className="bg-primary text-white">Date It Changer</div>
             <div className="panel-body">
                  <ul className="emessage-board">
                     {activityList}
                  </ul>
             </div>
        </div>
    </div>
    );
  }
}
export default EditActivityFeed;
