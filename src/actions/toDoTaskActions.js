import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import ToDoTaskApi from '../api/toDoTaskApi';

export function loadAllToDOTasksSuccess(toDoTasks) {
    return { type: types.LOAD_ALL_TODO_TASKS_SUCCESS, toDoTasks };
}

export function loadAllToDoTasksAction() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return ToDoTaskApi.getToDoTasksApi().then(toDoTasks => {
            dispatch(loadAllToDOTasksSuccess(toDoTasks));
        }).catch(error => {
            throw (error);
        });
    };
}

export function createNewToDoTaskSuccess(toDoTasks) {
    return { type: types.CREATE_NEW_TODO_TASK_SUCCESS, toDoTasks };
}

export function createNewToDoTaskAction(toDoTask) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return ToDoTaskApi.createNewToDoTaskApi(toDoTask).then(toDoTasks => {
            dispatch(createNewToDoTaskSuccess(toDoTasks));
        }).catch(error => {
            throw (error);
        });
    };
}

export function deleteToDoTaskAction(toDoTaskID) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return ToDoTaskApi.deleteToDoTaskApi(toDoTaskID).then(toDoTasks => {
             dispatch(deleteToDoTaskSuccess(toDoTasks));
        }).catch(error => {
            throw (error);
        });
    };
}

export function deleteToDoTaskSuccess(toDoTasks) {
    return { type: types.DELETE_TODO_TASK_SUCCESS, toDoTasks };
}

export function completeTodoTaskAction(toDoTaskID) {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return ToDoTaskApi.completeTodoTaskApi(toDoTaskID).then(toDoTasks => {
             dispatch(completeTodoTaskSuccess(toDoTasks));
        }).catch(error => {
            throw (error);
        });
    };
}

export function completeTodoTaskSuccess(toDoTasks) {
    return { type: types.COMPLETE_TODO_TASK_SUCCESS, toDoTasks };
}

export function updateToDoTaskAction(toDoTaskID, toDoTask){
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return ToDoTaskApi.updateToDoTaskApi(toDoTaskID, toDoTask).then(toDoTasks => {
             dispatch(updateToDoTaskSuccess(toDoTasks));
        }).catch(error => {
            throw (error);
        });
    };
}

export function updateToDoTaskSuccess(toDoTasks) {
    return { type: types.UPDATE_TODO_TASK_SUCCESS, toDoTasks };
}