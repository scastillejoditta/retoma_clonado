import React from "react";
import {SocialMediaList, MediaIconsWrapper, ProjectMadeByList, SecondSectionWrapper, RetomaWrapper, Title} from './styles'

// Assets
import Facebook from '../../assets/Icons/Footer/Facebook/index'
import Twitter from '../../assets/Icons/Footer/Twitter/index'
import Youtube from '../../assets/Icons/Footer/Youtube/index'
import Instagram from '../../assets/Icons/Footer/Instagram/index'
import Linkedin from '../../assets/Icons/Footer/Linkedin/index'



import Wrapper from '../../components/Wrapper'

const Footer = () => {
  return (
    <Wrapper
      style={{
        background: '#000000'
      }}
    dsPadding='2rem'
    mbPadding='0.5rem 0'
    >
      <Wrapper 
        display={'flex'}
        justifyCont='space-between'
        dsWidth={'1024px'}
        dsMargin='0 auto'
      >
        <SecondSectionWrapper>
          <ProjectMadeByList>
            <RetomaWrapper>
              <Title>Una iniciativa de <b>MUTANTE</b> con el apoyo en seguridad digital de Colnodo</Title>
            </RetomaWrapper>
          </ProjectMadeByList>
        </SecondSectionWrapper>
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
            <a href='https://www.youtube.com/channel/UCfykyqoI8gBCdpohn4veXCA' target='_blank'>
              <Youtube />
            </a>
          </MediaIconsWrapper>
          <MediaIconsWrapper>
            <a href='https://www.youtube.com/channel/UCfykyqoI8gBCdpohn4veXCA' target='_blank'>
              <Linkedin />
            </a>
          </MediaIconsWrapper>
        </SocialMediaList>
      </Wrapper>
    </Wrapper>
  );
};

export default Footer;
