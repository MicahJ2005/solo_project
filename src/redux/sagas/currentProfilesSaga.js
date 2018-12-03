import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';


function* getProfiles(action) {
    try {
        const response = yield call(axios.get, `/getStudentInfo/${action.payload}`)
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