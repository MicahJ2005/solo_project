import React, { Component } from 'react'
import { connect } from 'react-redux';
import IndividualTaskForm from '../IndividualTaskForm/TaskForm';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import swal from 'sweetalert2';

const newTask = {
  id:'',
  image: '', 
  student_id: '',
  task_name: '',

}

class IndividualProfile extends Component {
  state = newTask;

  viewHistory = () => {
    this.props.history.push('/HistoryPage')
  }

  handleChange = (task) => {
    swal({
      title: `${task.task_name} Added!`,
      text: 'Have Fun!',
      imageUrl: `${task.image}`,
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Custom image',
      animation: false
    })
    this.props.dispatch({ type: 'ADD_TO_TASKLIST', payload: {
      task_name: task.task_name,
      student_id: JSON.stringify(task.student_id),
      image: task.image,

    }})
    this.props.dispatch(({ type: 'GET_SELECTED_TASKLIST', payload: task.student_id }))
  }

  TaskListPreview = () => {
    this.props.history.push('/CurrentTaskListPage')

  } 

  removeLibraryTask = (task) => {
    confirmAlert({
      title: 'Delete Task from Library?',
      message: 'Are you sure you want to DELETE this Task from your Library?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.dispatch({ type: 'DELETE_LIBRARY_TASK', payload: task})
          
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    })
  }

    
  render () {
    return (
      <div id="individualProfileCard">
        
        {this.props.reduxState.selectProfileReducer.map((individual) => {
          return(
            <ul >
              <div id="profileHead" key={individual.id} >
                <li><h1>{individual.name} Profile</h1></li>
              
                <li><img  id="IndividualProfileImg" alt= "baby" src={individual.student_pic}/></li>
                <li id="profileNote"><em>{individual.note}</em></li>
              </div>
              {/* <button>Add To Library</button> */}
            <br></br>
              <IndividualTaskForm individualId={individual.id}/>
            
              <section> 
                <button id="historyButton" onClick={this.viewHistory}>View History</button>
              </section>
            
              <section id="taskLibrary">
                <div id="libraryHeader">
                  <h2>{individual.name}'s Task Library</h2>
                  <h6>(click on an image to add it to your task list task)</h6>
                </div>
                  {this.props.reduxState.setIndividualTasksReducer.map( task => {
                    return(
                    <div key={task.index} id="taskImgBox">
                        <li><img onClick={() => this.handleChange(task)} value={task.id} id="taskImg" name="task"  alt= "task" src={task.image}/></li>
                        <li>{task.task_name}</li>
                        <button id="taskLibraryDeleteButton" onClick={() => {this.removeLibraryTask(task)}}>Remove</button>
                    </div>
                  )
                })}
                <button id="previewScheduleButton" onClick={this.TaskListPreview}>Preview Schedule</button>
              </section>
            </ul>
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});


export default connect(mapStateToProps) (IndividualProfile)
