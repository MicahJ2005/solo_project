import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* deleteLibraryTask(action) {
    try {
        yield call(axios.delete, `/deleteLibraryTask/${action.payload.id}`)
        yield put(({ type: 'RENDER_INDIVIDUAL_TASKS', payload: action.payload.student_id }))
        
      }
      catch (error) {
        console.log('error with getting reques', error);
        
      }
}


function* deleteThisLibraryTask() {
  yield takeLatest('DELETE_LIBRARY_TASK', deleteLibraryTask);
  
}

export default deleteThisLibraryTask;