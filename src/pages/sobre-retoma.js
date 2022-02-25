import {Rows, PersonWrapper, Persons, TeamWrapper, AnswersWrapper, ScoreWrapper, Image, SpeakerWrapper} from '../styles/sobre-retoma'

// Assets
import Letter from '../assets/Icons/Letter'
import Speaker from '../assets/Icons/Speaker'

// Components
import Container from "../components/Container";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Wrapper from '../components/Wrapper'

const About = () => {
  return (
    <>
      <Container dsHeight="50vh">
        <Wrapper
          display="flex"
          justifyCont="center"
          alignItems="center"
          dsWidth='100%'
          dsHeight="75vh"
        
          bgImage="url('/images/green-banner.png')"
          dsPosition='absolute'
          top='-50%'
        > 
          <Container mobilePadding={"2rem"}>
            <Wrapper 
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              <Title 
                mobileFontSize="lg" 
                weight='700' 
                desktopFontSize="customXlg" 
                dsColor="#00000" 
                mbColor='#00000' 
                margin='4rem 0 1rem 0'
              >
                El Paro Nacional 2021 nos inspiró
              </Title>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="#00000"
              >
                Durante meses, jóvenes de todo el país se reunieron en las plazas y las calles de sus ciudades y municipios para exigir cambios. Desde el 28 de abril vimos el dolor y la impotencia que dejó la violencia, pero también la dignidad y valentía de las y los jóvenes, protagonistas del periodo de movilización más trascendental de las últimas décadas.
              </Paragraph>
            </Wrapper>
          </Container>
        </Wrapper>
      </Container>

      <Wrapper      
        dsPosition='relative'
        top='-5rem'
        display='flex'
        style={{
          maxWidth: "1200px",
          margin: "2rem auto",
        }}
      >
        <Wrapper
          dsBackground='#142FF4'
          mbBackground='#142FF4'
          dsPadding='2rem'
          mbPadding='2rem'
          mbMargin='2rem'
        >
          <Paragraph
            mobileFontSize="medium"
            desktopFontSize="lg"
            weight='350'
            color="white"
            desktopMargin="0 0 1rem 0"
          >
            En este contexto, en Mutante nos preguntamos: 
          </Paragraph>
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            weight='350'
            color="white"
          >
            ¿Cómo puede un medio que le apuesta a la conversación con el público servirle a aquellos que exigieron ser escuchados? ¿Cómo puede el periodismo facilitar procesos que ayuden a que lo vivido en 2021 nos lleve a mejores lugares en el futuro?
          </Paragraph>
        </Wrapper>
        <Container
          desktopPadding="5rem 2.5rem"
          mobilePadding="1.5rem"
          maxWidth="xs"
          dsMargin='0 2rem 0 0'
          margin='1rem'
        >
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="dark"
            padding="0 1rem"
          >
            Con el tiempo, la movilización en las calles empezó a disminuir, pero las propuestas y banderas del Paro siguieron vigentes. <span style={{color: '#142FF4'}}>así nació RETOMA, un esfuerzo por construir un puente entre las agendas expresadas durante la movilización social en 2021</span> y el proceso electoral que definirá un nuevo Congreso y un nuevo Gobierno en 2022. 
          </Paragraph>
        </Container>
      </Wrapper>
      
      <Container background='green'>
        <Wrapper      
          display='flex'
          style={{
            maxWidth: "1200px"
          }}
          >
            <Container
              dsMargin='2rem 8rem'
              margin='2rem'
              mobilePadding='1rem 0'
            >
              <div style={{marginBottom: '4rem'}}>
                <Paragraph
                  mobileFontSize="medium"
                  desktopFontSize="lg"
                  desktopMargin='1rem 0'
                  color="black"
                  weight='500'
                  style={{lineHeight: '35px'}}
                >
                  En septiembre de 2021 convocamos a jóvenes colombianos entre 18 y 30 años que participaron del Paro Nacional a que se unieran a Retoma, red informativa para la toma de decisiones democráticas.
                </Paragraph>
                <Paragraph
                  mobileFontSize="customBase"
                  desktopFontSize="regular"
                  color="black"
                  weight='500'
                  style={{lineHeight: '35px'}}
                >
                  Contactamos a más de 50 organizaciones y colectivos que hicieron parte de las protestas y lanzamos una campaña en redes sociales que tuvo como resultado la apertura de un primer grupo de Whatsapp con 250 personas. 
                </Paragraph>
              </div>

              <Title
                mobileFontSize="lg"
                desktopFontSize="lg"
                weight='900'
                dsColor="black"
                mbColor='black'
                margin="0 0 1rem 0"
              >
                En este momento hacen parte de RETOMA unos 350 jóvenes
              </Title>
              <Paragraph
                mobileFontSize="customBase"
                desktopFontSize="regular"
                color="black"
                weight='500'
                style={{lineHeight: '35px'}}
              >
                de ciudades como Medellín, Bogotá, Cali, Barranquilla, Pereira, Manizales, Cúcuta, Sincelejo, Popayán, y municipios como Buga (Valle), Palmira (Valle), Montelíbano (Córdoba), Saravena (Arauca), Arroyo Hondo (Bolívar) y Rionegro (Antioquia). La mayoría son estudiantes de pregrado o técnicas que viven en un lugar de estrato socioeconómico 3, y que están interesados, principalmente en saber más sobre democracia, procesos electorales y organización estatal.
              </Paragraph>
            </Container>
            <Wrapper
              dsBackground='#142FF4'
              mbBackground='#142FF4'
              dsPadding='2rem'
              mbPadding='2rem'
              dsMargin='0 4rem'
              dsHeight='fit-content'
              mbHeight='fit-content'
            >
              <Title
                mobileFontSize="lg"
                desktopFontSize="lg"
                weight='700'
                dsColor="white"
                mbColor='white'
                desktopMargin="0 0 1rem 0"
                padding='1rem'
              >
                Con el paso del tiempo la convocatoria trascendió las pantallas. A través de acercamientos y talleres presenciales también sumamos más integrantes.  
              </Title>
            </Wrapper>
        </Wrapper>
      </Container>


      <Container background="white">
        <Wrapper
          style={{
            maxWidth: "1000px"
          }}
          dsMargin='2rem 6rem'
        >
          <img src={'/images/metodologia.png'} width='90%' style={{margin: '0 0 0 1rem'}} />
          <Wrapper display='flex' mbMargin='2rem'>
            <Paragraph weight='500' desktopFontSize='lg' mobileFontSize='medium' desktopMargin='1rem'>
              RETOMA opera a través de chats de Whatsapp en dos niveles distintos. 
            </Paragraph>
            <Paragraph weight='500' desktopFontSize='regular' mobileFontSize='customBase' desktopMargin='1.5rem 1rem 0 1rem'>
              Entregamos continuamente información de calidad relacionada con movilización, Derechos Humanos y procesos electorales, con el objetivo de mejorar la calidad de la información que circula por este canal de mensajería.
            </Paragraph>
          </Wrapper>
        </Wrapper>
      </Container>

      <Wrapper 
        dsPosition='relative'
        mbPosition='relative'
      
        height='100vh'
        bgImage="url('/images/infografia-pliegos.png')"
      >
        <Wrapper
          style={{
            maxWidth: "1000px"
          }}
          dsMargin='6rem'
          dsPadding='4rem 0 0 0'
        >
          {/* <div> */}
            <Image src={'/images/pliegos.png'} width='100%' />
            <Title padding='1rem 0' dsMargin='0' margin='0 2rem' weight='900' desktopFontSize='xxl' mobileFontSize='customXlg' desktopMargin='1rem'>
              Así construímos los pliegos RETOMA
            </Title>
          {/* </div> */}
        </Wrapper>

        <Wrapper
          display='flex'
          justifyCont='space-between'
          alignItems='center'
          flexWrap='wrap'
          style={{
            maxWidth: "1000px"
          }}
          dsMargin='2rem 6rem'
        >
          <Wrapper dsWidth='35%' mbMargin='2rem' dsMargin='0 0 4rem 0' >
            <Title desktopFontSize='xxl' mobileFontSize='customXlg' dsColor='blue' mbColor='blue'>01</Title>
            <Paragraph desktopFontSize='lg' mobileFontSize='medium' color='blue'>LLUVIA DE IDEAS</Paragraph>
            <Paragraph desktopFontSize='medium' mobileFontSize='medium' color='black'>Con los integrantes de RETOMA para construir el abanico inicial de los problemas y soluciones alrededor del tema que vaya a abordar el pliego.</Paragraph>
          </Wrapper>
          <Wrapper dsWidth='35%' mbMargin='2rem' dsMargin='0 0 4rem 0' >
            <Title desktopFontSize='xxl' mobileFontSize='customXlg' dsColor='blue' mbColor='blue'>02</Title>
            <Paragraph desktopFontSize='lg' mobileFontSize='medium' color='blue'>DOS PERIODISTAS</Paragraph>
            <Paragraph desktopFontSize='medium' mobileFontSize='medium' color='black'>De Mutante consultan a organizaciones y personas expertas en el tema. </Paragraph>
          </Wrapper>
          <Wrapper dsWidth='35%' mbMargin='2rem' dsMargin='0 0 4rem 0' >
            <Title desktopFontSize='xxl' mobileFontSize='customXlg' dsColor='blue' mbColor='blue'>03</Title>
            <Paragraph desktopFontSize='lg' mobileFontSize='medium' color='blue'>ESTAS RESPUESTAS</Paragraph>
            <Paragraph desktopFontSize='medium' mobileFontSize='medium' color='black'>Más los aportes de los integrantes de RETOMA, constituyen un Pliego Ampliado de problemas y soluciones.</Paragraph>
          </Wrapper>
          <Wrapper dsWidth='35%' mbMargin='2rem' dsMargin='0 0 4rem 0' >
            <Title desktopFontSize='xxl' mobileFontSize='customXlg' dsColor='blue' mbColor='blue'>04</Title>
            <Paragraph desktopFontSize='lg' mobileFontSize='medium' color='blue'>BREVE SONDEO</Paragraph>
            <Paragraph desktopFontSize='medium' mobileFontSize='medium' color='black'>Para deﬁnir, junto a los participantes de RETOMA, los 6 puntos que irán en el pliego ﬁnal (3 problemas y 3 soluciones). Los que tengan más votos son los elegidos.</Paragraph>
          </Wrapper>
          <Wrapper dsWidth='35%' mbMargin='2rem' dsMargin='0 0 4rem 0' >
            <Letter />
          </Wrapper>
          <Wrapper dsWidth='35%' mbMargin='2rem' dsMargin='0 0 4rem 0' >
            <Title desktopFontSize='xxl' mobileFontSize='customXlg' dsColor='blue' mbColor='blue'>05</Title>
            <Paragraph desktopFontSize='lg' mobileFontSize='medium' color='blue'>ENVÍO DEL PLIEGO</Paragraph>
            <Paragraph desktopFontSize='medium' mobileFontSize='medium' color='black'>A los candidatos y candidatas, junto a un cuestionario que indaga por sus posturas y propuestas frente a cada punto del pliego.</Paragraph>
          </Wrapper>
          <Wrapper dsWidth='35%' mbMargin='2rem' dsMargin='0 0 4rem 0' >
            <Title desktopFontSize='xxl' mobileFontSize='customXlg' dsColor='blue' mbColor='blue'>06</Title>
            <Paragraph desktopFontSize='lg' mobileFontSize='medium' color='blue'>SISTEMATIZAMOS</Paragraph>
            <Paragraph desktopFontSize='medium' mobileFontSize='medium' color='black'>Las respuestas de las candidaturas y las compartimos a los integrantes de RETOMA junto a un análisis elaborado por nuestro equipo.</Paragraph>
          </Wrapper>
          <Wrapper dsWidth='35%' mbMargin='2rem' dsMargin='0 0 4rem 0' >
            <Title desktopFontSize='xxl' mobileFontSize='customXlg' dsColor='blue' mbColor='blue'>07</Title>
            <Paragraph desktopFontSize='lg' mobileFontSize='medium' color='blue'>ELABORAMOS</Paragraph>
            <Paragraph desktopFontSize='medium' mobileFontSize='medium' color='black'>Una herramienta digital para comunicar los resultados de nuestros ejercicios.</Paragraph>
          </Wrapper>
        </Wrapper>
        <SpeakerWrapper style={{position: 'absolute', bottom: 0, right: 0}}>
          <Speaker />
        </SpeakerWrapper>
      </Wrapper>
    </>
  );
};

export default About;
