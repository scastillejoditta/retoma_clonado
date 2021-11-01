import React from "react";
import styled from "styled-components";

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
      >
        {children}
      </StyledParagraph>
    </>
  );
};

const StyledParagraph = styled.p`
  color: ${(props) => props.theme.colors[props.color]};
  font-size: ${(props) => props.theme.fontSizes[props.mobileFontSize]};
  padding: ${(props) => props.mobilePadding};
  line-height: 1.5;
  margin: ${(props) => props.mobileMargin};
  font-weight: ${(props) => props.weight};

  font-weight: ${(props) => props.weight};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: ${(props) => props.theme.fontSizes[props.desktopFontSize]};
    padding: ${(props) => props.desktopPadding};
    margin: ${(props) => props.desktopMargin};
    max-width: ${(props) => props.maxWidth};
  }
`;

export default Paragraph;
