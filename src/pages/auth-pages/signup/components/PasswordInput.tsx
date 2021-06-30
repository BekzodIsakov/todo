import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { colors, SlideInAnimation } from '../../../../GlobalStyle';
import { errorMessages } from '../../../../const/messages';
import { authenticate } from '../../../../services/auth';
import { resetError } from '../../../../store/action-creators';
import { RootState } from '../../../../store/reducers';
import Button from '../../../../components/Button';
import FlexContainer from '../../../../components/FlexContainer';
import { Icon } from '../../../../components/IconSVG';

interface PropTypes {
  password: string;
  setPassword: (password: string) => void;
  email: string;
  currentPage?: string;
  setCurrentPage: (currentPage: string) => void;
}

const SVGIcon = styled.svg<{ passwordHidden?: boolean }>`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 100;

  width: 2.2rem;
  height: 2.2rem;
  cursor: pointer;

  fill: ${(props) => !props.passwordHidden && '#11a1fd'};
`;

const PasswordInputBase = styled.div<{
  currentPage?: string;
}>`
  position: absolute;
  width: 100%;
  visibility: ${(props) =>
    props.currentPage === 'password' ? 'visible' : 'hidden'};

  & > div:first-child {
    position: relative;
    left: 20rem;
    ${(props) =>
      props.currentPage === 'password' &&
      css`
        ${SlideInAnimation}
      `}
  }

  .wrapper {
    position: relative;
  }

  span {
    position: absolute;
    left: 0;
    bottom: 90%;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.red};
    user-select: none;
  }

  img {
    width: 2.7rem;
    height: 2.7rem;
    cursor: pointer;
    position: absolute;
    right: 0;
  }
`;

const PasswordInput: React.FC<PropTypes> = ({
  password,
  setPassword,
  email,
  setCurrentPage,
  currentPage,
}) => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  useEffect(() => {
    //the reason to use setTimeout is intputRef.current?.focus() is causing a ui issue when password
    //page animating. setTimeout is used to give time for animation to load before focus() function is invoked.
    //In our case, 150milliseconds is enough. Remove setTimeout to see what the issue was.
    setTimeout(() => {
      inputRef.current?.focus();
    }, 150);
  }, [currentPage]);
  
  useEffect(() => {
    return () => {
      // errorMessage = '';
      dispatch(resetError());
    }
  }, [])

  const { error } = useSelector((state: RootState) => state.authReducer);
  let errorMessage = errorMessages[error as keyof typeof errorMessages];
  
  const dispatch = useDispatch();


  const handleOnEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(authenticate(email, password, true));
    }
  };

  const handlePasswordVisiblity = (e: React.MouseEvent<SVGSVGElement>) => {
    setPasswordHidden(!passwordHidden);
    e.stopPropagation();
  };

  const handleOnClick = () => {
    dispatch(authenticate(email, password, true));
  };

  return (
    <PasswordInputBase currentPage={currentPage}>
      <FlexContainer direction={'column'} spacing={'2rem'}>
        <FlexContainer direction={'column'} spacing={'1.5rem'}>
          <p>{email}</p>
          <h2>Enter password</h2>
          <div className='wrapper'>
            <input
              ref={inputRef}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={passwordHidden ? 'password' : 'text'}
              placeholder='Password'
              onKeyPress={handleOnEnterPress}
            />
            <span>{errorMessage}</span>
            <SVGIcon
              passwordHidden={passwordHidden}
              onClick={handlePasswordVisiblity}
            >
              <Icon iconName={'eye-icon'} />
            </SVGIcon>
          </div>
        </FlexContainer>
        <FlexContainer
          width={'max-content'}
          alignSelf={'flex-end'}
          spacing={'.5rem'}
        >
          <Button
            color={colors.black}
            bgColor={colors.gray50}
            onHoverStyle={{ bgColor: colors.gray100 }}
            onClick={() => setCurrentPage('email')}
          >
            Back
          </Button>
          <Button onClick={handleOnClick}>Signup</Button>
        </FlexContainer>
      </FlexContainer>
    </PasswordInputBase>
  );
};

export default PasswordInput;
