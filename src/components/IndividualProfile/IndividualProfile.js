import React, { Component } from 'react'
import { connect } from 'react-redux';
// import Dropzone from 'react-dropzone';
// import ImageRender from '../DropZone/ImageRender';
// import axios from 'axios';

class IndividualProfile extends Component {

  render () {
      
    return (
      <div id="card">
        <header>
         <h1>[Child Name] Profile</h1>
        </header>

        <section>
          <h2>Name</h2>
          <img  id="profileImg" alt= "baby" src="images/baby.jpg"/>
        </section>

        <section>
          {/* <Dropzone/> */}
          {/* <input placeholder="picture/task name" type="text"/> */}
          <button>Add To Library</button>
        </section>

        <section> 
          <button>View History</button>
        </section>

        <section>
          <h2>[Name] Library</h2>
          {/* <ImageRender/> */}

          <button>Start Your Schedule</button>
          
        </section>



      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});


export default connect(mapStateToProps) (IndividualProfile)
