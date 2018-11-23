import React, { Component } from 'react'
import { connect } from 'react-redux';
import IndividualTaskForm from '../IndividualTaskForm/TaskForm';



class IndividualProfile extends Component {
  state = {
    newTasks: {
      task: '',
    },
    taskList: [],
  };

  

  viewHistory = () => {
    this.props.history.push('/HistoryPage')
  }

  handleChange = (event) => {
    console.log('in select image id', this.state.newTasks);
    this.setState({
      newTasks: {
        ...this.state,
        [event.target.name]: event.target.value,
      }
    })
    console.log('state', this.state); 
  }

  startTaskList = (event) => {
    event.preventDefault();
    console.log('all new tasks', this.state.newTasks);
    this.setState({
      newTasks: {
        task: '',
      },
      taskList: [ ...this.state.taskList, this.state.newTasks],
    })

  } 
    
  render () {
      
    return (
      <div id="card">
        
        {this.props.reduxState.selectProfileReducer.map((individual) => {
          return(
          
            <ul key={individual.id}>
            
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
              <pre>{JSON.stringify(this.props.reduxState.setIndividualTasksReducer)}</pre>
              {this.props.reduxState.setIndividualTasksReducer.map( task => {
                return(
                  <ul key={task.id}>
                    <li><img onClick={this.handleChange} value={task.id} name="task" id="profileImg" alt= "task" src={task.image}/></li>
                  </ul>
                )
              })}
              

              <button onClick={this.startTaskList}>Start Your Schedule</button>
              
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
