import styled from 'styled-components'


const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;

  padding: 2rem;

  background: ${props => props.bg};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: initial;
  }
`;

export {Wrapper}