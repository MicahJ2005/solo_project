import React, { Component } from 'react'
import { connect } from 'react-redux';

class CurrentTaskListPage extends Component {


  render () {
      
    return (
      <div> 
        <h1>Current Task List</h1>
        <h6 id="CurrentTasks">(To remove an image, click REMOVE)</h6>
        <h6 id="CurrentTasks">(When you are ready to start your schedule, click START SCHEDULE)</h6>
        
        <pre>{JSON.stringify(this.props.reduxState.setNewTaskListReducer)}</pre>
    
            {this.props.reduxState.setNewTaskListReducer.map( myTasks => {
                return(
                    <ul key={myTasks.index} id="currentTaskListImage">
                        <img  id="currentTaskListImage" alt="task" src={myTasks.image}/>
                        <button >Remove</button>
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

export default connect(mapStateToProps) (CurrentTaskListPage);