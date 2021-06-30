import { ActionTypes } from '../action-types';

interface AuthStart {
  type: ActionTypes.AUTH_START;
}

interface AuthSuccess {
  type: ActionTypes.AUTH_SUCCESS;
  idToken: string;
  userId: string;
}

interface AuthFail {
  type: ActionTypes.AUTH_FAIL;
  error: string;
}

interface SignOut {
  type: ActionTypes.SIGN_OUT;
}

interface ResetError {
  type: ActionTypes.RESET_ERROR;
}

export type AuthActions = AuthStart | AuthSuccess | AuthFail | SignOut | ResetError;
