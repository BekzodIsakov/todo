import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface PropTypes {
  to: string;
}

const LinkTextBase = styled(Link)<PropTypes>`
  width: max-content;
  font-size: 1.3rem;
  font-weight: 400;
  text-decoration: none;
  color: ${(props) => props.theme.colors.blue100};

  &:hover {
    text-decoration: underline;
  }
`;

const LinkText: React.FC<PropTypes> = ({ children, to }) => {
  return <LinkTextBase to={to}>{children}</LinkTextBase>;
};

export default LinkText;
