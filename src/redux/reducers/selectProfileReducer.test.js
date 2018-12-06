import selectProfileReducer from './selectProfileReducer';

describe('test currentProfilesReducer', () => {
    test('initial state should be empty', () => {
        let action ={type: 'GET_INDIVIDUAL_STUDENT'};
        let returnedState = selectProfileReducer(undefined, action);
        expect( returnedState ).toEqual( undefined );
    });

})