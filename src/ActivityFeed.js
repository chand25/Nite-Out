import React, { Component } from 'react';


class ActivityFeed extends Component{
render() {
   let datelist = Object.keys(this.props.date).map((date,i) => {
    return(
      <li key={i}>{date}
          <i className="fa fa-trash pull-right" onClick={ () => {this.props.deleter()}}></i>
          <i className="fa fa-pencil pull-right" onClick={ () => {this.props.newEditField()}}></i>
      </li>
      )
  })

  return (
    <div className="panel-group">
       <div className="panel panel-default">
          <div id="listTitle" className="bg-primary text-white">A Penny for Your Tweeds</div>
             <div className="panel-body">
                  <ul className="message-board">
                      {datelist}
                  </ul>
             </div>
        </div>
    </div>
    );
  }
}
export default ActivityFeed;
