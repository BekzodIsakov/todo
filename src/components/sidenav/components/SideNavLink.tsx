import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface PropTypes {
  to: string;
  isActive: boolean;
}

export const LinkText = styled.span`
  font-weight: 400;
  font-family: Montserrat;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.gray600};
`;

export const TaskQuantity = styled.span`
  font-weight: 300;
  font-size: 1.3rem;
  justify-self: end;
`;

const SideNavLinkBase = styled(NavLink)<{ isLinkActive: boolean }>`
  display: grid;
  grid-template-columns: max-content max-content 1fr;
  grid-column-gap: 1.6rem;
  padding: 0.9rem 1.5rem;

  text-decoration: none;
  cursor: pointer;

  ${(props) =>
      props.isLinkActive &&
      css`
        background-color: ${props.theme.colors.gray};

        span {
          font-weight: 500;
          color: ${props.theme.colors.blue50};
        }
      `}
    :hover {
    background-color: #fafafa;

    :active {
      color: initial;
    }
  }
`;

const SideNavLink: React.FC<PropTypes> = ({ children, to, isActive }) => {
  return (
    <SideNavLinkBase isLinkActive={isActive} to={to}>
      {children}
    </SideNavLinkBase>
  );
};

export default SideNavLink;
