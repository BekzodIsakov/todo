import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from '../store/action-types';
import { Actions, sectionTypes } from '../store/actions/Todo';
import { generateId } from '../utils';

export const fetchTodos = () => {
  return (dispatch: Dispatch<Actions>) => {
    dispatch({ type: ActionTypes.FETCH_START });
    axios
      .get('https://todo-app-77b33-default-rtdb.firebaseio.com/todos.json')
      .then((res) =>
        dispatch({
          type: ActionTypes.FETCH_SUCCESS,
          todos: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: ActionTypes.FETCH_FAIL,
          error: err.response.statusText,
        })
      );
  };
};

export const addTodo = (
  sectionName: sectionTypes,
  taskName: string,
  taskId: string
) => {
  return (dispatch: Dispatch<Actions>) => {
    axios.post('');
    dispatch({
      type: ActionTypes.ADD_TASK,
      sectionName,
      taskName,
      taskId,
      isCompleted: false,
    });
  };
};

export const completeTodo = (
  sectionName: sectionTypes,
  taskName: string,
  taskId: string,
  isCompleted: boolean
) => {
  axios.patch(
    `https://todo-app-77b33-default-rtdb.firebaseio.com/todos/${sectionName}/${taskId}/.json`,
    { isCompleted: `${isCompleted}` }
  );
  return (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionTypes.COMPLETE_TASK,
      sectionName,
      taskName,
      taskId,
      isCompleted,
    });
  };
};
