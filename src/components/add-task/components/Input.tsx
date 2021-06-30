import styled from 'styled-components';

export const Input = styled.input<{ ref?: React.RefObject<HTMLInputElement> }>`
padding: 1.6rem 5.5rem 1.6rem 4rem;
width: 100%;
border: none;
border-bottom: 1px solid gray;
outline: none;
z-index: 50;
user-select: text;
font-family: Lucida;
font-size: 1.4rem;

::placeholder {
  font-family: Montserrat;
  font-weight: 300;
}

:focus {
  border-color: blue;
}
`;