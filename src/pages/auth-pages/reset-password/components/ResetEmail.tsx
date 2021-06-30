import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Button from '../../../../components/Button';
import FlexContainer from '../../../../components/FlexContainer';
import LinkText from '../../../../components/LinkText';
import { sendResetEmail } from '../../../../services/auth';

interface PropTypes {
  email: string;
  currentPage?: string;
  setEmail: (email: string) => void;
  setCurrentPage: (currentPage: string) => void;
}

const EmailInputBase = styled.div<{ currentPage?: string }>`
  display: ${(props) => (props.currentPage === 'email' ? 'initial' : 'none')};

  h3 {
    color: ${(props) => props.theme.colors.gray300};
  }
`;

const EmailInput: React.FC<PropTypes> = ({
  email,
  currentPage,
  setEmail,
  setCurrentPage,
}) => {
  const [emailValid, setEmailValid] = useState<boolean>(false);

  useEffect(() => {
    inputRef.current?.focus();
    document.title = 'Reset Password';
  }, []);

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const validateEmail = (email: string) => {
    const regExp = /\S+@\S+\.\S+/;
    setEmailValid(regExp.test(String(email).toLowerCase()));
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendResetEmail(email);
      setCurrentPage('EmailSentPage');
    }
  };

  const handleOnClick = () => {
    sendResetEmail(email);
    setCurrentPage('EmailSentPage');
  };

  return (
    <EmailInputBase currentPage={currentPage}>
      <FlexContainer direction={'column'} spacing='2rem'>
        <FlexContainer direction={'column'} spacing='.5rem'>
          <h2>Forgot Password?</h2>
          <h3>
            No worries. We will send you an email containing a link to reset your password.
          </h3>
        </FlexContainer>
        <input
          ref={inputRef}
          type='text'
          placeholder='Email'
          value={email}
          onChange={handleOnChange}
          onKeyPress={handleOnKeyPress}
        />
        <span>
          <LinkText to={'/'}>Sign in</LinkText> |&nbsp;
          <LinkText to={'/signup'}>Sign up</LinkText>
        </span>

        <Button isDisabled={!emailValid} onClick={() => handleOnClick()}>
          Next
        </Button>
      </FlexContainer>
    </EmailInputBase>
  );
};

export default EmailInput;
