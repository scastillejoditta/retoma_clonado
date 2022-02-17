import React from "react";
import styled from "styled-components";

const Wrapper = ({
  children,
  display,
  xxsDisplay,
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
  flexWrap,
  width,
  dsWidth,
  style,
  dsBackground,
  mbBackground
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
        flexWrap={flexWrap}
        xxsDisplay={xxsDisplay}
        width={width}
        style={style}
        dsWidth={dsWidth}
        dsBackground={dsBackground}
        mbBackground={mbBackground}
      >
        {children}
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.section`
  width: ${props => props.width};

  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};

  margin: ${(props) => props.mbMargin};
  padding: ${(props) => props.mbPadding};

  height: ${(props) => props.height};

  background: ${props => props.mbBackground};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: ${props => props.display};
    flex-direction: ${(props) => props.flexDir};
    justify-content: ${(props) => props.justifyCont};
    align-items: ${(props) => props.alignItems};
    width: ${props => props.dsWidth};
    
    flex-wrap: ${props => props.flexWrap};
    max-width: ${(props) => props.maxWidth};
    margin: ${(props) => props.dsMargin};
    padding: ${(props) => props.dsPadding};

    background: ${props => props.dsBackground};
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xxs}) {
    display: ${(props) => props.xxsDisplay};
  }
`;

export default Wrapper;
