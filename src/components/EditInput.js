import React, { Component } from 'react';




class EditInput extends Component {



render(){


  return(
                  <div className="panel-body">
                         <input className="form-control mr-sm-2" size="35" type="text" value={this.props.editvalue} onChange={this.props.writeEdits}/>
                          <input name="daterange" className="form-control mr-sm-2" size="15" type="text" value={this.props.editTimeValue} placeholder='Time' onChange={this.props.handleEditTimeChange}/>
                          <input className="form-control mr-sm-2" size="35" type="text" value={this.props.editLocationValue} onChange={this.props.handleEditLocationChange}/>
                           <button onClick={ () => {this.props.updater(this.props.editkey)}}>Save</button>
                  </div>
    );
  }
}
export default EditInput;
