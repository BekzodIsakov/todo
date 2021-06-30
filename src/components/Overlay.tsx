import styled from 'styled-components';

interface PropTypes {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

const OverlayBase = styled.div<{
  isExpanded: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  visibility: hidden;
  background-color: ${(props) => props.isExpanded && `rgba(51, 51, 51, 0.5)`};

  @media (max-width: 770px) {
    visibility: ${(props) => props.isExpanded && 'visible'};
  }
`;

const Overlay: React.FC<PropTypes> = ({ isExpanded, setIsExpanded }) => {
  return (
    <OverlayBase
      isExpanded={isExpanded}
      onClick={() => setIsExpanded(!isExpanded)}
    />
  );
};

export default Overlay;