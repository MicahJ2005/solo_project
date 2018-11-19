import React, { Component } from 'react'
import { connect } from 'react-redux';

class IndividualProfile extends Component {

  render () {
      
    return (
      <div>
        <header>
         <h1>[Child Name] Profile</h1>
        </header>

        <section>
          <h2>Name</h2>
          <img src="image here"/>
        </section>

        <section>
          <h2>DROPZONE???? MAYBE???</h2>
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