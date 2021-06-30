import {useState} from 'react';
import styled from 'styled-components';

import CredentailsContainer from '../CredentialsContainer';
import EmailInput from '../signin/components/EmailInput';
import PasswordInput from '../signin/components/PasswordInput';

const SigninBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right bottom, #e9d6cf, #dadfe3, #eee7cc);
`;

const Signin = () => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<string>('email');
  
  return (
    <SigninBase>
      <CredentailsContainer>
        <div>
          <EmailInput
            email={email}
            setEmail={setEmail}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <PasswordInput
            password={password}
            setPassword={setPassword}
            email={email}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </CredentailsContainer>
    </SigninBase>
  );
};

export default Signin;
