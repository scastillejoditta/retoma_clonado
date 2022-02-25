import React from "react";
import {StyledTitle} from './styles'

const Title = ({
  children,
  dsColor,
  mbColor,
  mobileFontSize = "",
  desktopFontSize = "",
  padding = 0,
  margin = 0,
  weight,
  dsMargin,
  textAlign = 'unset',
  style
}) => {
  return (
    <>
      <StyledTitle
        mobileFontSize={mobileFontSize}
        desktopFontSize={desktopFontSize}
        dsColor={dsColor}
        mbColor={mbColor}
        padding={padding}
        margin={margin}
        dsMargin={dsMargin}
        weight={weight}
        textAlign={textAlign}
        style={style}
      >
        {children}
      </StyledTitle>
    </>
  );
};

export default Title;
