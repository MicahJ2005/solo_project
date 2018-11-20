import React, { Component } from 'react'
import { connect } from 'react-redux';

// let userId = JSON.stringify(this.props.reduxState.user.id)

const newStudent = {
    name: '',
    student_pic: '',
    user_id: '',
    
}


class CreateNewProfile extends Component {

    state = newStudent

    /// handling the change of each event
    handleChange = event => {
        this.setState({
                [event.target.name]: event.target.value,
                user_id: JSON.stringify(this.props.reduxState.user.id)
        });
}
    ///addNewProject dispatched our new state/project to our root saga on index.js
    submitForm = event => {
        console.log('newStudent', this.state);
        event.preventDefault();
        
        this.props.dispatch({ type: 'ADD_STUDENT', payload: this.state })
        this.setState(newStudent);
    }


  render () {
      
    return (
      <div>
          <pre>UserID: {JSON.stringify(this.props.reduxState)}</pre>
          <header>
              <h1>Create New Profile</h1>
          </header>
        <br></br>
            <form onSubmit={this.submitForm}>  
                <input name="name" type="text" placeholder="Add Student Name" value={this.state.name} onChange={this.handleChange}/>
                {/* <input type="text" placeholder="Add Parent Name"/> */}
                {/* <input type="text" placeholder="Teacher/Therapist dropdown" value={this.state.teacher} onChange={this.handleChange}/> */}
                {/* <div className="dropdown">
                    <select name="parent" type="text" placeholder="Add Parent" value={this.state.parent} onChange={this.handleChange}>
                        <option value={1}>Jill Johnson</option>
                        <option value={1}>Micah Johnson</option>
                    </select>
                </div>
                <div className="dropdown">
                    <select name="teacher" type="text" placeholder="Add Notes" value={this.state.teacher} onChange={this.handleChange}>
                        <option value={1}>Jill Johnson</option>
                        <option value={2}>Dena Dyrud</option>
                    </select>
                </div> */}
                <input name="student_pic" type="text" placeholder="Add Image" value={this.state.student_pic} onChange={this.handleChange}/>
                <input type="submit" value="submit"></input>
            </form>

            <section>
                <h2>You are Awesome!</h2>
            </section>
      </div>
    )
  }
}
const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (CreateNewProfile)