import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';

function* deleteCompletedTask(action) {
    try {
        yield call(axios.delete, `/deleteCompletedTask/${action.payload.taskId}`)
        yield put({ type: 'GET_SELECTED_TASKLIST', payload: action.payload.taskUserId} )
        
      }
      catch (error) {
        console.log('error with getting reques', error);
        
      }
}

function* deleteCompletedProfileSaga() {
  yield takeLatest('DELETE_COMPLETED_TASK', deleteCompletedTask);
  
}

export default deleteCompletedProfileSaga;