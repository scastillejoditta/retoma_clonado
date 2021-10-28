import React from "react";
import styled from "styled-components";

const Wrapper = ({
  children,
  display,
  flexDir,
  justifyCont,
  position = 'unset',
  bottom, top, right, left,
  mbPadding = 0,
  dsPadding = 0,
  mbMargin = 0,
  dsMargin,
  maxWidth,
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
        position={position}
        bottom={bottom}
        maxWidth={maxWidth}
      >
        {children}
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.section`
    display: ${props => props.display};
    flex-direction: ${props => props.flexDir};
    justify-content: ${props => props.justifyCont};

    position: ${props => props.position};
    bottom: ${props => props.bottom};

    margin: ${props => props.mbMargin};
    padding: ${props => props.mbPadding};

    @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
      max-width: ${(props) => props.maxWidth};
      margin: ${props => props.dsMargin};
    }
`;

export default Wrapper;
