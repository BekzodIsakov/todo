import styled from 'styled-components';
import FlexContainer from '../components/FlexContainer';

const NotFoundPageBase = styled.div`
  margin-top: 15rem;
  font-size: 3rem;
  text-align: center;
  
  h3 {
    color: ${(props) => props.theme.colors.blue100};
  }
  
  p {
    font-size: 4rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.gray200};
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageBase>
      <FlexContainer direction={'column'} spacing={'1.5rem'} alignItems={'center'} justify={'center'}>
        <h3>404 error</h3>
        <p>Page Not Found</p>
      </FlexContainer>
    </NotFoundPageBase>
  );
};

export default NotFoundPage;
