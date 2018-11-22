import React, { Component } from 'react'
import { connect } from 'react-redux';
// import Dropzone from 'react-dropzone';
// import ImageRender from '../DropZone/ImageRender';
// import axios from 'axios';

class IndividualProfile extends Component {


  // componentDidMount(props){
  //   console.log('props', props)
  //   this.props.dispatch({ type: 'RENDER_INDIVIDUAL_TASKS' })
 
  // }

    
  render () {
      
    return (
      <div id="card">
        {this.props.reduxState.selectProfileReducer.map((individual) => {
          return(
          
            <ul key={individual.id}>
            
              <li><h1>{individual.name} Profile</h1></li>
              <li><img  id="profileImg" alt= "baby" src={individual.student_pic}/></li>
              <li>{individual.note}</li>
              
              {/* <button>Add To Library</button> */}
            

            <section> 
              <button>View History</button>
            </section>

            <section>
              <h2>{individual.name} Library</h2>
              {/* {Object.keys(individual).map(images => {
                
              
                  {individual[images].image.map(newImage => {
                    return(
                      <li><img src={newImage}/></li>
                    )
                  }

                  )} */}
                
              {/* })} */}
              

              <button>Start Your Schedule</button>
              
            </section>
            </ul>
            
        )
        })}
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});


export default connect(mapStateToProps) (IndividualProfile)
