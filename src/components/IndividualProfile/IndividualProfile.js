import React, { Component } from 'react'
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

class IndividualProfile extends Component {

  render () {
      
    return (
      <div>
        <header>
         <h1>[Child Name] Profile</h1>
        </header>

        <section>
          <h2>Name</h2>
          <img alt="ProfilePic" src="image here"/>
        </section>

        <section>
          <Dropzone/>
          <input placeholder="picture/task name" type="text"/>
          <button>Add To Library</button>
        </section>

        <section> 
          <button>View History</button>
        </section>

        <section>
          <h2>[Name] Library</h2>
          {/* ////map in profile library of images */}

          <button>Start Your Schedule</button>

        </section>



      </div>
    )
  }
}

export default connect() (IndividualProfile)