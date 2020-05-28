import React from 'react'
import Calendar from 'react-calendar'

const Notifications = (props) => {
  return (
    <div className="section">
      <h5>Assignments</h5>
        <div className="card z-depth-0">
          <div className="card-content">
              <Calendar />
          </div>
        </div>

        <h5>Notifications</h5>
        <div className="card z-depth-0">
          <div className="card-content">
            <ul className="notif">
              <li>1. New Python Assignment</li>
              <li>2. Turn in Homework</li>
              <li>3. Instructor posted an update</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Notifications