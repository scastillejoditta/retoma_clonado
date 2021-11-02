import React from "react";
import styled from "styled-components";

const Wrapper = ({
  children,
  display,
  flexDir,
  justifyCont,
  alignItems,
  position = "unset",
  bottom,
  top,
  right,
  left,
  mbPadding = 0,
  dsPadding = 0,
  mbMargin = 0,
  dsMargin,
  maxWidth,
  height,
}) => {
  return (
    <>
      <StyledWrapper
        mbPadding={mbPadding}
        dsPadding={dsPadding}
        mbMargin={mbMargin}
        dsMargin={dsMargin}
        display={display}
        flexDir={flexDir}
        justifyCont={justifyCont}
        alignItems={alignItems}
        position={position}
        bottom={bottom}
        maxWidth={maxWidth}
        height={height}
      >
        {children}
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.section`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDir};
  justify-content: ${(props) => props.justifyCont};
  align-items: ${(props) => props.alignItems};

  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};

  margin: ${(props) => props.mbMargin};
  padding: ${(props) => props.mbPadding};

  height: ${(props) => props.height};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: ${(props) => props.maxWidth};
    margin: ${(props) => props.dsMargin};
    padding: ${(props) => props.dsPadding};
  }
`;

export default Wrapper;
