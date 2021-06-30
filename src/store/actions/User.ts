import { ActionTypes } from '../action-types';

interface getEmail {
  type: ActionTypes.GET_EMAIL,
  email: string,
} 

export type UserActions = getEmail;