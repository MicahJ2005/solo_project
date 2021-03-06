
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const createNewProfileRouter = require('./routes/createNewProfile.router');
const currentProfilesRouter = require('./routes/currentProfiles.router');
const deleteProfilesRouter = require('./routes/deleteProfile.router');
const selectIndividualProfile = require('./routes/selectIndividualProfile.router');
const selectIndividualTasks = require('./routes/selectIndividualTasks.router');
const selectIndividualHistory = require('./routes/individualHistory.router');
const createIndividualTask = require('./routes/createIndividualTask.router');
const addNewTasksToList = require('./routes/addNewTasksToList.router');
const getSelectedTaskList = require('./routes/getSelectedTaskList.router');
const deleteCurrentTask = require('./routes/deleteCurrentTask.router');
const deleteLibraryTask = require('./routes/deleteLibraryTask.router');
const deleteCompletedTask = require('./routes/deleteCompletedTask.router');
const addCompletedTask =require('./routes/addCompletedTask.router');
const updateCompletedTaskNote = require('./routes/editCompletedTaskNote.router');
const editProfile = require('./routes/editProfile.router');

// injectTapEventPlugin = require('react-tap-event-plugin');
// injectTapEventPlugin();
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/addStudent', createNewProfileRouter);
app.use('/getStudentInfo', currentProfilesRouter);
app.use('/delete', deleteProfilesRouter);
app.use('/selectProfile', selectIndividualProfile);
app.use('/getIndividualTasks', selectIndividualTasks)
app.use('/getIndividualHistory', selectIndividualHistory)
app.use('/addIndividualTask', createIndividualTask)
app.use('/addNewTasksToList', addNewTasksToList)
app.use('/getNewTasksToList', getSelectedTaskList)
app.use('/deleteTask', deleteCurrentTask)
app.use('/deleteLibraryTask', deleteLibraryTask)
app.use('/deleteCompletedTask', deleteCompletedTask)
app.use('/addCompletedTask', addCompletedTask)
app.use('/updateCompletedTaskNote', updateCompletedTaskNote)
app.use('/editProfile', editProfile)
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});


module.exports = app;