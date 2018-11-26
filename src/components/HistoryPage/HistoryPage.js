import React, { Component } from 'react'
import { connect } from 'react-redux';

class HistoryPage extends Component {

  returnToProfile = () => {
    this.props.history.push('/IndividualProfile')
  }

  render () {
      
    return (
      <div>
        <section>
          <button id="returnToProfileButton" onClick={this.returnToProfile}>Return to Profile</button>
        </section>

        <section id="historyTable">
        {this.props.reduxState.selectProfileReducer.map((profile) => {
          return(
            <h1>{profile.name} History</h1>
          )
          
        })}
      
            <table >
              
              <thead id="tableHead"> 
                <tr>
                  <td>Task Completed</td>
                  <td>Date Completed</td>
                  <td>Task Notes</td>
                </tr>
              </thead>
              
              {this.props.reduxState.selectHistoryReducer.map( history => {
                return(
              <tbody key={history.id} id="tableBody">
                <tr>
                  <td>{history.task_name}</td>
                  <td>{history.task_completed}</td>
                  <td>{history.note}</td>
                </tr>
              </tbody>
                )
        })}
        </table>
          </section>
        </div>
      
      
    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (HistoryPage);
