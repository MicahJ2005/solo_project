import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* getProfiles(action) {
  console.log('getProfiles action', action.payload);
    try {
        const response = yield call(axios.get, `/getStudentInfo/${action.payload.id}`)
        console.log('getStudentInfo api response', response);
        yield put(({ type: 'SET_STUDENTS', payload: response.data}))
        
      }
      catch (error) {
        console.log('error with getting reques', error);
        
      }
}



function* currentProfilesSaga() {
  yield takeLatest('RENDER_PROFILES', getProfiles);
  
}

export default currentProfilesSaga;