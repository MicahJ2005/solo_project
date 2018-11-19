import React, { Component } from 'react'
import { connect } from 'react-redux';

class CurrentProfiles extends Component {

  render () {
      
    return (

      ///Map all profiles with cards
      <div> 
        
        <h1>Profiles</h1>
          <section>
              <img src=""/>
              <h1>Child Name</h1>
              <h2>Child Notes</h2>
              <button>Edit</button>
              <button>Select</button>
              <button>Remove</button>
          </section>
          <br></br>
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

export default connect() (CurrentProfiles)