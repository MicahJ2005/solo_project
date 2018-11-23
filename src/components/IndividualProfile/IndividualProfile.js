import React, { Component } from 'react'
import { connect } from 'react-redux';
import IndividualTaskForm from '../IndividualTaskForm/TaskForm';

class IndividualProfile extends Component {

  // componentDidMount(){
  //   this.props.dispatch({ type: 'RENDER_INDIVIDUAL_TASKS' } )
  // }

  viewHistory = () => {
    this.props.history.push('/HistoryPage')
  }
    
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
            
              <IndividualTaskForm individualId={individual.id}/>
            
            <section> 
              <button onClick={this.viewHistory}>View History</button>
            </section>

            <section>
              <h2>{individual.name}'s Task Library</h2>
              <h6>(click on an image to add it to your task list task)</h6>
              {/* <pre>{JSON.stringify(this.props.reduxState.setIndividualTasksReducer)}</pre> */}
              {this.props.reduxState.setIndividualTasksReducer.map( task => {
                return(
                  <ul key={task.id}>
                    <li><img id="profileImg" alt= "task" src={task.image}/></li>
                  </ul>
                )
              })}
              

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
