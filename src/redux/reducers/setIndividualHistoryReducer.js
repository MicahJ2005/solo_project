const selectHistoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INDIVIDUAL_HISTORY':
            return action.payload;
        default:
            return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default selectHistoryReducer;