import { useState } from 'react';
import styled from 'styled-components';
// import Checkbox from '@bit/bekzod.components.checkbox';

import CredentialsContainer from '../CredentialsContainer';
import EmailInput from './components/EmailInput';
import PasswordInput from './components/PasswordInput';

const SignupBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right bottom, #e9d6cf, #dadfe3, #eee7cc);
`;

const Signup = () => {
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<string>('email');

  return (
    <SignupBase>
      <CredentialsContainer>
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
      </CredentialsContainer>
    </SignupBase>
  );
};

export default Signup;
