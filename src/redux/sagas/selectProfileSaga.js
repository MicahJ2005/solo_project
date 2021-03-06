import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';


function* selectProfile(action) {
    try {
        const response = yield call(axios.get, `/selectProfile/${action.payload}`)
        yield put({ type: 'GET_INDIVIDUAL_STUDENT', payload: response.data })
        
        
      }
      catch (error) {
        console.log('error with getting reques', error);
        
      }
}



function* selectProfileSaga() {
  yield takeLatest('SELECT_PROFILE', selectProfile);
  
}

export default selectProfileSaga;