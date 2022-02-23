import styled from 'styled-components'


const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;

  background: ${props => props.theme.colors.backgroundGray};

  padding: 2rem;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: initial;
  }
`;

export {Wrapper}