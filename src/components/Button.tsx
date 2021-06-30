import styled from 'styled-components';

interface PropTypes {
  isDisabled?: boolean;
  color?: string;
  bgColor?: string;
  onHoverStyle?: { bgColor?: string };
  onClick?: () => void;
  ref?: any;
}

export const ButtonBase = styled.button<PropTypes>`
  align-self: flex-end;
  width: 10.8rem;
  padding: 0.8rem 0;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;
  cursor: pointer;
  user-select: none;
  border: none;
  outline: none;
    color: ${(props) => (props.color ? props.color : 'white')};
  transition: background-color 0.2s, transform 10ms;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.colors.blue100};

  :disabled {
    background: ${(props) => props.theme.colors.gray100};
    pointer-events: none;
  }

  :hover {
    background-color: ${(props) =>
      props.onHoverStyle
        ? props.onHoverStyle.bgColor
        : props.theme.colors.blue200};
  }

  :focus {
    outline: 0.2rem solid ${(props) => props.theme.colors.dark50};
    outline-offset: -0.1rem;
  }

  :active {
    transform: scaleX(0.97);
    outline: none;
  }
`;

const Button: React.FC<PropTypes> = ({
  children,
  isDisabled,
  color,
  bgColor,
  onHoverStyle,
  onClick,
}) => {
  return (
    <ButtonBase
      onClick={onClick}
      color={color}
      bgColor={bgColor}
      onHoverStyle={onHoverStyle}
      disabled={isDisabled}
    >
      {children}
    </ButtonBase>
  );
};

export default Button;
