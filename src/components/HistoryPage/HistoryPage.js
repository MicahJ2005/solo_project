import React, { Component } from 'react'
import { connect } from 'react-redux';

class HistoryPage extends Component {

  render () {
      
    return (
      <div>
        <section>
          <h1>[Child Name] History</h1>
        </section>

        <section>
          <button>Return to Profile</button>
        </section>

        <table>
          <thead>
            <tr>
              <td>Task Completed</td>
              <td>Date Completed</td>
              <td>Task Notes</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mapped Task</td>
              <td>Mapped Date</td>
              <td>Mapped Note</td>
            </tr>
          </tbody>
        </table>


      </div>
    )
  }
}

export default connect() (HistoryPage)