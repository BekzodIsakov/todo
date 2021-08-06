import { ActionTypes } from '../action-types';

export type sectionTypes = 'important' | 'myDay' | 'tasks' | 'planned';

export interface fetchStart {
  type: ActionTypes.FETCH_START;
}

export interface fetchSuccess {
  type: ActionTypes.FETCH_SUCCESS;
  todos: Object;
}

export interface fetchFail {
  type: ActionTypes.FETCH_FAIL;
  error: string;
}

export interface addTask {
  type: ActionTypes.ADD_TASK;
  sectionName: sectionTypes;
  taskId: string;
  taskName: string;
  isCompleted: boolean;
}

export interface completeTask {
  type: ActionTypes.COMPLETE_TASK;
  sectionName: sectionTypes;
  taskName: string,
  taskId: string,
  isCompleted: boolean,
}

export type Actions =
  | fetchStart
  | fetchSuccess
  | fetchFail
  | addTask
  | completeTask;
