const selectProfilesReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_INDIVIDUAL_STUDENT':
            return action.payload;
        default:
            return state;
    }
  };
  
  
  export default selectProfilesReducer;