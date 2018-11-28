import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import createNewProfileSaga from './createNewProfileSaga';
import currentProfilesSaga from './currentProfilesSaga';
import deleteProfileSaga from './deleteProfileSaga';
import selectProfileSaga from './selectProfileSaga';
import IndividualTasksSaga from './individualTasksSaga';
import IndividualHistorySaga from './IndividualHistorySaga';
import addNewTaskSaga from './addNewTaskSaga';
import addNewTaskListSaga from './newTaskListSaga';
import NewTasksToList from './getCurrentTaskListSaga';
import deleteCurrentTask from './deleteCurrentTaskSaga';
import deleteThisLibraryTask from './deleteLibraryTaskSaga';
import deleteCompletedTask from './deleteCompletedTaskSaga';
import addCompletedTask from './addCompletedTaskSaga';
import editProfileSaga from './editProfileSaga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    createNewProfileSaga(),
    currentProfilesSaga(),
    deleteProfileSaga(),
    selectProfileSaga(),
    IndividualTasksSaga(),
    IndividualHistorySaga(),
    addNewTaskSaga(),
    addNewTaskListSaga(),
    NewTasksToList(),
    deleteCurrentTask(),
    deleteThisLibraryTask(),
    deleteCompletedTask(),
    addCompletedTask(),
    editProfileSaga(),
  ]);
}
