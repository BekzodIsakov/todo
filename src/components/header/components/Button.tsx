import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { handleSignOut } from '../../../services/auth';
import { ButtonBase } from '../../Button';

const SignOutButtonBase = styled(ButtonBase)`
  width: max-content;
  padding: 0;
  font-weight: 500;
  align-self: center;
  user-select: none;
  background: transparent;
`;

const SignOutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClick = () => {
    dispatch(handleSignOut());
    history.push('/');
  };

  return (
    <SignOutButtonBase onClick={handleOnClick}>Sign out</SignOutButtonBase>
  );
};

export default SignOutButton;
