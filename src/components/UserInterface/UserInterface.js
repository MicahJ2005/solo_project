import React, { Component } from 'react'
import { connect } from 'react-redux';

class UserInterface extends Component {

  completeTask = (tasktoComplete) => {
    console.log('in completed Task with id', tasktoComplete.id);
    console.log('in completed Task with id', tasktoComplete.student_id);
    /// delete from task table
    this.props.dispatch({ type: 'ADD_COMPLETED_TASK', payload: tasktoComplete})
    // this.props.dispatch({ type: 'DELETE_COMPLETED_TASK', payload: tasktoComplete})
    /// add to completed task table
    
    /// new First Then UI images
    
  }

  

  render () {
    return (
      <div>
        <div id="uiImage1bg" >
        <h1 id="firstText">First</h1>
        <img onClick={() => this.completeTask(this.props.reduxState.setNewTaskListReducer[0])} id="uiImage1" src={this.props.reduxState.setNewTaskListReducer[0].image} alt="img1"/>
        </div>

        <div id="uiImage2bg" >
        <h1 id="thenText">Then</h1>
        <img id="uiImage2" src={this.props.reduxState.setNewTaskListReducer[1].image} alt="img2"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (UserInterface);
