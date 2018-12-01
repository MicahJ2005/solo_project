import React, { Component } from 'react'
import { connect } from 'react-redux';


const newTask = {
    task_name: '',
    image: '',
    student_id: '',

}

class TaskForm extends Component {
    state = newTask

    handleChange = event => {
        this.setState({
                [event.target.name]: event.target.value,
                student_id: JSON.stringify(this.props.individualId)
        });
}

    submitForm = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_NEW_TASK', payload: this.state })
        this.setState(newTask);
        
    }


  render () {
    return (
      <div id="taskForm">
        
        <div id="addTaskHeader">
            <h3>Add a New Task</h3>
        </div>
        <form onSubmit={this.submitForm}>  
            <input name="task_name" type="text" placeholder="Add Task Name" value={this.state.task_name} onChange={this.handleChange}/>
            <input name="image" type="text" placeholder="Add Task Image URL" value={this.state.image} onChange={this.handleChange}/>
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
