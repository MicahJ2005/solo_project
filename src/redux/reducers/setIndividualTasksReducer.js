const setIndividualTasksReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INDIVIDUAL_TASKS':
            return action.payload;
        default:
            return state;
    }
  };
  
  
  export default setIndividualTasksReducer;