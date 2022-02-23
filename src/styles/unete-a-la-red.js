import styled from 'styled-components'

const Wrapper = styled.section`
  display: block;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 1024px;
    margin: 0 auto;
  }
`;

const SquareWrapper = styled.section`
  display: block;
  margin: 0 2rem;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justifyContent: space-between;
    padding: 0;
    max-width: 1024px;
    margin: 0 auto;

    padding: 4rem;
  }
`

export {SquareWrapper, Wrapper}