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
  dsMaxWidth,
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
        dsMaxWidth={dsMaxWidth}
        weight={weight}
        style={style}
      >
        {children}
      </StyledParagraph>
    </>
  );
};

export default Paragraph;
