import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import {IconSVG, MinusIcon} from './Icons';

interface PropTypes {
  checked: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  bgColor?: string;
  iconColor?: string;
  onClick: () => void;
  tabIndex?: any;
}

export const CheckboxBase = styled.div<PropTypes>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: top; //without this line of code checkbox jumps up n down on click

  width: 1.8rem;
  height: 1.8rem;
  border-radius: 0.3rem;
  outline: none;
  box-shadow: inset 0 0 0 0.2rem
    ${(props) => (props.checked ? '#11A1FD' : '#a6c1d3')};
  overflow: hidden;
  cursor: pointer;
  background-color: ${(props) => (props.checked ? '#11A1FD' : '#ffffff')};

  &:focus {
    background-color: ${(props) => (props.checked ? '#0C7DD9' : '#ffffff')};
    box-shadow: inset 0 0 0 0.2rem
      ${(props) => (props.checked ? '#085DB6' : '#7d9eb5')};
  }

  &:hover {
    background-color: ${(props) => (props.checked ? '#4CC3FD' : '#ffffff')};
    box-shadow: inset 0 0 0 0.2rem
      ${(props) => (props.checked ? '#4CC3FD' : '#11A1FD')};
  }

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      background-color: ${
        props.checked
          ? props.indeterminate
            ? '#E0E8ed'
            : '#EAEFF3'
          : '#F5f7f9'};
      box-shadow: inset 0 0 0 0.2rem
        ${props.checked
          ? props.indeterminate
            ? '#E0E8ed'
            : '#EAEFF3'
          : '#EAEFF3'};
    `}
`;

CheckboxBase.defaultProps = {
  theme: {
    colors: {
      blue50: '#4CC3FD',
      blue100: '#11A1FD',
      blue200: '#0C7DD9',
      blue300: '#085DB6',
      gray50: '#F5f7f9',
      gray100: '#EAEFF3',
      gray200: '#E0E8ed',
      gray300: '#a6c1d3',
      gray400: '#7d9eb5',
      black: '#000000',
    },
  },
};



const Checkbox: React.FC<PropTypes> = ({ checked, indeterminate, onClick, iconColor, disabled }) => {
  const btnRef = useRef<HTMLDivElement | null>(null);

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  //to get rid of focus
  const handleOnMouseUp = () => {
    btnRef.current?.blur();
  };

  return (
    <CheckboxBase
      disabled={disabled}
      ref={btnRef}
      checked={checked}
      indeterminate
      onClick={onClick}
      onKeyDown={handleOnKeyDown}
      onMouseUp={handleOnMouseUp}
      tabIndex='0'
    >
      {checked ? indeterminate ? <MinusIcon /> : <IconSVG iconColor={iconColor} /> : null}
    </CheckboxBase>
  );
};

export default Checkbox;
