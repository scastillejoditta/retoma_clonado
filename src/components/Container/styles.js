import styled from 'styled-components'

const Wrapper = styled.main`
  width: ${props => props.width};
  
  padding: ${(props) => props.mobilePadding};
  margin: ${(props) => props.margin};
  background: ${(props) => props.theme.colors[props.background]};

  height: ${(props) => props.mbHeight};

  position: relative;
  z-index: ${props => props.zIndex};

  border: ${props => props.border};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: ${props => props.display};
    flex-wrap: ${props => props.flexWrap};
    justify-content: ${props => props.justifyCont};

    width: ${props => props.dsWidth};
    max-width: ${(props) => props.theme.breakpoints[props.maxWidth]};
    padding: ${(props) => props.desktopPadding};
    margin: ${(props) => props.dsMargin};
    height: ${(props) => props.dsHeight};
  }
`;

export {Wrapper}