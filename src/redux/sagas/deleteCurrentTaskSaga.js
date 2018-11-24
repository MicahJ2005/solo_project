import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* deleteCurrentTask(action) {
    console.log('delete action', action);
    
    try {
        const response = yield call(axios.delete, `/deleteTask/${action.payload}`)
        console.log('deleteProfile api response', response);
        // yield put(({ type: 'GET_SELECTED_TASKLIST', payload: action.payload }))
        
      }
      catch (error) {
        console.log('error with getting reques', error);
        
      }
}



function* deleteCurrentTaskSaga() {
  yield takeLatest('DELETE_TASK', deleteCurrentTask);
  
}

export default deleteCurrentTaskSaga;