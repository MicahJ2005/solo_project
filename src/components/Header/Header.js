import React, { Component } from 'react'
import { connect } from 'react-redux';

class Header extends Component {


    
  render () {
      
    return (
      <div>
          <header>
              <h1>F/TforME</h1>
          </header>
        
      </div>
    )
  }
}

export default connect() (Header);