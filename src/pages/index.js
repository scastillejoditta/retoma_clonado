import { useState, useEffect, useRef } from "react";
import _ from "lodash";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton
} from "react-share";

import {GraphWrapper, SocialMedia, Share, ShareWrapper, AvatarWrapper, Noveded, Machifrase, Novedades, Frases, SelectWrapper, Bancas, RightArrowWrapper, LeftArrowWrapper, AxleDescription, AxlesWrapper, AxleTitle, Option, OptionsWrapper, MobileRightArrowWrapper, MobileLeftArrowWrapper} from '../styles/home'

// Assets
import LeftArrow from "../assets/Icons/Arrows/LeftArrow";
import RightArrow from "../assets/Icons/Arrows/RightArrow";
import DownArrow from '../assets/Icons/Arrows/DownArrow'
import Twitter from "../assets/Icons/Twitter";
import Facebook from "../assets/Icons/Facebook";
import Whatsapp from "../assets/Icons/Whatsapp";
import Spinner from '../assets/Icons/Spinner'

// Components
import Container from "../components/Container";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Wrapper from "../components/Wrapper";
import Graph from "../components/Graph";
import Select, { components } from "react-select";
import axles from "../utils/axles.json";
import Button from '../components/Button';

import {useFetch} from '../hooks/useFetch'

const customStyles = {
  container: (provided) => ({
    ...provided,
    fontSize: "0.9rem",
    fontFamily: '"Montserrat", sans-serif'
  }),
  control: (provided) => ({
    ...provided,
    border: "2px solid black",
    borderRadius: "0",
    boxShadow: "none",
    cursor: "pointer",
    "&:hover": {},
  }),
  indicatorSeparator: () => ({}),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "0.5rem 1rem 0.5rem 0",
  }),
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DownArrow />
    </components.DropdownIndicator>
  );
};

const axlesProperties = {
  'Corrupción': {
    color: '#FFCCF1',
    image: '/images/corrupcion-thumbnail.png'
  },
  'Mujeres\n': {
    color: '#00D857',
    image: '/images/mujeres-thumbnail.png'
  },
  'Diversidad sexual y de género': {
    color: '#FFF422',
    image: '/images/lgbtq-thumbnail.png'
  }
}

const Home = () => {
  const [selectedAxleIndex, setSelectedAxleIndex] = useState(0);
  const [SelectedQuestion, setSelectedQuestion] = useState(null);
  const graphRef = useRef();

  const {data: questions, loading: loadingQuestions} = useFetch("Preguntas", [])
  // const {data: quotes, loading: loadingQuotes} = useFetch("Frases_Candidates", [])
  const {data: news, loading: loadingNews} = useFetch("Novedades", [])
  const {data: candidates, loading: loadingCandidates} = useFetch("Respuestas_Candidates", [])
  const {data: axles, loading: loadingAxles} = useFetch("Ejes", [])

  useEffect(() => {
    graphRef.current.scrollLeft =
      graphRef.current.scrollWidth / 2 - graphRef.current.clientWidth / 2;
  });

  const handleChange = (value) => {
    setSelectedQuestion(value);
  }

  const filterQuestions = questions?.filter(q => JSON.stringify(q.fields) !== "{}")

  return (
    <>
      <Container dsHeight="45vh">
        <Wrapper
          display="flex"
          justifyCont="center"
          alignItems="center"
          dsHeight="75vh"
          width='100%'
          bgImage="url('/images/yellow-banner.png')"
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
              <Title mobileFontSize="lg" weight='700' desktopFontSize="customXlg" dsColor="#00000" mbColor='#00000' margin='2rem 0'>
                Luego del Paro Nacional de 2021, convocamos a más de 400 jóvenes en todo el país
              </Title>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="#00000"
              >
                frente a la realidad de Colombia. Nuestro objetivo final: construir pliegos temáticos para que las candidaturas políticas sienten sus posturas al respecto y lograr así que la ciudadanía pueda ejercer su voto de manera informada.
              </Paragraph>
            </Wrapper>
          </Container>
        </Wrapper>
      </Container>
      <Container background="white">
        <Wrapper
          display="flex"
          justifyCont="center"
          mbMargin="0 2rem"
          dsMargin="0 auto"
          maxWidth="1024px"
          dsPadding="2rem 0"
          mbPadding="1rem 0"
        >
          <OptionsWrapper>
            {axles?.map((a, index) => (
              <Option
                bg={axlesProperties[a.fields.Ejes].color}
                selected={selectedAxleIndex === index}
                onClick={() => {
                  setSelectedQuestion(null);
                  setSelectedAxleIndex(index);
                }}
                key={a.id}
              >
                <Paragraph
                  weight="600"
                  desktopMargin="0 0.8rem;"
                  color="black"
                  desktopFontSize="xs"
                >
                  {a.fields.Ejes}
                </Paragraph>
              </Option>
            ))}
          </OptionsWrapper>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper
          display="flex"
          justifyCont="center"
          mbMargin="0 1.5rem"
          dsMargin="0 auto"
          maxWidth="1024px"
          position="relative"
        >
          <AxlesWrapper>
            <LeftArrowWrapper
              selectedAxle={selectedAxleIndex}
              onClick={() => {
                setSelectedQuestion(null);
                setSelectedAxleIndex((prevValue) => prevValue - 1);
              }}
            >
              <LeftArrow />
            </LeftArrowWrapper> 
            <img src={axlesProperties[axles[selectedAxleIndex]?.fields?.Ejes]?.image} width='200px' height='200px' />
            <AxleDescription>
              <MobileLeftArrowWrapper
                selectedAxle={selectedAxleIndex}
                onClick={() => {
                  setSelectedQuestion(null);
                  setSelectedAxleIndex((prevValue) => prevValue - 1);
                }}
              >
                <LeftArrow />
              </MobileLeftArrowWrapper>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="base"
                color="dark"
                mobilePadding="0.2rem"
                desktopPadding="0"
                mobileMargin='1rem 0'
              >
                {axles[selectedAxleIndex]?.fields?.Contexto}
              </Paragraph>
              <MobileRightArrowWrapper
                selectedAxle={selectedAxleIndex}
                onClick={() => {
                  setSelectedQuestion(null);
                  setSelectedAxleIndex((prevValue) => prevValue + 1);
                }}
              >
                <RightArrow />
              </MobileRightArrowWrapper>
            </AxleDescription> 
            <RightArrowWrapper
              selectedAxle={selectedAxleIndex}
              onClick={() => {
                setSelectedQuestion(null);
                setSelectedAxleIndex((prevValue) => prevValue + 1);
              }}
            >
              <RightArrow />
            </RightArrowWrapper>
          </AxlesWrapper>
        </Wrapper>
        <Wrapper
          display="flex"
          justifyCont="center"
          mbMargin="0 4rem 2rem"
          dsMargin="0 auto"
          maxWidth="1024px"
          dsPadding="2rem 0"
          position="relative"
        >
          {loadingQuestions 
            ? <div><Spinner /></div>
            : <SelectWrapper>
                <Select
                  styles={customStyles}
                  id={"Questions"}
                  instanceId={"Questions"}
                  isSearchable={false}
                  value={SelectedQuestion}
                  onChange={handleChange}
                  components={{ DropdownIndicator }}
                  placeholder={"Selecciona la pregunta"}
                  options={filterQuestions.filter((q) => q.fields["Id (from Ejes)"][0] === axles[selectedAxleIndex]?.fields.Id)
                    .map((q) => ({
                      value: q.id,
                      label: q.fields.Pregunta,
                      name: q.fields.Name,
                    }))}
                />
              </SelectWrapper>
          }
        </Wrapper>
        <Wrapper
          display="flex"
          justifyCont="center"
          mbMargin="0 4rem"
          dsMargin="0 auto"
          maxWidth="1024px"
          dsPadding="2rem 0"
          position="relative"
        >
          <GraphWrapper ref={graphRef}>
            <Graph
              data={candidates.filter(c => Object.keys(c.fields).length)}
              size={{ width: 768, height: 400, margin: 0 }}
              question={SelectedQuestion?.name}
            />
          </GraphWrapper>
        </Wrapper>
      </Container>
      {/* <Container background='pink'>
        <Wrapper
          mbMargin="0 2rem"
          dsMargin="0 auto"
          maxWidth="1024px"
          dsPadding="3rem 0"
          mbPadding="2rem 0"
          style={{textAlign: 'center'}}
        >
          <img src={'/images/nuestras-voces.png'} width='100%' />
        </Wrapper>
        <Wrapper
          mbMargin="0 2rem"
          maxWidth="1024px"
          dsMargin='0 auto'
          dsPadding="2rem 0 4rem 0"
          mbPadding="1rem 0 4rem 0"
        >
          {loadingQuotes 
            ? <Spinner />
            : <Frases>
              {quotes.map((q) => (
                <Machifrase key={q.id}>
                  <Paragraph
                    mobileFontSize="customBase"
                    desktopFontSize="customBase"
                    desktopPadding="1.5rem"
                    mobilePadding="1.5rem"
                    weight='400'
                    color="white"
                  >
                    "{q.fields.Frase}"
                  </Paragraph>
                  <Paragraph
                    mobileFontSize="customBase"
                    desktopFontSize="customBase"
                    desktopPadding="1.5rem"
                    mobilePadding="1.5rem"
                    weight="600"
                    color="white"
                    mobileMargin='none'
                  >
                    {q.fields.Nombre_Candidate}
                  </Paragraph>
                  <ShareWrapper>
                    <Share>
                      <SocialMedia>
                        <span>
                          <TwitterShareButton
                            url={`https://feminindex.com`}
                            title={`"${q.fields.Frase}" - ${q.fields.Nombre_Candidate}`}
                            hashtag={"#Frases"}
                            description={"Frases"}
                          >
                            <Twitter />
                          </TwitterShareButton>
                        </span>
                        <span>
                          <FacebookShareButton
                            url={`https://feminindex.com`}
                            quote={`"${q.fields.Frase}" - ${q.fields.Nombre_Candidate}`}
                            hashtag={"#Frases"}
                            description={"Frases"}
                          >
                            <Facebook />
                          </FacebookShareButton>
                        </span>
                        <span>
                          <WhatsappShareButton
                            url={`https://feminindex.com`}
                            title={`"${q.fields.Frase}" - ${q.fields.Nombre_Candidate}`}
                          >
                            <Whatsapp />
                          </WhatsappShareButton>
                        </span>
                      </SocialMedia>
                    </Share>
                  </ShareWrapper>
                </Machifrase>
              ))}
            </Frases>
          }
        </Wrapper>
      </Container> */}
      <Wrapper
        display="flex"
        justifyCont="center"
        height='60vh'
        width='100%'
        bgImage="url('/images/fingers-up.png')"
      > 
        <Wrapper 
          style={{
            maxWidth: "1025px",
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
            mobileMargin='1rem 2rem'
          >
            Cualquier persona colombiana que tenga entre 18 y 30 años, que crea en el poder transformador de la movilización social y la participación política
          </Paragraph>
          <Button
            background='#142FF4'
            color='#FFFFFF'
            padding='1rem'
            margin='1rem 0'
          >
            Haz parte de Retoma
          </Button>
        </Wrapper>
      </Wrapper>
      <Container background="white">
        <Wrapper
          mbMargin="0 2rem"
          dsMargin="0 auto"
          maxWidth="1024px"
          dsPadding="3rem 0"
          mbPadding="2rem 0"
          style={{textAlign: 'center'}}
        >
          <img src={'/images/nuestras-voces.png'} width='100%' />
        </Wrapper>
        <Wrapper
          display="flex"
          justifyCont="center"
          mbMargin="0 4rem"
          dsMargin="0 auto"
          maxWidth="1024px"
          dsPadding="2rem 0 4rem 0"
          mbPadding="1rem 0"
        >
          {loadingNews 
            ? <Spinner />
            : <Novedades>
                {news.map((n) => (
                  <Noveded
                    key={n.id}
                    href={n.fields.Fuente}
                    image={n.fields.Foto}
                    target="_blank"
                  >
                    <Title
                      mobileFontSize="medium"
                      desktopFontSize="medium"
                      color="dark"
                      padding="0 0.5rem 0 0.5rem"
                    >
                      {n.fields.Bajada}
                    </Title>
                  </Noveded>
                ))}
              </Novedades>
          }
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
