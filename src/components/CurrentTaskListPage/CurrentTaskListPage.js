import React, { Component } from 'react'
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

class CurrentTaskListPage extends Component {

    removeTask = (myTasks) => {
        confirmAlert({
            title: 'Delete Task?',
            message: 'Are you sure you want to DELETE this Task?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.props.dispatch({ type: 'DELETE_TASK', payload: myTasks})
                
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          })
        
      }

    userInterface = () => {
        this.props.history.push('/UserInterface')
    }

  render () {
      
    return (
    <div id="individualProfileCard">
      <div> 
        <h1>Current Task List</h1>
        <h6 id="CurrentTasks">(To remove an image, click REMOVE)</h6>
        <h6 id="CurrentTasks">(When you are ready to start your schedule, click START SCHEDULE)</h6>

        <button id="selectButton" onClick={this.userInterface}>Start Schedule</button>
            {this.props.reduxState.setNewTaskListReducer.map( myTasks => {
                return(
                    <ul key={myTasks.id} id="currentTaskListImage">
                        <img  id="currentTaskListImage" alt="task" src={myTasks.image}/>
                        <li>{myTasks.task_name}</li>
                        <button id="deleteButton" onClick={() => {this.removeTask(myTasks)}}>Remove</button>
                    </ul>
                    
                    

                )
            })}

      </div>
        <div>

            
        </div>

    </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (CurrentTaskListPage);