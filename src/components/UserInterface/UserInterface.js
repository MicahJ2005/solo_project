import React, { Component } from 'react'
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class UserInterface extends Component {
  state = {
    id: '',
    note: '',
    open: false,
  }

  handleClickOpen = () => {
    this.setState({ note: ''});
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false});
  };


  completeTask = (tasktoComplete) => {  
    this.setState({ open: false });
    confirmAlert({
      title: 'Complete Task?',
      message: 'Are you sure you are done?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.dispatch({ type: 'ADD_COMPLETED_TASK', payload: {
            taskName: tasktoComplete.task_name,
            taskId: tasktoComplete.id,
            taskUserId: tasktoComplete.student_id,
            taskImage: tasktoComplete.image,
            note: this.state.note,
          }}) 
          
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    })
  }

  handleChange = event => {
    this.setState({
            [event.target.name]: event.target.value,
    });
}
  

  render () {
    return (
      <div>
        <div id="uiImage1bg" >
          <div id="firstTextBG">
            <h1 id="firstText">First</h1>
          </div>
            {this.props.reduxState.setNewTaskListReducer[0] !== undefined ?  (
                <div><img onClick={this.handleClickOpen} id="uiImage1" src={this.props.reduxState.setNewTaskListReducer[0].image} alt="img1"/>
                <h2 id="uiTaskName1">{this.props.reduxState.setNewTaskListReducer[0].task_name}</h2></div>
              ) : (<ul><h1 id="addMoreImages1"> WOW! You did it! </h1><h4 id="addMoreImages1">Return to your profile to add more images!</h4></ul>)
            }
          <div >
              
          </div>
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              // onSubmit={() => this.completeTask(this.props.reduxState.setNewTaskListReducer[0])}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Complete Task!</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Would you like to add a note to you completed task? (you don't have to)
                </DialogContentText>
                <TextField
                  onChange={this.handleChange}
                  value={this.state.note}
                  name="note"
                  autoFocus
                  margin="dense"
                  id="note"
                  label="Task Note"
                  type="text"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={() => this.completeTask(this.props.reduxState.setNewTaskListReducer[0])}color="primary" >
                  Complete
                </Button>
              </DialogActions>
            </Dialog>
          </div>
            
        <div id="uiImage2bg" >
          <div id="thenTextBG">
            <h1 id="thenText">Then</h1>
          </div>
          {this.props.reduxState.setNewTaskListReducer[1] !== undefined ?  (
              <div><img id="uiImage2" src={this.props.reduxState.setNewTaskListReducer[1].image} alt="img2"/>
              <h2 id="uiTaskName2">{this.props.reduxState.setNewTaskListReducer[1].task_name}</h2></div>
            ) : (<h1 id="addMoreImages1"> You're Almost Done!!!</h1>)
            }
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (UserInterface);