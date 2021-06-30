import React from 'react';
import styled, { css } from 'styled-components';

type PropTypes = {
  width?: string;
  height?: string;
  direction?: 'row' | 'column';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline';
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignSelf?: 'flext-start' | 'center' | 'flex-end';
  spacing?: string;
  hasSpacing?: boolean;
};

export const FlexContainerBase = styled.div<PropTypes>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => props.height && props.height};

  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.alignItems};
  align-content: ${(props) => props.alignContent};
  align-self: ${(props) => props.alignSelf};
  position: relative;

  & > *:not(:last-child) {
    margin-right: ${(props) => props.direction !== 'column' && props.spacing};
    margin-bottom: ${(props) => props.direction === 'column' && props.spacing};
  }

  ${(props) =>
    props.hasSpacing === false &&
    css`
      & > *:not(:last-child) {
        margin: 0;
      }
    `}
`;

const FlexContainer: React.FC<PropTypes> = ({
  width,
  height,
  direction,
  justify,
  alignItems,
  alignContent,
  alignSelf,
  spacing,
  children,
  hasSpacing,
}) => {
  return (
    <FlexContainerBase
      width={width}
      height={height}
      direction={direction}
      justify={justify}
      alignItems={alignItems}
      alignContent={alignContent}
      alignSelf={alignSelf}
      spacing={spacing}
      hasSpacing={hasSpacing}
    >
      {children}
    </FlexContainerBase>
  );
};

export default FlexContainer;
