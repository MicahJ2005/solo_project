import React, { Component } from 'react'
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

class CurrentProfiles extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'RENDER_PROFILES' })
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
    console.log('in select profile', profile);
    this.props.dispatch({ type: 'SELECT_PROFILE', payload: profile.id})
    this.props.dispatch({ type: 'RENDER_INDIVIDUAL_TASKS', payload: profile.id})
    this.props.dispatch({ type: 'RENDER_INDIVIDUAL_HISTORY', payload: profile.id})
    this.props.dispatch({ type: 'GET_SELECTED_TASKLIST', payload: profile.id})
    this.props.history.push('/IndividualProfile')
  }


  render () {
      return (

      ///Map all profiles with cards
      <div> 
        <h1>Profiles</h1>
        <div >
          {this.props.reduxState.currentProfilesReducer.map((profile) => {
              return( 
                <ul key={profile.id} id="currentProfiles">
                  <li ><img id="profileImg" alt={profile.index} src={profile.student_pic}/></li>
                  <li id="profileName">{profile.name}</li>
                  <li id="allProfilesNote"><em>{profile.note}</em></li>
                  <li><button id="editButton">Edit</button></li>
                  <li><button id="selectButton" onClick={() => {this.selectProfile(profile)}}>Select</button></li>
                  <li><button id="deleteButton" onClick={() => {this.removeProfile(profile)}}>Remove</button></li>
                </ul>
              )
            })}
          </div> 
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (CurrentProfiles);