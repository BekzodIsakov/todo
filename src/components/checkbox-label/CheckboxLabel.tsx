import styled, { css } from 'styled-components';

interface PropTypes {
  disabled?: boolean;
  textSize?: string;
  textColor?: string;
  marginLeft?: string;
  marginRight?: string;
  onClick: () => void;
  tabIndex?: number;
}

const CheckboxLabelBase = styled.div<PropTypes>`
  display: inline-block;
  font-size: ${(props) => props.textSize || '1.4rem'};
  line-height: 1.8rem;
  user-select: none;
  cursor: pointer;
  color: ${(props) => props.textColor || '#223345'};

  margin-right: ${(props) => props.marginRight && props.marginRight};
  margin-left: ${(props) => props.marginLeft && props.marginLeft};

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      color: #c6cccf;
    `}
`;

const CheckboxLabel: React.FC<PropTypes> = ({
  children,
  disabled,
  textColor,
  marginLeft,
  marginRight,
  onClick,
  tabIndex,
}) => {
  return (
    <CheckboxLabelBase
      disabled={disabled}
      textColor={textColor}
      marginLeft={marginLeft}
      marginRight={marginRight}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {children}
    </CheckboxLabelBase>
  );
};

export default CheckboxLabel;
