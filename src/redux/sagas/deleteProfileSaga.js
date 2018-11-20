import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* deleteProfile(action) {
    try {
        const response = yield call(axios.delete, `/delete/${action.payload}`)
        console.log('deleteProfile api response', response);
        yield put(({ type: 'SET_STUDENTS' }))
        
      }
      catch (error) {
        console.log('error with getting reques', error);
        
      }
}



function* deleteProfileSaga() {
  yield takeLatest('DELETE_PROFILE', deleteProfile);
  
}

export default deleteProfileSaga;