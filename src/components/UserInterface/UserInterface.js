import React, { Component } from 'react'
import { connect } from 'react-redux';

class UserInterface extends Component {

  completedTask = (id) => {
    console.log('in completed Task with id', id);
    
  }

  

  render () {
    return (
      <div>
        <div id="uiImage1bg" >
        <h1 id="firstText">First</h1>
        <img id="uiImage1" src={this.props.reduxState.setNewTaskListReducer[0].image}/>
        </div>

        <div id="uiImage2bg" >
        <h1 id="thenText">Then</h1>
        <img id="uiImage2" src={this.props.reduxState.setNewTaskListReducer[1].image}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (UserInterface);
