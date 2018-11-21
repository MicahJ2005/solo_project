import React, { Component } from 'react'
import { connect } from 'react-redux';

class CurrentProfiles extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'RENDER_PROFILES', payload: this.state})
}
  removeProfile = (id) => {
    console.log('in remove profile');
    this.props.dispatch({ type: 'DELETE_PROFILE', payload: id})
  }

  selectProfile = (id) => {
    console.log('in remove profile');
    this.props.dispatch({ type: 'SELECT_PROFILE', payload: id})
    this.props.history.push('/IndividualProfile')
  }

  addProfile = () => {
    this.props.history.push('/CreateNewProfile')
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
                <ul id="card2" key={profile.id}>
                <li ><img id="profileImg" alt={profile.id} src={profile.student_pic}/></li>
                  <li id="profileName">{profile.name}</li>
                  <li id="profileNote">{profile.note}</li>
                  <li><button id="editButton">Edit</button></li>
                  <li><button id="selectButton" onClick={() => {this.selectProfile(profile.id)}}>Select</button></li>
                  <li><button id="deleteButton" onClick={() => {this.removeProfile(profile.id)}}>Remove</button></li>
                  </ul>
              )
            })}
          </div> 
          
          <section>
            <button onClick={this.addProfile}>Add New Profile</button>
          </section>
          <section>
            <button>Logout</button>
          </section>
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (CurrentProfiles);