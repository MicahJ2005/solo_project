import React, { Component } from 'react'
import { connect } from 'react-redux';

const newStudent = {
    name: '',
    student_pic: '',
    note: '',
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

    submitForm = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_STUDENT', 
        payload: {
            newProfile: this.state,
            history: this.props.history}

         })
        this.setState(newStudent);
    }


  render () { 
    return (
      <div>
          <section>
            <header>
                <h1>Create New Profile</h1>
            </header>
                    <br></br>
                <form onSubmit={this.submitForm} id="newProfile">  
                    <input name="name" type="text" placeholder="Add Student Name" value={this.state.name} onChange={this.handleChange}/>
                    <input name="student_pic" type="text" placeholder="Add Image URL" value={this.state.student_pic} onChange={this.handleChange}/>
                    <input name="note" type="text" placeholder="Add a Note" value={this.state.note} onChange={this.handleChange}/>
                    <input id="selectButton" type="submit" value="submit"></input>
                    <h2><em>Never underestimate the impact <u>YOU</u> have on a child's life!</em> </h2>
                </form>
            </section>
      </div>
    )
  }
}
const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps) (CreateNewProfile)