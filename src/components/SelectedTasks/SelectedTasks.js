import React, { Component } from 'react'
import { connect } from 'react-redux';


class SelectedTasks extends Component {

  render () {
      
    return (
      <div>
        <header>
         <h1>Selected Tasks</h1>
        </header>

        <section>
            <h2>Task Name</h2>
            <img alt="ProfilePic" src="https://amp.businessinsider.com/images/56e3189152bcd0320c8b5cf7-750-562.jpg"/>
            <button>Remove</button>
        </section>

        <section>
            <button>Start Schedule</button>
        </section>

        


      </div>
    )
  }
}

export default connect() (SelectedTasks)