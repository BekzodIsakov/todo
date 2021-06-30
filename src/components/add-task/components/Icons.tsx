import styled from 'styled-components';
import { IconSVG } from '../../IconSVG';

export const CircleIcon = styled.span`
  width: 1.8rem;
  height: 1.8rem;
  border: 0.5px solid gray;
  border-radius: 50%;
  cursor: pointer;
  display: block;
`;

export const PlusIcon = () => {
  return(
    <IconSVG iconName={'plus-icon'} iconColor={'#3459c1'} />
  )
}