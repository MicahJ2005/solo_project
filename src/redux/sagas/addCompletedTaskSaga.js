import { takeLatest , call, put } from 'redux-saga/effects';
import axios from 'axios';

function* addCompletedTask(action) { 
    try {
        yield call(axios.post, '/addCompletedTask', action.payload);
        yield put({ type: 'DELETE_COMPLETED_TASK', payload: action.payload} )

    } catch (error) {
        console.log(error);
        alert('Unable to add project');
    }
}

function* addCompletedTaskSaga() {
  yield takeLatest('ADD_COMPLETED_TASK', addCompletedTask);
  
}

export default addCompletedTaskSaga;