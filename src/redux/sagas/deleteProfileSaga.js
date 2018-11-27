import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';

function* deleteProfile(action) {
  console.log('deleteProfile', action.payload);
  
    try {
        yield call(axios.delete, `/delete/${action.payload.id}`)
        yield put(({ type: 'RENDER_PROFILES', payload: action.payload.user_id}))
        
      }
      catch (error) {
        console.log('error with getting reques', error);
        
      }
}



function* deleteProfileSaga() {
  yield takeLatest('DELETE_PROFILE', deleteProfile);
  
}

export default deleteProfileSaga;