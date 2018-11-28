import { takeLatest , call, put } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* editProfile(action) { 
    console.log('addCompleted action', action.payload);
    
    try {
        yield call(axios.put, `/editProfile/${action.payload.profileId}`, action.payload);
        yield put({ type: 'RENDER_PROFILES', payload: action.payload.profileUserId} )
        // yield put({ type: 'RENDER_INDIVIDUAL_TASKS', payload: action.payload.student_id } )

    } catch (error) {
        console.log(error);
        alert('Unable to add project');
    }
}



function* editProfileSaga() {
  yield takeLatest('EDIT_PROFILE', editProfile);
  
}

export default editProfileSaga;