import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateNewProfileButton extends Component {
    createNewProfileButton = () => {
        this.props.history.push('/CreateNewProfile')
    }
    
render () {
    return (
    <div>
        <button onClick={this.createNewProfileButton}>
            Create a New Profile!
        </button>
    </div>
        )
    }
}   
  
const mapStateToProps = reduxState => ({
    reduxState,
  }); 


export default connect(mapStateToProps)(CreateNewProfileButton);