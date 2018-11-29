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
import swal from 'sweetalert';



class CurrentProfiles extends Component {
  state = {
    name: '',
    note: '',
    student_pic: '',
    profileId: '',
    profileUserId: '',
    open: false,

  }


  componentWillMount() {
    this.props.dispatch({ type: 'RENDER_PROFILES', payload: this.props.reduxState.user.id })
  }


  removeProfile = (profile) => {
    confirmAlert({
      title: 'Delete Profile?',
      message: 'Are you sure you want to DELETE this profile?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.dispatch({ type: 'DELETE_PROFILE', payload: profile })

        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    })
  }

  selectProfile = (profile) => {
    this.props.dispatch({ type: 'SELECT_PROFILE', payload: profile.id })
    this.props.dispatch({ type: 'RENDER_INDIVIDUAL_TASKS', payload: profile.id })
    this.props.dispatch({ type: 'RENDER_INDIVIDUAL_HISTORY', payload: profile.id })
    this.props.dispatch({ type: 'GET_SELECTED_TASKLIST', payload: profile.id })
    this.props.history.push('/IndividualProfile')
  }


  handleClickOpen = (profile) => {
    console.log('in handleClickOpen profile', profile);
    this.setState({
      name: profile.name,
      note: profile.note,
      student_pic: profile.student_pic,
      profileId: profile.id,
      profileUserId: profile.user_id,
      open: true,
    })
  };

  handleClose = () => {
    this.setState({ open: false });
    // window.location.reload();
  };


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log('new state of note', this.state);

  }

  editProfile = profile => {

    this.setState({ open: false });
    this.props.dispatch({
      type: 'EDIT_PROFILE', payload: {
        name: this.state.name,
        note: this.state.note,
        student_pic: this.state.student_pic,
        profileId: this.state.profileId,
        profileUserId: this.state.profileUserId
      }
    })
    swal("You are Awesome!", "Profile Successfully Updated!", "success");
  }

  render() {
    return (

      <div>
        <h1>Profiles</h1>
        <div >
          {this.props.reduxState.currentProfilesReducer.map((profile) => {
            return (
              <ul key={profile.id} id="currentProfiles" >
                <li ><img id="profileImg" alt={profile.id} src={profile.student_pic} /></li>
                <li id="profileName">{profile.name}</li>
                <li id="allProfilesNote"><em>{profile.note}</em></li>
                <div id="currentProfileButtons">
                  <li><button id="editButton" onClick={() => { this.handleClickOpen(profile) }}>Edit</button></li>
                  <li><button id="selectButton" onClick={() => { this.selectProfile(profile) }}>Select</button></li>
                  <li><button id="deleteButton" onClick={() => { this.removeProfile(profile) }}>Remove</button></li>
                </div>
              </ul>
            )
          })}
        </div>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          // onSubmit={() => this.completeTask(this.props.reduxState.setNewTaskListReducer[0])}
          aria-labelledby="form-dialog-title"
        >
          <p>Hello</p>
          <DialogTitle id="form-dialog-title">Edit Your Profile!</DialogTitle>
          <DialogContent>
            <DialogContentText>

            </DialogContentText>
            <TextField
              onChange={this.handleChange}
              value={this.state.name}
              name="name"
              autoFocus
              margin="dense"
              id="name"
              label="Update Profile Name"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <DialogContentText>

            </DialogContentText>
            <TextField
              onChange={this.handleChange}
              value={this.state.note}
              name="note"
              autoFocus
              margin="dense"
              id="note"
              label="Update Profile Note"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <TextField
              onChange={this.handleChange}
              value={this.state.student_pic}
              name="student_pic"
              autoFocus
              margin="dense"
              id="student_pic"
              label="Update Profile Image"
              type="text"
              fullWidth
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.editProfile()} color="primary" >
              Complete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}



const mapStateToProps = reduxState => ({
  reduxState,
});


export default connect(mapStateToProps)(CurrentProfiles);