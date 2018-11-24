import React, { Component } from 'react'
import { connect } from 'react-redux';
import IndividualTaskForm from '../IndividualTaskForm/TaskForm';

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
    console.log('in select TASK on individual profile', task);
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
    
  render () {
      
    return (
      <div id="card">
        
        {this.props.reduxState.selectProfileReducer.map((individual) => {
          return(
          
            <ul key={individual.index}>
            
              <li><h1>{individual.name} Profile</h1></li>
              <li><img  id="profileImg" alt= "baby" src={individual.student_pic}/></li>
              <li>{individual.note}</li>
              
              {/* <button>Add To Library</button> */}
            
              <IndividualTaskForm individualId={individual.id}/>
            
            <section> 
              <button onClick={this.viewHistory}>View History</button>
            </section>

            <section>
              <h2>{individual.name}'s Task Library</h2>
              <h6>(click on an image to add it to your task list task)</h6>
              {this.props.reduxState.setIndividualTasksReducer.map( task => {
                return(
                  <ul key={task.id}>
                    <li><img onClick={() => this.handleChange(task)} value={task.id} name="task" id="profileImg" alt= "task" src={task.image}/></li>
                  </ul>
                )
              })}
              

              <button onClick={this.TaskListPreview}>Preview Selected Schedule</button>
              
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
