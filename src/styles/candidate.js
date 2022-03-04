import styled from 'styled-components'

const Share = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;

  background-color: ${props => props.theme.colors.violet};

  padding: 0.5rem 0.75rem;
  margin: 1rem 0;

  border-bottom: 2px solid ${props => props.theme.colors.green};

  > span {
    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.dark};
    font-weight: 600;

    margin: 0 1rem;
  }
`

const SocialMedia = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin: 0.75rem 0.25rem;
  }
`

const Li = styled.li`
  position: relative;

  background: ${props => props.background ? props.background : 'transparent'};
  
  border: 2px solid ${props => props.theme.colors.violet};
  list-style-type: none;

  margin: 2rem 0;

  > span {
    position: absolute;
    right: -7%;
    top: -8%;
  }

  > div {
    position: absolute;
    right: -7%;
    top: 8%;

    margin: 1.25rem 0;
  }
  
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    max-width: 30%;
  }
`

const ListWrapper = styled.ul`
  padding: 0;

  > div > ${Li} > span {
    position: absolute;
    right: -5%;
    top: -15%;
  }
  margin: 0 2rem;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

const StyledImage = styled.img`
  height: 225px;
  width: 225px;
  object-fit: cover;
  background-repeat: no-repeat;
`

const TrafficLightsWrapper = styled.div`
  margin: 2rem;

  > div > span {
    margin: 0 0.5rem;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0 2rem;
    width: 425px;
  }
`

const Comments = styled.div`
  background: ${props => props.theme.colors.gray};
  list-style-type: none;
  line-height: 28px;

  margin: 2rem 0 2rem 0;
  padding: 2rem;
`

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`

const TicksWrapper = styled.div`
  display: flex;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    margin: .5rem 0;
  }
`

export {Share, SocialMedia, Li, TrafficLightsWrapper, Comments, StyledImage, ListWrapper, SectionWrapper, TicksWrapper}