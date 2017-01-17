import React, { Component } from 'react';




class Input extends Component {



render(){



  return(
  <div className="panel-group">
          <div className="panel panel-danger">
                 <div className="panel-body">
                      <form ref="form" id="msg-form" className="form-inline" onSubmit={this.props.postActivityDB}>
                          <input className="form-control mr-sm-2" size="35" type="text" value={this.props.inputTitle} placeholder='Type of Activity: Title' onChange={this.props.Title}/>
                          <input className="form-control mr-sm-2" size="15" type="text" ref={this.props.inputTime} placeholder='Time' onChange={this.props.Time}/>
                          <input className="form-control mr-sm-2" size="25" type="text" ref={this.props.inputLocale} placeholder='Location: Full Address' onChange={this.props.Locale}/>
                          <input type="submit" value="Share" />
                      </form>
                  </div>
          </div>
  </div>
    );
  }
}
export default Input;
