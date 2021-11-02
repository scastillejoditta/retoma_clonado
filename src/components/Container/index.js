import React from "react";
import styled from "styled-components";

const Container = ({
  children,
  background,
  mobilePadding,
  desktopPadding,
  margin,
  maxWidth,
  mbHeight,
  dsHeight,
  zIndex
}) => {
  return (
    <Wrapper
      background={background}
      mobilePadding={mobilePadding}
      desktopPadding={desktopPadding}
      margin={margin}
      mbHeight={mbHeight}
      dsHeight={dsHeight}
      maxWidth={maxWidth}
      zIndex={zIndex}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: ${(props) => props.mobilePadding};
  margin: ${(props) => props.margin};
  background: ${(props) => props.theme.colors[props.background]};

  height: ${(props) => props.mbHeight};

  position: relative;
  // z-index: -1;
  z-index: ${props => props.zIndex};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: ${(props) => props.theme.maxWidth[props.maxWidth]};
    padding: ${(props) => props.desktopPadding};
    height: ${(props) => props.dsHeight};
  }
`;

export default Container;
