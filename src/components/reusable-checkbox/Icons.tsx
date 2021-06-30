import styled from 'styled-components';
import sprite from './sprite.svg';

const IconSVGBase = styled.svg<{ iconColor?: string }>`
  fill: ${(props) => props.iconColor || '#ffffff'};
  width: 1.2rem;
  height: 1.2rem;
`;

export const IconSVG: React.FC<{ iconColor?: string }> = ({ iconColor }) => {
  return (
    <IconSVGBase iconColor={iconColor}>
      <use xlinkHref={`${sprite}#${'checkmark'}`} />
    </IconSVGBase>
  );
};

export const MinusIcon = styled.div`
  width: 1rem;
  height: 0.25rem;
  border-radius: 0.1rem;
  background-color: #ffffff;
`;
