import styled from 'styled-components';

import { ReactComponent as MicrosoftLogo } from '../../assets/images/microsoft-logo.svg';

const CredentialsContainerBase = styled.div`
  width: 44rem;
  height: 35rem;
  padding: 4.4rem;
  box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background: white;
  
  & > div {
    position: relative;
    margin-top: 2rem;
  }

  h2 {
    font-weight: 500;
  }

  h3 {
    font-weight: 400;
    font-size: 1.4rem;
  }

  p {
    margin-top: 1.4rem;
    font-weight: 500;
    font-size: 1.5rem;
    color: #666666;
  }

  @media (max-width: 600px) {
    width: 100vw;
    height: 100vh;
  }

  input {
    width: 100%;
    padding: 0.4rem 1rem 0.4rem 0;
    border: none;
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray300};
    outline: none;
    font-family: Montserrat;
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.black};

    &:focus {
      border-color: ${(props) => props.theme.colors.blue100};
    }

    &:hover {
      border-color: initial;
    }
  }

  span {
    font-size: 1.3rem;
  }
`;

const CredentialsContainer: React.FC = ({children}) => {
  return (
    <CredentialsContainerBase>
      <MicrosoftLogo />
      {children}
    </CredentialsContainerBase>
  );
};

export default CredentialsContainer;
