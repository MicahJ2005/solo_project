import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';


function* getIndividualTasks(action) {
    try {
        const response = yield call(axios.get, `/getIndividualTasks/${action.payload}`)
        yield put(({ type: 'SET_INDIVIDUAL_TASKS', payload: response.data}))
      }
      catch (error) {
        console.log('error with getting reques', error);
        
      }
}

function* currentProfilesSaga() {
  yield takeLatest('RENDER_INDIVIDUAL_TASKS', getIndividualTasks);
  
}

export default currentProfilesSaga;