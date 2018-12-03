import { takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';


function* addNewTasksToList(action) {
    try {
        yield call(axios.post, '/addNewTasksToList', action.payload);
        
      }
      catch (error) {
        console.log('error with getting request', error);
        
      }
}


function* addNewTaskListSaga() {
  yield takeLatest('ADD_TO_TASKLIST', addNewTasksToList);
 
}

export default addNewTaskListSaga;