import React, { Component } from 'react'
import { connect } from 'react-redux';

class UserInterface extends Component {

  render () {
      
    return (
      <div>
        <section>
          <button>Big Person Button</button>  
        </section>  

        

        <section id="img1">
          <h1>First</h1>
          <img alt="interfacePic" src="https://amp.businessinsider.com/images/56e3189152bcd0320c8b5cf7-750-562.jpg" />
        </section>
        

        

        <section id="img2">
          <h1>Then</h1>
          <img  alt="interfacePic" src="https://www.active.com/Assets/fitness/bball-terms-620.jpg" />
        </section>
        
      </div>
    )
  }
}

export default connect() (UserInterface)