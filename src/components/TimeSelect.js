import React, { Component } from 'react';
import moment from 'moment';

class TimeSelect extends Component {


changeTimeSelector(event){
  this.setState({time: event.target.value})
console.log(event.target.value)
}


render(){


  return(
    <div id="timebox">
          <select type="text" onSelect ={ (e) => {this.changeTimeSelector(e)}} onChange={this.props.Time}>
                            <option>Time</option>
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
                            <option>21:45</option>
                            <option>22:00</option>
                            <option>22:15</option>
                            <option>22:30</option>
                            <option>22:45</option>
                            <option>23:00</option>
                            <option>23:15</option>
                            <option>23:30</option>
                            <option>23:45</option>
          </select>
       </div>
   )
 }
}
export default TimeSelect;
