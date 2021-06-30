import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { fetchTodos } from '../../services/todos';
import { FlexContainerBase } from '../FlexContainer';
import SignOutButton from './components/Button';

const HeaderBase = styled(FlexContainerBase)`
  width: 100vw;
  height: 5rem;
  padding: 0 2rem;
  justify-content: flex-end;
  grid-column: 1 / span 3;
  background-color: ${(props) => props.theme.colors.blue};
`;

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <HeaderBase>
      <SignOutButton />
    </HeaderBase>
  );
};

export default Header;
