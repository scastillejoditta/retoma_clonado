import styled from 'styled-components'


const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors[props.mbColor]};
  font-size: ${(props) => props.theme.fontSizes[props.mobileFontSize]};
  font-weight: ${props => props.weight};

  padding: ${(props) => props.padding};

  margin: ${(props) => props.margin};

  text-align: ${props => props.textAlign};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes[props.desktopFontSize]};
    color: ${(props) => props.theme.colors[props.dsColor]};
    margin: ${props => props.dsMargin ? props.dsMargin : props.margin};
  }
`;

export {StyledTitle}