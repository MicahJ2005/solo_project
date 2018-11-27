import React, { Component } from 'react'
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';

class CurrentProfiles extends Component {
  constructor() {
    super();
    this.state = {
      profile: [],
      editing: false,
      loading: true,
      showComponent: false,
      name: '',
      note: '',
      student_pic: ''
    }
  }


  componentDidMount() {
    this.props.dispatch({ type: 'RENDER_PROFILES', payload: this.props.reduxState.user.id })
}
  removeProfile = (profile) => {
    confirmAlert({
      title: 'Delete Profile?',
      message: 'Are you sure you want to DELETE this profile?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.dispatch({ type: 'DELETE_PROFILE', payload: profile})
          
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    })
  }

  selectProfile = (profile) => {
    console.log('profile', profile);

    
    this.props.dispatch({ type: 'SELECT_PROFILE', payload: profile.id})
    this.props.dispatch({ type: 'RENDER_INDIVIDUAL_TASKS', payload: profile.id})
    this.props.dispatch({ type: 'RENDER_INDIVIDUAL_HISTORY', payload: profile.id})
    this.props.dispatch({ type: 'GET_SELECTED_TASKLIST', payload: profile.id})
    this.props.history.push('/IndividualProfile')
  }


  onClickComponent = () => {
    this.setState({ showComponent: true });
  }

  handleName = (event) => {
    event.preventDefault();
    this.setState({
      name: event.target.value
    });
  }

  handleNote = (event) => {
    event.preventDefault();
    this.setState({
      note: event.target.value
    });
  }

  handleImage = (event) => {
    event.preventDefault();
    this.setState({
      student_pic: event.target.value
    });
  }

  // handleUpdating - setting edit to true
   handleUpdating = (event) => {
     event.preventDefault();
     this.setState({ editing: true })
  }

  handleEdit = (id) => {
    axios.put(`/editProfile/${id}`, {
      name: this.state.name,
      note: this.state.note,
      student_pic: this.state.student_pic
    })
      .then(response => {
        this.setState({ profile: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render () {
      return (

      ///Map all profiles with cards
      <div> 
        <h1>Profiles</h1>
        <div >
          {this.props.reduxState.currentProfilesReducer.map((profile) => {
              return( 
                <ul key={profile.id} id="currentProfiles" onChange={() => this.handleUpdating}>
                  <li ><img id="profileImg" alt={profile.id} src={profile.student_pic}/></li>
                  <li id="profileName">{profile.name}</li>
                  <li id="allProfilesNote"><em>{profile.note}</em></li>
                  <li><button id="editButton" onClick={this.onClickComponent}>Edit</button></li>
                  <li><button id="selectButton" onClick={() => {this.selectProfile(profile)}}>Select</button></li>
                  <li><button id="deleteButton" onClick={() => {this.removeProfile(profile)}}>Remove</button></li>
                  {this.state.showComponent ? <Form handleEdit={() => this.handleEdit(profile.id)} /> : null}
                </ul>
              )
            })}
          </div> 
      </div>
    )
  }
}

const Form = (props) => {
  return (
      <form onSubmit={() => props.handleEdit(props.id)}>
        <label>
          Name: <input type="text" name="name" value={props.name} onChange={()=>this.handleChange} />
        </label>
        <label>
          Note: <input type="text" name="note" value={props.note} onChange={()=>this.handleChange} />
        </label>
        <label>
          Image: <input type="text" name="student_pic" value={props.student_pic} onChange={()=>this.handleChange} />
        </label>
        <input type="submit" value="Update" />
      </form>
  );
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (CurrentProfiles);