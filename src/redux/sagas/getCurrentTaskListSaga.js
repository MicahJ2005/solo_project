import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';


function* getNewTasksToList(action) {
    try {
        const response = yield call(axios.get, `/getNewTasksToList/${action.payload}`)
        yield put({ type: 'SET_SELECTED_TASKLIST', payload: response.data})
        
      }
      catch (error) {
        console.log('error with getting request', error);
        
      }
}



function* NewTasksToList() {
  yield takeLatest('GET_SELECTED_TASKLIST', getNewTasksToList);
}

export default NewTasksToList;