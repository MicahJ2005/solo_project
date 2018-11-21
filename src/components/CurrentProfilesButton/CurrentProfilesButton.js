import React, { Component } from 'react'
import { connect } from 'react-redux';

class CurrentProfileButton extends Component {
    viewCurrentProfileButton = () => {
        this.props.history.push('/CurrentProfiles')
    }
    
render () {
    return (
    <div>
        <button onClick={this.viewCurrentProfileButton}>
            View Current Profiles!
        </button>
    </div>
        )
    }
}   
  
const mapStateToProps = reduxState => ({
    reduxState,
  }); 


export default connect(mapStateToProps)(CurrentProfileButton);