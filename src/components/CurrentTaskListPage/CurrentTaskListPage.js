import React, { Component } from 'react'
import { connect } from 'react-redux';

class CurrentTaskListPage extends Component {

    removeTask = (myTasks) => {
        console.log('in remove task', myTasks);
        this.props.dispatch({ type: 'DELETE_TASK', payload: myTasks})
        // this.props.dispatch({ type: 'GET_SELECTED_TASKLIST', payload: myTasks })
      }

  render () {
      
    return (
    <div>
      <div> 
        <h1>Current Task List</h1>
        <h6 id="CurrentTasks">(To remove an image, click REMOVE)</h6>
        <h6 id="CurrentTasks">(When you are ready to start your schedule, click START SCHEDULE)</h6>
            {this.props.reduxState.setNewTaskListReducer.map( myTasks => {
                return(
                    <ul key={myTasks.index} id="currentTaskListImage">
                        <img  id="currentTaskListImage" alt="task" src={myTasks.image}/>
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