import styled from 'styled-components'

const StyledWrapper = styled.section`
  width: ${props => props.width};

  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};

  margin: ${(props) => props.mbMargin};
  padding: ${(props) => props.mbPadding};

  height: ${(props) => props.height};

  background: ${props => props.mbBackground};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: ${props => props.display};
    flex-direction: ${(props) => props.flexDir};
    justify-content: ${(props) => props.justifyCont};
    align-items: ${(props) => props.alignItems};
    width: ${props => props.dsWidth};
    
    flex-wrap: ${props => props.flexWrap};
    max-width: ${(props) => props.maxWidth};
    margin: ${(props) => props.dsMargin};
    padding: ${(props) => props.dsPadding};

    background: ${props => props.dsBackground};
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xxs}) {
    display: ${(props) => props.xxsDisplay};
  }
`;

export {StyledWrapper}