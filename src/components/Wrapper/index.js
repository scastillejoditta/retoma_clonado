import React from "react";
import {StyledWrapper} from './styles'

const Wrapper = ({
  children,
  display,
  xxsDisplay,
  flexDir,
  justifyCont,
  alignItems,
  dsPosition,
  mbPosition,
  bottom,
  top,
  right,
  left,
  mbPadding = 0,
  dsPadding = 0,
  mbMargin = 0,
  dsMargin,
  maxWidth,
  dsHeight,
  mbHeight,
  flexWrap,
  width,
  dsWidth,
  style,
  dsBackground,
  mbBackground,
  bgImage
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
        dsPosition={dsPosition}
        mbPosition={mbPosition}
        bottom={bottom}
        top={top}
        right={right}
        left={left}
        maxWidth={maxWidth}
        dsHeight={dsHeight}
        mbHeight={mbHeight}
        flexWrap={flexWrap}
        xxsDisplay={xxsDisplay}
        width={width}
        style={style}
        dsWidth={dsWidth}
        dsBackground={dsBackground}
        mbBackground={mbBackground}
        bgImage={bgImage}
      >
        {children}
      </StyledWrapper>
    </>
  );
};

export default Wrapper;
