import React from "react";
import styled from "styled-components";

const Title = ({
  children,
  dsColor = "",
  mbColor = '',
  mobileFontSize = "",
  desktopFontSize = "",
  padding = 0,
  margin = 0,
  weight,
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
        weight={weight}
        textAlign={textAlign}
        style={style}
      >
        {children}
      </StyledTitle>
    </>
  );
};

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors[props.color]};
  font-size: ${(props) => props.theme.fontSizes[props.mobileFontSize]};
  font-weight: ${props => props.weight};

  padding: ${(props) => props.padding};

  margin: ${(props) => props.margin};

  text-align: ${props => props.textAlign};
  color: ${props => props.mbColor};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    color: ${props => props.dsColor};
  }
`;

export default Title;
