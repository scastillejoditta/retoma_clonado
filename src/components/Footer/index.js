import React from "react";
import Link from 'next/link';
import styled from "styled-components";

// Assets
import Twitter from "../../assets/Icons/Twitter";
import Facebook from "../../assets/Icons/Facebook";
import Instagram from "../../assets/Icons/Instagram";
import Telegram from "../../assets/Icons/Whatsapp";
import Youtube from "../../assets/Icons/Youtube";
import FooterEcoFeminita from "../../assets/Icons/FooterEcofeminita";
import Wingu from "../../assets/Icons/Wingu";
import Fundar from "/public/images/Fundar/Fundar.png";

const Footer = () => {
  return (
    <Wrapper>
        <SocialMediaList>
          <MediaIconsWrapper>
            <a href='https://twitter.com/EcoFeminita' target='_blank'>
              <Twitter  />
            </a>
          </MediaIconsWrapper>
          <MediaIconsWrapper>
            <a href='https://www.facebook.com/ecofeminita' target='_blank'>
              <Facebook  />
            </a>
          </MediaIconsWrapper>
          <MediaIconsWrapper>
            <a href='https://www.instagram.com/ecofeminita' target='_blank'>
              <Instagram />
            </a>
          </MediaIconsWrapper>
          <MediaIconsWrapper>
            <a href='https://t.me/economiafeminita' target='_blank'>
              <Telegram  />
            </a>
          </MediaIconsWrapper>
          <MediaIconsWrapper>
            <a href='https://www.youtube.com/channel/UCfykyqoI8gBCdpohn4veXCA' target='_blank'>
              <Youtube />
            </a>
          </MediaIconsWrapper>
        </SocialMediaList>

      <SecondSectionWrapper>
        <ProjectMadeByList>
          <EcoFeminitaWrapper>
            <Title>Retoma es un proyecto realizado por</Title>
          </EcoFeminitaWrapper>
        </ProjectMadeByList>
      </SecondSectionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: ${(props) => props.theme.colors.dark};
  padding: 2rem;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const FirstSectionWrapper = styled.div``;

const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;

  list-style-type: none;
`;

const ListItems = styled.li`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.customBase};
  font-weight: 500;

  cursor: pointer;

  margin: 1rem 0;

  > a {
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
  }
`;

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

const ProjectMadeItem = styled.li`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.customBase};
  font-weight: 500;

  cursor: pointer;

  margin: 2rem 0;
`;

const SecondSectionWrapper = styled.div`
`;

const EcoFeminitaWrapper = styled.div``;

const WinguAndLuminateWrapper = styled.div``;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.customBase};
  font-weight: 500;

  margin-top: 3rem;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-right: 4rem;
    margin-top: 1rem;
  }

`;

export default Footer;
