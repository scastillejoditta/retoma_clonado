import React from "react";
import {Wrapper} from './styles'

const Container = ({
  children,
  background,
  mobilePadding,
  desktopPadding,
  margin,
  maxWidth,
  mbHeight,
  dsHeight,
  display,
  flexWrap,
  flexDir,
  zIndex,
  dsMargin,
  width,
  justifyCont,
  dsWidth
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
      display={display}
      flexWrap={flexWrap}
      flexDir={flexDir}
      dsMargin={dsMargin}
      zIndex={zIndex}
      width={width}
      justifyCont={justifyCont}
      dsWidth={dsWidth}
    >
      {children}
    </Wrapper>
  );
};

export default Container;
