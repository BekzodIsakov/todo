import { ActionTypes } from '../action-types';
import {AuthActions} from '../actions/Auth';

const initialState = {
  loading: false,
  error: null,
  idToken: null,
  userId: null,
}

interface stateTypes {
  loading: boolean,
  error: string | null,
  idToken: string | null,
  userId: string | null,
}

export default (state: stateTypes = initialState, action: AuthActions) => {
  switch (action.type) {
    case ActionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
      }
      case ActionTypes.AUTH_SUCCESS:
        return {
          ...state,
          loading: false,
          idToken: action.idToken,
          userId: action.userId,
          error: null,
      };
    case ActionTypes.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        idToken: null,
        userId: null,
      };
    case ActionTypes.RESET_ERROR:
      return {
        ...state,
        error: null,
      }
    default: return state;
  }
};