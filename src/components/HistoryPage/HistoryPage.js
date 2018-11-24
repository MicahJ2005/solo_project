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
          <button onClick={this.returnToProfile}>Return to Profile</button>
        </section>

        {this.props.reduxState.selectProfileReducer.map((profile) => {
          return(
            <h1>{profile.name} History</h1>
          )
          
        })}
        
        <pre>{JSON.stringify(this.props.reduxState.selectHistoryReducer)}</pre>
        {this.props.reduxState.selectHistoryReducer.map( history => {
          return(
            
            
            <table key={history.id}>
              
              <thead>
                <tr>
                  <td>Task Completed</td>
                  <td>Date Completed</td>
                  <td>Task Notes</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{history.task_name}</td>
                  <td>{history.task_completed}</td>
                  <td>{history.note}</td>
                </tr>
              </tbody>
          </table>

        
          )
        })}

        </div>
      
      
    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (HistoryPage);
