import React from "react";
import {StyledWrapper} from './styles'

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

export default Wrapper;
