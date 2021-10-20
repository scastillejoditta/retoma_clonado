import React from "react";
import styled from "styled-components";

const Container = ({
  children,
  background,
  mobilePadding,
  desktopPadding,
  margin,
  maxWidth,
}) => {
  return (
    <Wrapper
      background={background}
      mobilePadding={mobilePadding}
      desktopPadding={desktopPadding}
      margin={margin}
      maxWidth={maxWidth}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: ${(props) => props.mobilePadding};
  margin: ${(props) => props.margin};
  background: ${(props) => props.theme.colors[props.background]};

  position: relative;
  z-index: -1;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: ${(props) => props.theme.maxWidth[props.maxWidth]};
    padding: ${(props) => props.desktopPadding};
  }
`;

export default Container;
