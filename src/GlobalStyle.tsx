import { createGlobalStyle, css } from 'styled-components';
import './index.css'; //needed to recognize 'Monstserrat' as a font family

export const colors = {
  gray: '#ECEDEE',
  gray50: '#D7D7D7',
  gray100: '#C2C2C2',
  gray200: '#afafaf',
  gray300: '#8A8A8A',
  gray400: '#737373',
  gray500: '#666666',
  gray600: '#34373d',
  green: '#6CB100',
  blue: '#267FEF',
  blue50: '#465EFC',
  blue100: '#0067B8',
  blue200: '#005da6',
  red: '#E23C25',
  dark: '#2D2D2F',
  dark50: '#242426',
  black: '#1B1B1B',
};

export const SlideInAnimation = css`
  animation-name: SlideIn;
  animation-duration: 0.25s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
`;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    overflow-y: hidden;
  }

  body {
    font-family: Montserrat, sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    overflow-y: hidden;
    width: 100vw;
    height: 100vh;
    position: relative;
  }

  button {
    font-family: Montserrat, sans-serif;
  }

  @keyframes SlideIn {
    to {
      left: 0;
    }
  }
`;

export default GlobalStyle;
