import styled from 'styled-components'

const SvgWrapper = styled.div`
  position: relative;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    width: 1024px;
  }
`

const GraphScroll = styled.div`
  display: none;
  width: 768px;
  text-align: center;
  margin-bottom: 1rem;
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: block;
  }
`;

const References = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: start;
  align-self: center;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 768px;
    align-self: unset;
  }
`;

const Reference = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;

const Circle = styled.div`
  background-color: ${(props) => props.color};
  width: 15px;
  height: 15px;
  min-width: 15px;
  margin-right: 0.5rem;
  border-radius: 50%;
`;

export {Circle, Reference, References, GraphScroll, SvgWrapper}