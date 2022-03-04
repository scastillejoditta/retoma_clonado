import styled from 'styled-components'


const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 2rem;

  background: ${props => props.bg};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 1024px;
    margin: 0 auto;
    padding: 4rem 0;
    flex-direction: initial;
  }
`;

export {HeaderWrapper}