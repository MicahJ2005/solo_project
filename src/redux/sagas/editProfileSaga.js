import { takeLatest , call, put } from 'redux-saga/effects';
import axios from 'axios';


function* editProfile(action) { 
    try {
        yield call(axios.put, `/editProfile/${action.payload.profileId}`, action.payload);
        yield put({ type: 'RENDER_PROFILES', payload: action.payload.profileUserId } )

    } catch (error) {
        console.log(error);
        alert('Unable to add project');
    }
}


function* editProfileSaga() {
  yield takeLatest('EDIT_PROFILE', editProfile);
  
}

export default editProfileSaga;