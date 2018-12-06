import currentProfilesReducer from './currentProfileReducer';

describe('test currentProfilesReducer', () => {
    test('initial state should be empty', () => {
        let action ={type: 'SET_STUDENTS'};
        let returnedState = currentProfilesReducer(undefined, action);
        expect( returnedState ).toEqual( undefined );
    });

})
