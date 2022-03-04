import styled from 'styled-components'

const SocialMediaList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  list-style-type: none;
`;

const MediaIconsWrapper = styled.li`
  margin: 0 2rem 0 0;

  cursor: pointer;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xxs}) {
    margin: 0 0.5rem;
  }
`;

const ProjectMadeByList = styled.ul`
  list-style-type: none;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
  }
`;

const SecondSectionWrapper = styled.div`
`;

const RetomaWrapper = styled.div``;

const Title = styled.p`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.customBase};
  font-weight: 500;

  margin-top: 3rem;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 1rem;
  }
`;

export {SocialMediaList, MediaIconsWrapper, ProjectMadeByList, SecondSectionWrapper, RetomaWrapper, Title}
