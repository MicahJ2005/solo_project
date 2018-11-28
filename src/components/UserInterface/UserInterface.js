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
    console.log('in handleClickOpen');
    this.setState({ note: ''});
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false});
  };


  completeTask = (tasktoComplete) => {  
    console.log('tasktoComplete', tasktoComplete);
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
    console.log('new state of note', this.state.note);
    
}
  

  render () {

    
    return (
      <div>
        <div id="uiImage1bg" >
            <h1 id="firstText">First</h1>
            <img onClick={this.handleClickOpen} id="uiImage1" src={this.props.reduxState.setNewTaskListReducer[0].image} alt="img1"/>
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
            {/* <img onClick={() => this.completeTask(this.props.reduxState.setNewTaskListReducer[0])} id="uiImage1" src={this.props.reduxState.setNewTaskListReducer[0].image} alt="img1"/> */}
                
        
        
          
          

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