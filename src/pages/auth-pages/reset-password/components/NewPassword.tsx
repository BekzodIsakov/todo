import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { colors } from '../../../../GlobalStyle';
import Button from '../../../../components/Button';
import FlexContainer from '../../../../components/FlexContainer';
import { Icon } from '../../../../components/IconSVG';
import { errorMessages } from '../../../../const/messages';
import { authenticate, sendResetEmail } from '../../../../services/auth';
import { RootState } from '../../../../store/reducers';

interface PropTypes {
  password: string;
  setPassword: (password: string) => void;
  email: string;
  currentPage?: string;
  setCurrentPage: (currentPage: string) => void;
  resetCode: string;
  setResetCode: (resetCode: string) => void;
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
        animation-name: SlideIn;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-out;
      `}
  }

  .wrapper {
    position: relative;
    margin-bottom: 1rem;
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

  @keyframes SlideIn {
    to {
      left: 0;
    }
  }
`;

const PasswordInput: React.FC<PropTypes> = ({
  password,
  setPassword,
  resetCode,
  setResetCode,
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

  const { error } = useSelector((state: RootState) => state.authReducer);
  const errorMessage = errorMessages[error as keyof typeof errorMessages];

  const dispatch = useDispatch();

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(sendResetEmail(email));
    }
  };

  const switchPasswordVisiblity = (e: React.MouseEvent<SVGSVGElement>) => {
    setPasswordHidden(!passwordHidden);
    e.stopPropagation();
  };

  const handleOnClick = () => {
    dispatch(sendResetEmail(email));
  };

  return (
    <PasswordInputBase currentPage={currentPage}>
      <FlexContainer direction={'column'} spacing={'1.8rem'}>
        <FlexContainer direction={'column'} spacing={'1.5rem'}>
          <p>{email}</p>
          <h2>New password</h2>
          <div className='wrapper'>
            <FlexContainer direction={'column'} spacing={'1.8rem'}>
              <input
                ref={inputRef}
                value={resetCode}
                onChange={(e) => setResetCode(e.target.value)}
                type={'text'}
                placeholder='Reset code'
                onKeyPress={handleOnKeyPress}
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={passwordHidden ? 'password' : 'text'}
                placeholder='New password'
                onKeyPress={handleOnKeyPress}
              />
            </FlexContainer>
            <span>{errorMessage}</span>
            <SVGIcon
              passwordHidden={passwordHidden}
              onClick={switchPasswordVisiblity}
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
          <Button onClick={handleOnClick}>Signin</Button>
        </FlexContainer>
      </FlexContainer>
    </PasswordInputBase>
  );
};

export default PasswordInput;
