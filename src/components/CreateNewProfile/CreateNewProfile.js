import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateNewProfile extends Component {

  render () {
      
    return (
      <div>
          <header>
              <h1>Create New Profile</h1>
          </header>
        <br></br>
            <form>  
                <input type="text" placeholder="Add Profile Name"/>
                <input type="text" placeholder="Add Parent Name"/>
                <input type="text" placeholder="Teacher/Therapist dropdown"/>
                <input type="text" placeholder="Add Notes"/>
                <button>Add Profile</button>
            </form>

            <section>
                <h2>You are Awesome!</h2>
            </section>
      </div>
    )
  }
}

export default connect() (CreateNewProfile)