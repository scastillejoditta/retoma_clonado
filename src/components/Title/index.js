import React from "react";
import styled from "styled-components";

const Title = ({
  children,
  color = "",
  mobileFontSize = "",
  desktopFontSize = "",
  padding = 0,
  margin = 0,
  weight,
  textAlign = 'unset'
}) => {
  return (
    <>
      <StyledTitle
        mobileFontSize={mobileFontSize}
        desktopFontSize={desktopFontSize}
        color={color}
        padding={padding}
        margin={margin}
        weight={weight}
        textAlign={textAlign}
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

  text-align: ${props => props.textAlign}
`;

export default Title;
