import React from 'react';
import styled from 'styled-components';

interface PropTypes {
  isChecked: boolean;
  onClick?: () => void;
}

const RadioButtonBase = styled.button<PropTypes>`
  width: 1.8rem;
  height: 1.8rem;
  margin-left: 0.5rem;
  margin-right: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.blue};
  border-radius: 50%;
  cursor: pointer;
  background: ${(props) =>
    props.isChecked ? props.theme.colors.blue : 'transparent'};

  :focus {
    outline-offset: 0.6rem;
    outline-color: ${(props) => props.theme.colors.blue50};
  }
`;

const RadioButton: React.FC<PropTypes> = ({ isChecked, onClick }) => {
  return (
    <RadioButtonBase tabIndex={0} isChecked={isChecked} onClick={onClick} />
  );
};

export default RadioButton;
