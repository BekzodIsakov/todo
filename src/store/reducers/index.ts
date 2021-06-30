import {combineReducers} from 'redux';
import AuthReducer from './auth';
import UserReducer from './user';
import TodosReducer from './todos';

export const reducers = combineReducers({
  authReducer: AuthReducer,
  userReducer: UserReducer,
  todoReducer: TodosReducer,
})

export type RootState = ReturnType<typeof reducers>;

