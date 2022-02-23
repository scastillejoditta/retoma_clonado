import React from "react";
import {StyledParagraph} from './styles'

const Paragraph = ({
  children,
  color,
  mobileFontSize,
  desktopFontSize,
  mobilePadding = "",
  desktopPadding = "",
  mobileMargin = "",
  desktopMargin = "",
  maxWidth,
  weight,
  style
}) => {
  return (
    <>
      <StyledParagraph
        mobileFontSize={mobileFontSize}
        desktopFontSize={desktopFontSize}
        color={color}
        mobilePadding={mobilePadding}
        desktopPadding={desktopPadding}
        mobileMargin={mobileMargin}
        desktopMargin={desktopMargin}
        maxWidth={maxWidth}
        weight={weight}
        style={style}
      >
        {children}
      </StyledParagraph>
    </>
  );
};

export default Paragraph;
