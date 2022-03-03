import styled from 'styled-components'


const Wrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 2rem;

  background: ${props => props.bg};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 1024px;
    margin: 2rem auto;
    flex-direction: initial;
  }
`;

export {Wrapper}