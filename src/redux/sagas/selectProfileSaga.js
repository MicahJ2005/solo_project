import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';


function* selectProfile(action) {
    console.log('select profile action', action);
    
    try {
        const response = yield call(axios.get, `/selectProfile/${action.payload}`)
        console.log('selectProfile api response', response);
        yield put({ type: 'GET_INDIVIDUAL_STUDENT', payload: response.data })
        // yield put({ type: 'SET_INDIVIDUAL_TASKS', payload: response.data})
        
      }
      catch (error) {
        console.log('error with getting reques', error);
        
      }
}



function* selectProfileSaga() {
  yield takeLatest('SELECT_PROFILE', selectProfile);
  
}

export default selectProfileSaga;