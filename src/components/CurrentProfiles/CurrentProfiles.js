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


  render () {
      console.log(this.props.reduxState);
      
    return (

      ///Map all profiles with cards
      <div> 
        <h1>Profiles</h1>
        <div>
          {this.props.reduxState.currentProfilesReducer.map((profile) => {
              return( 
                <ul className="container" key={profile.id}>
                <li ><img alt={profile.id} src={profile.student_pic}/></li>
                  <li>{profile.name}</li>
                  <li>{profile.note}</li>
                  <li><button>Edit</button></li>
                  <li><button>Select</button></li>
                  <li><button onClick={() => {this.removeProfile(profile.id)}}>Remove</button></li>
                  </ul>
              )
            })}
          </div> 
          
          <section>
            <button>Add New Profile</button>
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