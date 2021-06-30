import { css } from 'styled-components';

export const DashboardStyle = css`
  flex-grow: 1;
  overflow-x: auto;
  padding: 3rem;

  h3 {
    font-weight: 500;
    font-family: Lucida;
    cursor: context-menu;
    user-select: none;
  }

  > span {
    font-size: 1.2rem;
    font-weight: 400;
    cursor: context-menu;
    user-select: none;
  }
  
  @media (max-width: 770px) {
    position: absolute;
    left: 5rem;
    width: 90%;
  }
`;
