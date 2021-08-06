import styled from 'styled-components';
import { useLocation } from 'react-router';

import { GetTaskQuantity } from '../../utils';
import FlexContainer from '../FlexContainer';
import ToggleButton from './components/ToggleButton';
import SideNavLink, { LinkText } from './components/SideNavLink';
import { IconSVG } from '../../components/IconSVG';
import { TaskQuantity } from './components/SideNavLink';

interface PropTypes {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

const SideNavBase = styled.div<{ isExpanded: boolean }>`
  position: relative;
  width: ${(props) => (props.isExpanded ? '20rem' : '4.8rem')};
  height: 100%;
  border-right: 1px solid #eaeaea;
  overflow-x: hidden;
  transition: width 0.2s;
  z-index: 60;
  background-color: #f4f4f4;

  @media (max-width: 770px) {
    position: absolute;
  }
`;

const SideNav: React.FC<PropTypes> = ({ isExpanded, setIsExpanded }) => {
  const { pathname } = useLocation();

  return (
    <SideNavBase isExpanded={isExpanded}>
      <ToggleButton isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <FlexContainer direction={'column'}>
        <SideNavLink isActive={pathname === '/myDay'} to={'/myDay'}>
          <IconSVG iconName={'sun-icon'} />
          <LinkText>My Day</LinkText>
          <TaskQuantity>{GetTaskQuantity('myDay')}</TaskQuantity>
        </SideNavLink>
        <SideNavLink isActive={pathname === '/important'} to={'/important'}>
          <IconSVG iconName={'star-icon'} />
          <LinkText>Important</LinkText>
          <TaskQuantity>{GetTaskQuantity('important')}</TaskQuantity>
        </SideNavLink>
        <SideNavLink isActive={pathname === '/planned'} to={'/planned'}>
          <IconSVG iconName={'calendar-icon'} />
          <LinkText>Planned</LinkText>
          <TaskQuantity>{GetTaskQuantity('planned')}</TaskQuantity>
        </SideNavLink>
        <SideNavLink isActive={pathname === '/tasks'} to={'/tasks'}>
          <IconSVG iconName={'home-icon'} />
          <LinkText>Tasks</LinkText>
          <TaskQuantity>{GetTaskQuantity('tasks')}</TaskQuantity>
        </SideNavLink>
      </FlexContainer>
    </SideNavBase>
  );
};

export default SideNav;
