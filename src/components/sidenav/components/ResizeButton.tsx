import React from 'react';
import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';

interface PropTypes {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

const ResizeButtonBase = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  margin: 2.5rem 0 2.5rem 0.8rem;
  border: none;
  cursor: pointer;
  background-color: transparent;

  :hover {
    background-color: #fafafa;
  }
`;

const ResizeButton: React.FC<PropTypes> = ({ isExpanded, setIsExpanded }) => {
  return (
    <ResizeButtonBase onClick={() => setIsExpanded(!isExpanded)}>
      <ButtonIcon isExpanded={isExpanded} />
    </ResizeButtonBase>
  );
};

export default ResizeButton;
