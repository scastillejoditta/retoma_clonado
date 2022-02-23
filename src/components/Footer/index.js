import React from "react";
import {Wrapper, SocialMediaList, MediaIconsWrapper, ProjectMadeByList, SecondSectionWrapper, RetomaWrapper, Title} from './styles'

// Assets
import Twitter from "../../assets/Icons/Twitter";
import Facebook from "../../assets/Icons/Facebook";
import Instagram from "../../assets/Icons/Instagram";
import Telegram from "../../assets/Icons/Whatsapp";
import Youtube from "../../assets/Icons/Youtube";

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
          <RetomaWrapper>
            <Title>Retoma es un proyecto realizado por</Title>
          </RetomaWrapper>
        </ProjectMadeByList>
      </SecondSectionWrapper>
    </Wrapper>
  );
};

export default Footer;
