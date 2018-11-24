const setNewTaskListReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SELECTED_TASKLIST':
            return action.payload;
        default:
            return state;
    }
  };
  
  export default setNewTaskListReducer;