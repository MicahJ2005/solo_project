const selectHistoryReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INDIVIDUAL_HISTORY':
            return action.payload;
        default:
            return state;
    }
  };
  
  
  export default selectHistoryReducer;