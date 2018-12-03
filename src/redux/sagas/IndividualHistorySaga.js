import { put, takeLatest , call } from 'redux-saga/effects';
import axios from 'axios';


function* getIndividualHistory(action) {
    try {
        const response = yield call(axios.get, `/getIndividualHistory/${action.payload}`)
        yield put(({ type: 'SET_INDIVIDUAL_HISTORY', payload: response.data}))
        
        
      }
      catch (error) {
        console.log('error with getting reques', error);
        
      }
}



function* currentProfilesSaga() {
  yield takeLatest('RENDER_INDIVIDUAL_HISTORY', getIndividualHistory);
  
}

export default currentProfilesSaga;