import React, { Component } from 'react'
import { connect } from 'react-redux';
import moment from 'moment';

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
            <h1 key={profile.id}>{profile.name} History</h1>
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
              <tbody key={history.index} id="tableBody">
                <tr>
                  <td>{history.task_name}</td>
                  <td>{moment(history.date_completed).format('LLLL')}</td>
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
