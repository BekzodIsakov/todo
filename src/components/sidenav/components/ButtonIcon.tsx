import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../IconSVG';

interface PropTypes {
  isExpanded: boolean;
}

const ButtonIconBase = styled.svg<PropTypes>`
  width: 1.6rem;
  height: 1.6rem;
  fill: ${(props) => props.theme.colors.blue200};
  transform: ${(props) => !props.isExpanded && 'rotateY(180deg)'};
`;

const ButtonIcon: React.FC<PropTypes> = ({ isExpanded }) => {
  return (
    <ButtonIconBase isExpanded={isExpanded}>
      <Icon iconName={'chevron-icon'} />
    </ButtonIconBase>
  );
};

export default ButtonIcon;
