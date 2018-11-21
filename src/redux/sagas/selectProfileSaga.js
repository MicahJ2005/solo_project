import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* selectProfile(action) {
    console.log('delete action', action);
    
    try {
        const response = yield call(axios.delete, `/selectProfile/${action.payload}`)
        console.log('selectProfile api response', response);
        // yield put(({ type: 'SET_STUDENTS' }))
        
      }
      catch (error) {
        console.log('error with getting reques', error);
        
      }
}



function* deleteProfileSaga() {
  yield takeLatest('SELECT_PROFILE', selectProfile);
  
}

export default deleteProfileSaga;