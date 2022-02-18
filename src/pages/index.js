import { useState, useEffect, useRef } from "react";
import _ from "lodash";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  LinkedinShareButton
} from "react-share";

import styled from "styled-components";

// Assets
import LeftArrow from "../assets/Icons/Arrows/LeftArrow";
import RightArrow from "../assets/Icons/Arrows/RightArrow";
import DownArrow from '../assets/Icons/Arrows/DownArrow'
import Twitter from "../assets/Icons/Twitter";
import Facebook from "../assets/Icons/Facebook";
import Telegram from "../assets/Icons/Whatsapp";
import Linkedin from "../assets/Icons/Linkedin";
import Spinner from '../assets/Icons/Spinner'

// Components
import Container from "../components/Container";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Wrapper from "../components/Wrapper";
import Graph from "../components/Graph";
import Select, { components } from "react-select";
import axles from "../utils/axles.json";
import { fetchRecords, fetchCandidates } from "../utils/api";



import {useFetch} from '../hooks/useFetch'

const customStyles = {
  container: (provided) => ({
    ...provided,
    fontSize: "0.9rem",
    fontFamily: '"Montserrat", sans-serif',
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

const Home = () => {
  const [selectedAxle, setSelectedAxle] = useState(0);
  const [SelectedQuestion, setSelectedQuestion] = useState(null);
  const graphRef = useRef();

  const {data: questions, loading: loadingQuestions} = useFetch("Preguntas", [])
  const {data: quotes, loading: loadingQuotes} = useFetch("Frases_Candidates", [])
  const {data: news, loading: loadingNews} = useFetch("Novedades", [])
  const {data: candidates, loading: loadingCandidates} = useFetch("Respuestas_Candidates", [])

  useEffect(() => {
    graphRef.current.scrollLeft =
      graphRef.current.scrollWidth / 2 - graphRef.current.clientWidth / 2;
  });

  const handleChange = (value) => {
    setSelectedQuestion(value);
  };

  return (
    <>
      <Container background="backgroundGray" mbHeight="55vh" dsHeight="45vh">
        <Wrapper
          display="flex"
          justifyCont="center"
          alignItems="center"
          height="100%"
          style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        >
          <Title dsColor='white' mbColor='white' mobileFontSize='customXlg'>Banner</Title>
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
            {axles?.axles.map((a, index) => (
              <Option
                selected={selectedAxle === index}
                onClick={() => {
                  setSelectedQuestion(null);
                  setSelectedAxle(index);
                }}
                key={a.id}
              >
                <Paragraph
                  weight="600"
                  desktopMargin="0 0.8rem;"
                  color="white"
                  desktopFontSize="xs"
                >
                  {a.title}
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
            <AxleTitle>
              <Title
                mobileFontSize="lg"
                desktopFontSize="lg"
                color="feminindexRed"
                margin="1rem 0"
              >
                {axles?.axles[selectedAxle].title}
              </Title>
            </AxleTitle>
            <AxleDescription>
              <LeftArrowWrapper
                selectedAxle={selectedAxle}
                onClick={() => {
                  setSelectedQuestion(null);
                  setSelectedAxle((prevValue) => prevValue - 1);
                }}
              >
                <LeftArrow />
              </LeftArrowWrapper>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="base"
                color="dark"
                mobilePadding="0.2rem"
                desktopPadding="0"
                mobileMargin='1rem 0'
              >
                {axles?.axles[selectedAxle].description}
              </Paragraph>
              <RightArrowWrapper
                selectedAxle={selectedAxle}
                onClick={() => {
                  setSelectedQuestion(null);
                  setSelectedAxle((prevValue) => prevValue + 1);
                }}
              >
                <RightArrow />
              </RightArrowWrapper>
            </AxleDescription>    
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
                  options={questions
                    .filter(
                      (q) =>
                        q.fields["Id (from Ejes)"][0] ===
                          axles?.axles[selectedAxle].id &&
                        q.fields?.Pregunta !== "Comentario"
                    )
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
      <Container background="backgroundLightGray">
        <Wrapper
          mbMargin="0 2rem"
          dsMargin="0 auto"
          maxWidth="1024px"
          dsPadding="3rem 0"
          mbPadding="2rem 0"
        >
          <Title mobileFontSize="lg" desktopFontSize="lg" color="dark">
            Frases
          </Title>
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
                          <TelegramShareButton
                            url={`https://feminindex.com`}
                            title={`"${q.fields.Frase}" - ${q.fields.Nombre_Candidate}`}
                          >
                            <Linkedin />
                          </TelegramShareButton>
                        </span>
                        <span>
                          <TelegramShareButton
                            url={`https://feminindex.com`}
                            title={`"${q.fields.Frase}" - ${q.fields.Nombre_Candidate}`}
                          >
                            <Telegram />
                          </TelegramShareButton>
                        </span>
                      </SocialMedia>
                    </Share>
                  </ShareWrapper>
                </Machifrase>
              ))}
            </Frases>
          }
        </Wrapper>
      </Container>
      <Container background="white">
        <Wrapper
          mbMargin="0 2rem"
          dsMargin="0 auto"
          maxWidth="1024px"
          dsPadding="3rem 0"
          mbPadding="2rem 0"
        >
          <Title mobileFontSize="lg" desktopFontSize="lg" color="dark">
            Novedades
          </Title>
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

const OptionsWrapper = styled.section`
  display: none;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
  }
`;

const Option = styled.div`
  width: 150px;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  cursor: pointer;

  text-align: center;

  margin: 0 0.8rem;

  background: ${props => props.theme.colors.backgroundGray};

  line-height: 1.5;
  font-weight: 600;

  cursor: pointer;
  text-decoration: ${(props) => (props.selected ? "white underline" : "unset")};
  text-underline-offset: 4px;
  font-size: 12px;
`;

const AxlesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    text-align: left;
  }
`;

const AxleTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 35%;
    position: relative;
    display: block;
  }
`;

const AxleDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 65%;
  }
`;

const LeftArrowWrapper = styled.div`
  align-self: center;
  margin-right: 1rem;
  visibility: ${(props) => (props.selectedAxle !== 0 ? "visible" : "hidden")};
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    position: absolute;
    left: -6rem;
    top: 45%;
    cursor: pointer;
  }
`;

const RightArrowWrapper = styled.div`
  align-self: center;
  margin-left: 1rem;
  visibility: ${(props) => (props.selectedAxle !== 4 ? "visible" : "hidden")};
  
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    position: absolute;
    right: -6rem;
    top: 45%;
    cursor: pointer;
  }
`;

const Bancas = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
  }
`;

const SelectWrapper = styled.div`
  width: 100%;
`;

const Frases = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  &:first-child {
    margin-right: 4rem;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Novedades = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Machifrase = styled.div`
  background-color: ${props => props.theme.colors.backgroundGray};
  position: relative;

  height: 100%;

  margin: 1rem 0;
  
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-bottom: 0rem;
    min-height: 20rem;
    width: 50%;

    &:first-child {
      margin-right: 4rem;
    }
  }
`;

const Noveded = styled.a`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${(props) => props.image});
  object-fit: cover;
  width: 100%;
  height: 15rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  padding: 2rem;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-bottom: 0rem;
    width: 30%;
    padding: unset;
  }
`;

const AvatarWrapper = styled.div`
  position: absolute;
  left: -3.5rem;
  top: 1rem;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    left: -4rem;
  }
`;

const ShareWrapper = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 1rem;
`;

const Share = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.colors.lightGray};

  padding: 0.5rem 0.75rem;

  border-bottom: 2px solid ${props => props.theme.colors.green};
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    margin: 0 0.5rem;
  }
`;

const GraphWrapper = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
`;

export default Home;
