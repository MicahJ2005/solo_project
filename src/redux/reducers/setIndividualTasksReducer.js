const setIndividualTasksReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INDIVIDUAL_TASKS':
            return action.payload;
        default:
            return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default setIndividualTasksReducer;