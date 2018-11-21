const selectProfilesReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_INDIVIDUAL_STUDENT':
            return action.payload;
        default:
            return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default selectProfilesReducer;