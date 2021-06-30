import styled from 'styled-components';
import sprite from '../assets/icons/sprite.svg';

const IconSVGBase = styled.svg<{ iconColor?: string }>`
  width: 1.6rem;
  height: 1.6rem;
  fill: ${(props) => props.iconColor};
`;

interface PropTypes {
  iconName: string;
  iconColor?: string;
}

export const IconSVG: React.FC<PropTypes> = ({ iconName, iconColor }) => {
  return (
    <IconSVGBase iconColor={iconColor}>
      <use xlinkHref={`${sprite}#${iconName}`} />
    </IconSVGBase>
  );
};

export const Icon: React.FC<{ iconName: string }> = ({ iconName }) => {
  return <use xlinkHref={`${sprite}#${iconName}`} />;
};
