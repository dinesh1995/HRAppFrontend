import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  render(){
    return(
      <>
        <div id="top-message">
          <div className="alert alert-warning announcement">
            <b>Announcement:</b> Requesting all employees to submit Time-off requests beforehand!
          </div>
        </div>
        <div className="row">
          <div className="column left">
            <img className="timeImage" src="https://omc5825sv9k3qyi3q2ord7gk-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Time-off-request-form-background.jpg" alt="holidayList" />
          </div>
          <div className="column right">
            <img className="holidayImg" src="https://i.pinimg.com/originals/9b/b7/ec/9bb7ecc80aaaf3ab37341ad80825eee2.png" alt="holidayList" />
          </div>
        </div> 
      </>
    )
  }
}

export default Home;