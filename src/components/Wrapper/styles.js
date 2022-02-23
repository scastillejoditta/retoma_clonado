import styled from 'styled-components'

const StyledWrapper = styled.section`
  width: ${props => props.width};

  position: ${(props) => props.mbPosition};
  bottom: ${(props) => props.bottom};
  top: ${props => props.top};

  margin: ${(props) => props.mbMargin};
  padding: ${(props) => props.mbPadding};

  height: ${(props) => props.mbHeight};

  background: ${props => props.mbBackground};
  background-image: ${props => props.bgImage};
  background-size: cover;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: ${props => props.display};
    flex-direction: ${(props) => props.flexDir};
    justify-content: ${(props) => props.justifyCont};
    align-items: ${(props) => props.alignItems};

    position: ${props => props.dsPosition};
    bottom: ${(props) => props.bottom};
    top: ${props => props.top};

    width: ${props => props.dsWidth};
    max-width: ${props => props.maxWidth};
    height: ${(props) => props.dsHeight};
    
    flex-wrap: ${props => props.flexWrap};
    margin: ${(props) => props.dsMargin};
    padding: ${(props) => props.dsPadding};

    background: ${props => props.dsBackground};
    background-size: cover;
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xxs}) {
    display: ${(props) => props.xxsDisplay};
  }
`;

export {StyledWrapper}