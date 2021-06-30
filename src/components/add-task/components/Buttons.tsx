import styled from 'styled-components';

export const AddButton = styled.button<{ isVisible: boolean }>`
position: absolute;
top: 50%;
right: 0;
transform: translateY(-50%);
padding: 0.5rem;
cursor: pointer;
font-size: 1rem;
font-family: Montserrat;
font-weight: 500;
color: ${(props) => props.theme.colors.blue50};
border: none;
background-color: transparent;
visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`;

export const IconButton = styled.button`
position: absolute;
top: 50%;
left: 0;
transform: translateY(-50%);
font-size: 4rem;
cursor: pointer;
background-color: transparent;
border: none;
height: 100%;
color: gray;
padding: 0 0.7rem;
display: flex;
align-items: center;
`;