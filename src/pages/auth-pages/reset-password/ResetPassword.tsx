import {useState} from 'react';
import styled from 'styled-components';

import CredentailsContainer from '../CredentialsContainer';
import ResetEmail from './components/ResetEmail';
import EmailSentPage from './components/EmailSentPage';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';

const ResetPasswordBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const ResetPassword = () => {
  const { email } = useSelector((state: RootState) => state.userReducer);
  
  const [userEmail, setUserEmail] = useState<string>(email);
  const [currentPage, setCurrentPage] = useState<string>('email');
  
  return (
    <ResetPasswordBase>
      <CredentailsContainer>
        <div>
          <ResetEmail
            email={userEmail}
            setEmail={setUserEmail}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <EmailSentPage 
            currentPage={currentPage}
          />
        </div>
      </CredentailsContainer>
    </ResetPasswordBase>
  );
};

export default ResetPassword;
