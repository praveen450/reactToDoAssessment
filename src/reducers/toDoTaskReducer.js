import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function appReducer(state = initialState.toDoTasks, action) {
    switch (action.type) {
        case types.LOAD_ALL_TODO_TASKS_SUCCESS:
            return action.toDoTasks;

        case types.CREATE_NEW_TODO_TASK_SUCCESS:
            return action.toDoTasks;

        case types.DELETE_TODO_TASK_SUCCESS:
            return action.toDoTasks;

        case types.COMPLETE_TODO_TASK_SUCCESS:
            return action.toDoTasks;

        case types.UPDATE_TODO_TASK_SUCCESS:
            return action.toDoTasks;

        default:
            return state;
    }
}