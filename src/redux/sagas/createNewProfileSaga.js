import { takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* addStudent(action) {
    try {
        yield call(axios.post, '/addStudent', action.payload);
        // TODO: Add our GET saga
        // yield put({type: 'FETCH_PROJECTS'});
    } catch (error) {
        console.log(error);
        alert('Unable to add project');
    }
}



function* createNewProfileSaga() {
  yield takeLatest('ADD_STUDENT', addStudent);
  
}

export default createNewProfileSaga;