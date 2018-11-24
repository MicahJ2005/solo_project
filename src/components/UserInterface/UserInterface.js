import React, { Component } from 'react'
import { connect } from 'react-redux';

class UserInterface extends Component {

  completedTask = (id) => {
    console.log('in completed Task with id', id);
    
  }

  render () {
      
    return (
      <div>
        <section>
          <button>Big Person Button</button>  
        </section>  

        {JSON.stringify(this.props.reduxState.setNewTaskListReducer)}

      {this.props.reduxState.setNewTaskListReducer.map((task) => {
        return(
          <div key={task.id}>
            <section id="img1" >
              <h1>First</h1>
              <img onClick={() => {this.completedTask(task.id)}} alt="interfacePic" src={task.image} />
            </section>
        

        

          {/* <section id="img2">
            <h1>Then</h1>
            <img  alt="interfacePic" src={image.image} />
          </section> */}
        </div>
        )
      })}
        
        
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps) (UserInterface);
