import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Button from '../../../../components/Button';
import FlexContainer from '../../../../components/FlexContainer';
import LinkText from '../../../../components/LinkText';

interface PropTypes {
  email: string;
  currentPage?: string;
  setEmail: (email: string) => void;
  setCurrentPage: (currentPage: string) => void;
}

const EmailInputBase = styled.div<{ currentPage?: string }>`
  display: ${(props) => (props.currentPage === 'email' ? 'initial' : 'none')};
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
    document.title = 'Sign in to your account';
    
    return () => {
      document.title = 'To-do app';
    };
  }, [currentPage]);
  
  useEffect(() => {
    validateEmail(email);
  }, [email])

  useEffect(() => {
    inputRef.current?.focus();
    document.title = 'Sign up!';
    
    return () => {
      document.title = 'To-do app';
    };
  }, [currentPage]);

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
      setCurrentPage('password');
    }
  };

  return (
    <EmailInputBase currentPage={currentPage}>
      <FlexContainer direction={'column'} spacing='2rem'>
        <h2>Sign up</h2>
        <input
          ref={inputRef}
          type='text'
          placeholder='Email'
          value={email}
          onChange={handleOnChange}
          onKeyPress={handleOnKeyPress}
        />
        <span>
          Have an account? <LinkText to={'/'}>Sign in</LinkText>
        </span>

        <Button
          isDisabled={!emailValid}
          onClick={() => {
            setCurrentPage('password');
          }}
        >
          Next
        </Button>
      </FlexContainer>
    </EmailInputBase>
  );
};

export default EmailInput;
