import { takeLatest , call, put } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* addIndividualTask(action) {
    console.log('addIndividualTask', action);
    
    try {
        yield call(axios.post, '/addIndividualTask', action.payload);
        yield put({ type: 'RENDER_INDIVIDUAL_TASKS', payload: action.payload.student_id } )

    } catch (error) {
        console.log(error);
        alert('Unable to add project');
    }
}



function* createNewTaskSaga() {
  yield takeLatest('ADD_NEW_TASK', addIndividualTask);
  
}

export default createNewTaskSaga;