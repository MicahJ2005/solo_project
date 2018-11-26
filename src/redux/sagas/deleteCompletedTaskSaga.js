import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';

function* deleteCompletedTask(action) {
    try {
        yield call(axios.delete, `/deleteCompletedTask/${action.payload}`)
        // yield put(({ type: 'RENDER_PROFILES', payload: action.payload}))
        
      }
      catch (error) {
        console.log('error with getting reques', error);
        
      }
}



function* deleteCompletedProfileSaga() {
  yield takeLatest('DELETE_COMPLETED_TASK', deleteCompletedTask);
  
}

export default deleteCompletedProfileSaga;