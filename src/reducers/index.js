import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import toDoTasks from './toDoTaskReducer';

const rootReducer = combineReducers({
      ajaxCallsInProgress , toDoTasks
});

export default rootReducer;