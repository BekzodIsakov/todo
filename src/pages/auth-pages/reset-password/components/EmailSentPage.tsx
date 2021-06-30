import React, {useEffect} from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router';

import Button from '../../../../components/Button';
import FlexContainer from '../../../../components/FlexContainer';
import LinkText from '../../../../components/LinkText';
import { SlideInAnimation } from '../../../../GlobalStyle';

interface PropTypes {
  currentPage: string;
}

const EmailSentBase = styled.div<PropTypes>`
  visibility: ${(props) =>
    props.currentPage === 'EmailSentPage' ? 'visible' : 'hidden'};
  
  & > div {
    position: relative;
    left: 20rem;
    ${(props) =>
      props.currentPage === 'EmailSentPage' &&
      css`
        ${SlideInAnimation}
      `}
  }
`;

const EmailSent: React.FC<PropTypes> = ({ currentPage }) => {
  const history = useHistory();
  
  return (
    <EmailSentBase currentPage={currentPage}>

      <h2>Check your email</h2>
      <FlexContainer direction={'column'} spacing={'3rem'}>
      <p>We've sent you an email. Follow the link in the email to change your password. And <LinkText to={''}>sign in</LinkText> to your account with your new password.</p>
      <Button onClick={() => history.replace('/')}>Sign In</Button>
      </FlexContainer>
    </EmailSentBase>
  );
};

export default EmailSent;
