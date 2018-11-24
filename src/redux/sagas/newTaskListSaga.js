import { takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* addNewTasksToList(action) {
    try {
        const response = yield call(axios.post, '/addNewTasksToList', action.payload)
        console.log('addNewTasksToList api response.config.data', response.config.data);
        
      }
      catch (error) {
        console.log('error with getting request', error);
        
      }
}




function* addNewTaskListSaga() {
  yield takeLatest('ADD_TO_TASKLIST', addNewTasksToList);
 
}

export default addNewTaskListSaga;