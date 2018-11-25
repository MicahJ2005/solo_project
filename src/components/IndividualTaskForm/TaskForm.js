import React, { Component } from 'react'
import { connect } from 'react-redux';


const newTask = {
    task_name: '',
    image: '',
    student_id: '',

}

class TaskForm extends Component {
    state = newTask

    // handling the change of each event
    handleChange = event => {
        this.setState({
                [event.target.name]: event.target.value,
                student_id: JSON.stringify(this.props.individualId)
        });
}
    ///addNewProject dispatched our new state/project to our root saga on index.js
    submitForm = event => {
        console.log('newTask', this.state);
        event.preventDefault();
        
        this.props.dispatch({ type: 'ADD_NEW_TASK', payload: this.state })
            console.log('this.state', this.state);
            
        this.setState(newTask);
        
    }


  render () {
      
    
    return (
      <div id="taskForm">
        <br/>
        <h3>Add a New Task</h3>
        <form onSubmit={this.submitForm}>  
            <input name="task_name" type="text" placeholder="Add Task Name" value={this.state.task_name} onChange={this.handleChange}/>
            <input name="image" type="text" placeholder="Add Task Image" value={this.state.image} onChange={this.handleChange}/>
            <input id="selectTaskButton" type="submit" value="submit"></input>
        </form>

    </div>


    )
  }
}
const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (TaskForm)
