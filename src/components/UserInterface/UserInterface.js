import React, { Component } from 'react'
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';


const newNote = {
  id: '',
  note: '',
  
}

class UserInterface extends Component {

  state = newNote

  completeTask = (tasktoComplete) => {  
    confirmAlert({
      title: 'Complete Task?',
      message: 'Are you sure you are done?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.dispatch({ type: 'ADD_COMPLETED_TASK', payload: tasktoComplete})
          
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