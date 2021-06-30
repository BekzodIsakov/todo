import { UserActions } from '../actions/User';

const initialState = {
  name: '',
  email: '',
  profileImage: null,
};

interface stateType {
  name: string;
  email: string;
  profileImage: string | null;
}

export default (state: stateType = initialState, action: UserActions) => {
  switch (action.type) {
    case 'GET_EMAIL':
      return {
        ...state,
        email: action.email,
      };
    default:
      return state;
  }
};
