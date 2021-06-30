import axios from 'axios';
import { Dispatch } from 'redux';

import { AuthActions } from '../store/actions/Auth';
import { ActionTypes } from '../store/action-types';
import { signOut } from '../store/action-creators';

export const authenticate = (
  email: string,
  password: string,
  isSignup: boolean
) => {
  return (dispatch: Dispatch<AuthActions>) => {
    dispatch({ type: ActionTypes.AUTH_START });
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };
    const url = isSignup
      ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaGybnfaawh4W2Sd3GYDteWF8E8K_yrLg`
      : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCaGybnfaawh4W2Sd3GYDteWF8E8K_yrLg`;
    axios
      .post(url, authData)
      .then((res) => {
        let expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 10000
        );
        localStorage.setItem('idToken', res.data.idToken);
        localStorage.setItem('userId', res.data.localId);
        localStorage.setItem('expirationDate', `${expirationDate}`);

        return dispatch({
          type: ActionTypes.AUTH_SUCCESS,
          idToken: res.data.idToken,
          userId: res.data.localId,
        });
      })
      .catch((err) =>
        dispatch({
          type: ActionTypes.AUTH_FAIL,
          error: err.response.data.error.message,
        })
      );
  };
};

export const autoSignIn = () => {
  return (dispatch: Dispatch<AuthActions>) => {
    dispatch({ type: ActionTypes.AUTH_START });
    const idToken = localStorage.getItem('idToken');
    const userId = localStorage.getItem('userId');
    const expiresIn = String(localStorage.getItem('expirationDate'));
    const expirationDate = new Date(expiresIn);
    if (idToken && userId) {
      if (expirationDate > new Date()) {
        dispatch({
          type: ActionTypes.AUTH_SUCCESS,
          idToken,
          userId,
        });
        setTimeout(() => {
          localStorage.removeItem('idToken');
          localStorage.removeItem('userId');
          localStorage.removeItem('expirationDate');
          dispatch({ type: ActionTypes.SIGN_OUT });
        }, ((expirationDate.getTime() - new Date().getTime()) / 1000) * 1000);
      }
    }
  };
};

export const handleSignOut = () => {
  return (dispatch: Dispatch<AuthActions>) => {
    localStorage.removeItem('idToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');
    dispatch({
      type: ActionTypes.SIGN_OUT,
    });
  };
};

export const sendResetEmail = (email: string) => {
  // return (dispatch: Dispatch<Actions>) => {
  axios
    .post(
      'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCaGybnfaawh4W2Sd3GYDteWF8E8K_yrLg',
      {
        requestType: 'PASSWORD_RESET',
        email,
      }
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
// }
