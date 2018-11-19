import React, { Component } from 'react'
import { connect } from 'react-redux';

class UserInterface extends Component {

  render () {
      
    return (
      <div>
        <secton>
          <button>Big Person Button</button>  
        </secton>  

        <section>
          <h1>First</h1>
        </section>

        <section>
          <img src="image here" />
        </section>
        

        <section>
          <h1>Then</h1>
        </section>

        <section>
          <img src="image here" />
        </section>
        
      </div>
    )
  }
}

export default connect() (UserInterface)