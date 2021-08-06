import { ActionTypes } from '../action-types';
import { Actions } from '../actions/Todo';

const initialState = {
  isLoading: false,
  todos: {
    important: '',
    myDay: '',
    planned: '',
    tasks: '',
  },
};

interface stateType {
  isLoading: boolean;
  todos: {
    myDay: '' | Object;
    planned: '' | Object;
    tasks: '' | Object;
    important: '' | Object;
  };
}

export default (state: stateType = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: {
          ...action.todos,
        },
      };
    case ActionTypes.FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case ActionTypes.ADD_TASK:
      const { todos } = state;
      const section = todos[action.sectionName];
      const newTaskObj = {
        name: action.taskName,
        isCompleted: action.isCompleted,
      };
      const updatedTodos = {
        ...todos,
        [action.sectionName]: {
          ...section,
          [action.taskId]: newTaskObj,
        },
      };
      return {
        ...state,
        todos: updatedTodos,
      };
    case ActionTypes.COMPLETE_TASK:
      return {
        ...state,
        todos: {
          ...state.todos,
          [action.sectionName]: {
            ...state.todos[action.sectionName],
            [action.taskId]: {
              isCompleted: action.isCompleted,
              name: action.taskName,
            },
          },
        },
      };
    default:
      return state;
  }
};
