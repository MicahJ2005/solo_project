import { takeLatest , call, put } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* addCompletedTask(action) { 
    console.log('addCompleted action', action);
    
    try {
        yield call(axios.post, '/addCompletedTask', action.payload);
        yield put({ type: 'DELETE_COMPLETED_TASK', payload: action.payload } )
        // yield put({ type: 'RENDER_INDIVIDUAL_TASKS', payload: action.payload.student_id } )

    } catch (error) {
        console.log(error);
        alert('Unable to add project');
    }
}



function* addCompletedTaskSaga() {
  yield takeLatest('ADD_COMPLETED_TASK', addCompletedTask);
  
}

export default addCompletedTaskSaga;