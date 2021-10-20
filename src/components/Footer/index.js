import React from "react";
import styled from "styled-components";

// Assets
import Twitter from "../../assets/Icons/Twitter";
import Facebook from "../../assets/Icons/Facebook";
import Instagram from "../../assets/Icons/Instagram";
import Linkedin from "../../assets/Icons/Linkedin";
import Youtube from "../../assets/Icons/Youtube";
import FooterEcoFeminita from "../../assets/Icons/FooterEcofeminita";
import Wingu from "../../assets/Icons/Wingu";
import Luminate from "../../assets/Icons/Luminate";

// Components
import Container from "../../components/Container";

const Footer = () => {
  return (
    <Wrapper>
      <FirstSectionWrapper>
        <UnorderedList>
          <ListItems>
            <a>Candidates</a>
          </ListItems>
          <ListItems>
            <a>Sobre el proyecto</a>
          </ListItems>
          <ListItems>
            <a>Economía Femini(s)ta</a>
          </ListItems>
          <ListItems>
            <a>Club EcoFeminita</a>
          </ListItems>
        </UnorderedList>

        <SocialMediaList>
          <MediaIconsWrapper>
            <a>
              <Twitter />
            </a>
          </MediaIconsWrapper>
          <MediaIconsWrapper>
            <a>
              <Facebook />
            </a>
          </MediaIconsWrapper>
          <MediaIconsWrapper>
            <a>
              <Instagram />
            </a>
          </MediaIconsWrapper>
          <MediaIconsWrapper>
            <a>
              <Linkedin />
            </a>
          </MediaIconsWrapper>
          <MediaIconsWrapper>
            <a>
              <Youtube />
            </a>
          </MediaIconsWrapper>
        </SocialMediaList>
      </FirstSectionWrapper>

      <SecondSectionWrapper>
        <Title>Feminindex es un proyecto realizado por</Title>
        <ProjectMadeByList>
          <EcoFeminitaWrapper>
            <ProjectMadeItem>
              <FooterEcoFeminita />
            </ProjectMadeItem>
          </EcoFeminitaWrapper>
          <WinguAndLuminateWrapper>
            <ProjectMadeItem>
              <Wingu />
            </ProjectMadeItem>
            <ProjectMadeItem>
              <Luminate />
            </ProjectMadeItem>
          </WinguAndLuminateWrapper>
        </ProjectMadeByList>
      </SecondSectionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: ${(props) => props.theme.colors.dark};

  padding: 4rem 2rem;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    justify-content: space-evenly;
  }
`;

const FirstSectionWrapper = styled.div``;

const UnorderedList = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  list-style-type: none;
`;

const ListItems = styled.li`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.customBase};
  font-weight: 500;

  cursor: pointer;

  margin: 1rem 0;
`;

const SocialMediaList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  list-style-type: none;

  margin: 1.5rem 0 4rem 0;
`;

const MediaIconsWrapper = styled.li`
  margin: 0 1rem;

  cursor: pointer;
`;

const ProjectMadeByList = styled.ul`
  list-style-type: none;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const ProjectMadeItem = styled.li`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.customBase};
  font-weight: 500;

  cursor: pointer;

  margin: 2rem 0;
`;

const SecondSectionWrapper = styled.div`
  margin: 2rem 0;
`;

const EcoFeminitaWrapper = styled.div``;

const WinguAndLuminateWrapper = styled.div``;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.customBase};
  font-weight: 500;

  margin: 0 2.5rem;
`;

export default Footer;
