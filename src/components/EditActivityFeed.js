import React, { Component } from 'react';
import _ from 'lodash';


class EditActivityFeed extends Component {

render() {
let activities = this.props.activities


let activityList = activities.map(function(activity){
  return (
    <li key={activity.key} className="list-group-item list-group-item-action">
      <div className="row">
            <div className="col-3">
                     <h3>{activity.activity.Activities.title}</h3>
             </div>
             <div className="col-2">
                     <h4>{activity.activity.Activities.time}</h4>
                   </div>
              <div className="col-3">
                      <h4>{activity.activity.Activities.location}</h4>
                </div>
            </div>
      </li>
    )
})


  return (
    <div className="panel-group">
       <div className="panel panel-success">
          <div id="listTitle" className="bg-primary text-white">Date It Changer</div>
             <div className="panel-body">
                  <ul className="emessage-board list-group">
                     {activityList}
                  </ul>
             </div>
        </div>
    </div>
    );
  }
}

EditActivityFeed.propTypes = {
  activities: React.PropTypes.array.isRequired,

};
export default EditActivityFeed;
