import React, { Component } from 'react'
import { connect } from 'react-redux';

class CurrentProfiles extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'RENDER_PROFILES' })
}
  removeProfile = (id) => {
    console.log('in remove profile');
    this.props.dispatch({ type: 'DELETE_PROFILE', payload: id})
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
      console.log(this.props.reduxState);
      
    return (

      ///Map all profiles with cards
      <div> 
        <h1>Profiles</h1>
        <div >
          {this.props.reduxState.currentProfilesReducer.map((profile) => {
              return( 
                <ul id="card2" key={profile.index}>
                  <li ><img id="profileImg" alt={profile.id} src={profile.student_pic}/></li>
                  <li id="profileName">{profile.name}</li>
                  <li id="profileNote">{profile.note}</li>
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