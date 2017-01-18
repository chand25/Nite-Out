import React, { Component } from 'react';
import _ from 'lodash';




class ActivityFeed extends Component {



render() {
let activities = this.props.activities;
let deleter = this.props.deleteActivity;
let editer =this.props.newEditField;
let dates = this.props.dates;




let activityList = activities.map(function(activity){
  return (

        <a href="#" key={activity.key} className="list-group-item list-group-item-action">
            <div className="row">
                    <div className="col-2">
                        <h3>{activity.activity.Activities.title}</h3>
                     </div>
                      <div className="col-3">
                          <i className="fa fa-trash fa-2x pull-left topR" onClick={ () => {deleter(activity.key)}}></i>
                          <i className="fa fa-pencil-square-o fa-2x pull-left topL" onClick={ () => {editer(activity.key)}}></i>
                      </div>
                      <div className="col-4">
                            <h4>{activity.activity.Activities.time}</h4>
                            <h4>{activity.activity.Activities.location}</h4>
                      </div>
             </div>
          </a>

    )
})


  return (
    <div className="panel-group">
       <div className="panel panel-default">
          <div id="listTitle" className="bg-primary">Activities Manager</div>
             <div className="panel-body">
                  <div className="list-group">
                     {activityList}
                  </div>
             </div>
        </div>
         <button onClick={this.props.onPrevious}>Prev</button>
         <button onClick={this.props.onNext}>Next</button>
    </div>
    );
  }
}

ActivityFeed.propTypes = {
  activities: React.PropTypes.array.isRequired,
  dates: React.PropTypes.array.isRequired,
  onPrevious: React.PropTypes.func.isRequired,
  onNext: React.PropTypes.func.isRequired,
};

export default ActivityFeed;
