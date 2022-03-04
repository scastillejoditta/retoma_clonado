import {SquareWrapper} from '../styles/unete-a-la-red'

// Assets
import Motivations from '../assets/Images/Motivations'
import Initiatives from '../assets/Images/Initiatives'
import Participation from '../assets/Images/Participation'
import Sharing from '../assets/Images/Sharing'

// Components
import Container from "../components/Container";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Wrapper from '../components/Wrapper'
import Button from '../components/Button'

const JoinToUs = () => {
  return (
    <>
      <Container dsHeight="45vh">
        <Wrapper
          display="flex"
          justifyCont="center"
          alignItems="center"
          dsHeight="75vh"
          width='100%'
          bgImage="url('/images/orange-banner.png')"
          dsPosition='absolute'
          top='-50%'
        >  
          <Container mobilePadding={"2rem"} dsMargin='6rem 0 0 0'>
            <Wrapper 
              dsWidth={'1024px'}
            >
              <Title 
                mobileFontSize="lg" 
                weight='700' 
                desktopFontSize="customXlg" 
                dsColor="#00000" 
                mbColor='#00000' 
                margin='1rem 0'
                dsMaxWidth='768px'
              >
                La movilización social no termina en las calles
              </Title>
              <Paragraph
                mobileFontSize="customBase"
                desktopFontSize="regular"
                color="#00000"
                dsMaxWidth='768px'
              >
                Haz parte de nuestras brigadas de WhatsApp conformadas por jóvenes que creen en la protesta, la participación política y la conversación para lograr cambios.
              </Paragraph>
              <a href='https://formularios.retoma.co/index.php/864869?lang=es' target='_blank'>
                <Button
                  background='#FF00A4'
                  color='#FFD039'
                  padding='1rem 2.5rem'
                  margin='1rem 0'
                  fontSize={'22px'}
                >
                  Regístrate aquí
                </Button>
              </a>
            </Wrapper>
          </Container>
        </Wrapper>
      </Container>

      <Container
        background="pink" 
        desktopPadding={'2rem 4rem'}
        mobilePadding={"2rem"}
      >
        <Wrapper
          style={{
            maxWidth: "1024px",
            margin: "2rem auto 0 auto",
          }}
        >
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="#00000"
            weight='700'
            style={{textAlign: 'center'}}
          >
            En esta iniciativa periodística impulsada por Mutante podrás, durante varios meses:
          </Paragraph>
          <SquareWrapper>
            <Wrapper maxWidth='25%' dsMargin='0 1rem' mbMargin='2rem 0' >
              <Motivations />
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="dark"
                desktopMargin='1rem 0'
              >
                Conocer las preocupaciones y motivaciones de los jóvenes para salir a las calles.
              </Paragraph>
            </Wrapper>
            <Wrapper maxWidth='25%' dsMargin='0 0.5rem' mbMargin='2rem 0' >
              <Initiatives />
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="dark"
                desktopMargin='1rem 0'
              >
                Aprender de las iniciativas que se gestaron o potenciaron en el Paro Nacional.
              </Paragraph>
            </Wrapper>
            <Wrapper maxWidth='25%' dsMargin='0 0.5rem' mbMargin='2rem 0'>
              <Participation />
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="dark"
                desktopMargin='1rem 0'
              >
                Participar de la construcción de investigaciones periodísticas para visibilizar los problemas que más nos preocupan.
              </Paragraph>
            </Wrapper>
            <Wrapper maxWidth='25%' dsMargin='0 0.5rem' mbMargin='2rem 0'>
              <Sharing />
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="dark"
                desktopMargin='1rem 0'
              >
                Compartir y recibir información útil y práctica sobre movilización social, derechos humanos y democracia, de cara a las elecciones de 2022.
              </Paragraph>
            </Wrapper>
          </SquareWrapper>
        </Wrapper>
      </Container>

      <Wrapper
        display="flex"
        justifyCont="center"
        height='60vh'
        width='100%'
        bgImage="url('/images/fingers-up.png')"
      > 
        <Wrapper 
          style={{
            maxWidth: "1024px",
            textAlign: 'center'
          }}
          dsMargin='2rem 0'
        > 
          <div style={{margin: '0 2rem'}}>
            <img src={'/images/quienes-participan.png'} style={{width: '100%', margin: '2rem 0'}} />
          </div>
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="#00000"
            desktopMargin='2rem 0 0 0'
            desktopPadding='0 4rem'
            mobilePadding='0 2rem'
          >
            <b>Cualquier persona colombiana que tenga entre 18 y 30 años</b>, que crea en el poder transformador de la movilización social y la participación política
          </Paragraph>
          <a href='https://formularios.retoma.co/index.php/864869?lang=es' target='_blank'>
            <Button
              background='#142FF4'
              color='#FFFFFF'
              padding='1rem 2.5rem'
              margin='2rem 0'
              fontSize='22px'
            >
            Haz parte de Retoma
            </Button>
          </a>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default JoinToUs;
