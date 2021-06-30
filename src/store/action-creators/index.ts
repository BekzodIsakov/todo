import { ActionTypes } from '../action-types'

export const authStart = () => {
  return {
    type: ActionTypes.AUTH_START,
  }
};

export const authSuccess = (idToken: string, userId: string) => ({
  type: ActionTypes.AUTH_SUCCESS,
  idToken,
  userId,
});

export const authFail = (error: string) => {
  return({
    type: ActionTypes.AUTH_FAIL,
    error,
  })
};

export const signOut = () => {
  return({
    type: ActionTypes.SIGN_OUT,
  })
} 

export const resetError = () => {
  return({
    type: ActionTypes.RESET_ERROR,
  })
} 

export const getEmail = (email: string) => {
  return({
    type: ActionTypes.GET_EMAIL,
    email, 
  })
};

