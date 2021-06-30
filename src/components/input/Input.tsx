import { useRef, useEffect } from 'react';
import styled from 'styled-components';

//remove question marks from props in PropTypes
interface InputPropTypes {
  autoFocus?: boolean;
  color?: string;
  value?: string;
  isDisabled?: boolean;
  placeholder?: string;
  required?: boolean;
  columns?: number;
  columnReverse?: boolean;
  onChange?: () => void;
  size?: 'l' | 'm' | 's';
}

interface InputBasePropTypes {
  autoFocus?: boolean;
  color?: string;
  isDisabled?: boolean;
  required?: boolean;
  columns?: number;
  columnReverse?: boolean;
  onChange?: () => void;
  size?: 'l' | 'm' | 's';
  tabIndex?: any;
}

export const InputBase = styled.div<InputBasePropTypes>`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  height: ${props => props.size === 'l' ? '4rem' : props.size === 'm' ? '3.2rem' : props.size === 's' ? '2.4rem' : '4rem'};
  border: 1px solid #DBDEDF;
`;

interface TextFieldProps {
  size?: 'l' | 'm' | 's',
} 

const TextField = styled.input<TextFieldProps>`
  padding-top:  ${props => props.size === 'm' ? '.6rem' : props.size === 's' ? '.4rem' : '.8rem'};
  padding-left:  ${props => props.size === 'm' ? '1.33rem' : props.size === 's' ? '0.93rem' : '1.56rem'};
  padding-bottom:  ${props => props.size === 'm' ? '.6rem' : props.size === 's' ? '.4rem' : '.8rem'};
  height: 100%;

  ::placeholder {
    color: #A7ADB2;
    font-size: 1.4rem;
    line-height: 2.1;
  }

  ::focus {
    outline: 1px solid blue;
  }
`;

export const Input: React.FC<InputPropTypes> = ({
  children,
  placeholder,
  size,
  autoFocus,
  isDisabled,
}) => {
  const InputRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (autoFocus) {
      if (!InputRef.current) return;
      InputRef.current.focus();
    }
  }, []);
  
  return (
    <InputBase tabIndex={autoFocus && '0'} ref={InputRef} size={size} isDisabled={isDisabled}>
      <TextField type='text' placeholder={placeholder} />
      {children}
    </InputBase>
  );
};
