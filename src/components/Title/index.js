import React from "react";
import styled from "styled-components";

const Title = ({
  children,
  color = "",
  mobileFontSize = "",
  desktopFontSize = "",
  padding = 0,
  margin = 0,
  weight
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
`;

export default Title;
