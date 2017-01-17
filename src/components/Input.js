import React, { Component } from 'react';
//import TimeSelect from './TimeSelect'


class Input extends Component {

render(){


  return(
  <div className="panel-group">
          <div className="panel panel-danger">
                 <div className="panel-body">
                      <form ref="form" id="msg-form" className="form-inline" onSubmit={this.props.postActivityDB}>
                          <input className="form-control mr-sm-2" size="35" type="text" value={this.props.inputTitle} placeholder='Type of Activity: Title' onChange={this.props.Title}/>
                          <select size="1" required className="form-control" data-style="btn-primary" title="Choose a Time..." value={this.props.inputTime} onChange={this.props.Time}>
                                <option>Choose a Time....</option>
                              <optgroup label="Wee Hours of the Morning">
                                    <option>0:00</option>
                                    <option>0:15</option>
                                    <option>0:30</option>
                                    <option>0:45</option>
                                     <option>1:00</option>
                                    <option>1:15</option>
                                    <option>1:30</option>
                                    <option>1:45</option>
                                     <option>2:00</option>
                                    <option>2:15</option>
                                    <option>2:30</option>
                                    <option>2:45</option>
                                    <option>3:00</option>
                                    <option>3:15</option>
                                    <option>3:30</option>
                                    <option>3:45</option>
                                    <option>4:00</option>
                                    <option>4:15</option>
                                    <option>4:30</option>
                                    <option>4:45</option>
                               </optgroup>
                               <optgroup label="Early Morning">
                                    <option>5:00</option>
                                    <option>5:15</option>
                                    <option>5:30</option>
                                    <option>5:45</option>
                                    <option>6:00</option>
                                    <option>6:15</option>
                                    <option>6:30</option>
                                    <option>6:45</option>
                                    <option>7:00</option>
                                    <option>7:15</option>
                                    <option>7:30</option>
                                    <option>7:45</option>
                              </optgroup>
                              <optgroup label="Morning">
                                    <option>8:00</option>
                                    <option>8:15</option>
                                    <option>8:30</option>
                                    <option>8:45</option>
                                    <option>9:00</option>
                                    <option>9:15</option>
                                    <option>9:30</option>
                                    <option>9:45</option>
                                    <option>10:00</option>
                                    <option>10:15</option>
                                    <option>10:30</option>
                                    <option>10:45</option>
                                    <option>11:00</option>
                                    <option>11:15</option>
                                    <option>11:30</option>
                                    <option>11:45</option>
                              </optgroup>
                              <optgroup label="Afternoon">
                                    <option>12:00</option>
                                    <option>12:15</option>
                                    <option>12:30</option>
                                    <option>12:45</option>
                                    <option>13:00</option>
                                    <option>13:15</option>
                                    <option>13:30</option>
                                    <option>13:45</option>
                                    <option>14:00</option>
                                    <option>14:15</option>
                                    <option>14:30</option>
                                    <option>14:45</option>
                                    <option>15:00</option>
                                    <option>15:15</option>
                                    <option>15:30</option>
                                    <option>15:45</option>
                              </optgroup>
                              <optgroup label="Early Evening">
                                    <option>16:00</option>
                                    <option>16:15</option>
                                    <option>16:30</option>
                                    <option>16:45</option>
                                    <option>17:00</option>
                                    <option>17:15</option>
                                    <option>17:30</option>
                                    <option>17:45</option>
                                    <option>18:00</option>
                                    <option>18:15</option>
                                    <option>18:30</option>
                                    <option>18:45</option>
                              </optgroup>
                              <optgroup label="Evening">
                                    <option>19:00</option>
                                    <option>19:15</option>
                                    <option>19:30</option>
                                    <option>19:45</option>
                                    <option>20:00</option>
                                    <option>20:15</option>
                                    <option>20:30</option>
                                    <option>20:45</option>
                                    <option>21:00</option>
                                    <option>21:15</option>
                                    <option>21:30</option>
                              </optgroup>
                               <optgroup label="Late Night Storm">
                                    <option>21:45</option>
                                    <option>22:00</option>
                                    <option>22:15</option>
                                    <option>22:30</option>
                                    <option>22:45</option>
                                    <option>23:00</option>
                                    <option>23:15</option>
                                    <option>23:30</option>
                                    <option>23:45</option>
                              </optgroup>

                          </select>
                          <input className="form-control mr-sm-2" size="35" type="text" value={this.props.inputLocale} placeholder='Location: Full Address' onChange={this.props.Locale}/>
                          <input type="submit" value="Share" />
                      </form>
                  </div>
          </div>
  </div>
    );
  }
}
export default Input;
