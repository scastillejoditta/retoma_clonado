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
              <Title>Una iniciativa de <a href='https://www.mutante.org/' target='_blank'><img src={'/images/mutante.png'} width='100px' style={{margin: '0 0.25rem'}} /></a> con el apoyo de Luminate y NED y la guía de Colnodo en seguridad digital.</Title>
              <Title>Desarrollado por <a href='https://www.winguweb.org/' target='_blank'><img src={'/images/wingu.svg'} width='100px' style={{margin: '0 0.25rem'}} /></a></Title>
            </RetomaWrapper>
          </ProjectMadeByList>
        </SecondSectionWrapper>
        <SocialMediaList>
          <MediaIconsWrapper>
            <a href='https://twitter.com/MutanteOrg' target='_blank'>
              <Twitter  />
            </a>
          </MediaIconsWrapper>
          <MediaIconsWrapper>
            <a href='https://www.facebook.com/MutanteOrg/' target='_blank'>
              <Facebook  />
            </a>
          </MediaIconsWrapper>
          <MediaIconsWrapper>
            <a href='https://www.instagram.com/mutanteorg/' target='_blank'>
              <Instagram />
            </a>
          </MediaIconsWrapper>
          <MediaIconsWrapper>
            <a href='https://www.youtube.com/channel/UCE11dpRzLuTeztprBiT2shA' target='_blank'>
              <Youtube />
            </a>
          </MediaIconsWrapper>
          <MediaIconsWrapper>
            <a href='https://www.linkedin.com/company/mutanteorg/' target='_blank'>
              <Linkedin />
            </a>
          </MediaIconsWrapper>
        </SocialMediaList>
      </Wrapper>
    </Wrapper>
  );
};

export default Footer;
