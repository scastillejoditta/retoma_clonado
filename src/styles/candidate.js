import styled from 'styled-components'

const Share = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;

  background-color: ${props => props.theme.colors.backgroundGray};

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
  list-style-type: none;

  margin: 2rem 0 2rem 0;

  > span {
    position: absolute;
    right: -7%;
    top: -5%;
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

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

const Image = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
  border-radius: 50%;

  background: ${props => props.theme.colors.lightGray};
`

const TrafficLights = styled.div`
  padding: 2rem;
  background: ${props => props.background ? props.background : 'transparent'};
`

const Comments = styled.div`
  background: ${props => props.theme.colors.gray};
  list-style-type: none;
  line-height: 28px;

  margin: 2rem 0 2rem 0;
  padding: 2rem;
`

export {Share, SocialMedia, Li, TrafficLights, Comments, Image, ListWrapper}