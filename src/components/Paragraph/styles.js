import styled from 'styled-components'

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
    margin: ${(props) => props.desktopMargin || 0};
    max-width: ${(props) => props.maxWidth};
  }
`;

export {StyledParagraph}