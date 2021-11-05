import { useState, useEffect, useRef } from "react";
import _ from "lodash";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";

import styled from "styled-components";

// Assets
import LeftArrow from "../assets/Icons/Arrows/LeftArrow";
import RightArrow from "../assets/Icons/Arrows/RightArrow";
import DownArrow from "../assets/Icons/Arrows/DownArrow";
import Economia from "../assets/Icons/Economia";
import Desktop from "/public/images/Bancas/Desktop/Desktop.png";
import Mobile from "/public/images/Bancas/Mobile/Mobile.png";
import Avatar from "../assets/Icons/Avatar";
import Twitter from "../assets/Icons/Twitter";
import Facebook from "../assets/Icons/Facebook";
import Telegram from "../assets/Icons/Telegram";

// Components
import Container from "../components/Container";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Wrapper from "../components/Wrapper";
import Graph from "../components/Graph";
import Select, { components } from "react-select";
import axles from "../utils/axles.json";
import { fetchRecords, fetchCandidates } from "../utils/api";

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
  const [questions, setQuestions] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [news, setNews] = useState([]);
  const [SelectedQuestion, setSelectedQuestion] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const graphRef = useRef();

  useEffect(() => {
    const getData = async () => {
      let questions = await fetchRecords("Preguntas");
      let candidateData = await fetchRecords("Respuestas_Candidates");
      setQuestions(questions.data.records);
      setCandidates(candidateData.data.records);
    };
    getData();
    const getQuotes = async () => {
      let quotes = await fetchRecords("Machifrases_Candidates");
      if (quotes.data.records) {
        setQuotes(_.sampleSize(quotes.data.records, 2));
      }
    };
    getQuotes();
    const getNews = async () => {
      let news = await fetchRecords("Novedades");
      if (news.data.records) {
        setNews(_.sampleSize(news.data.records, 3));
      }
    };
    getNews();
  }, []);

  useEffect(() => {
    graphRef.current.scrollLeft =
      graphRef.current.scrollWidth / 2 - graphRef.current.clientWidth / 2;
  });

  const handleChange = (value) => {
    setSelectedQuestion(value);
  };

  return (
    <>
      <Container background="backgroundRed" mbHeight="55vh" dsHeight="45vh">
        <Wrapper
          display="flex"
          justifyCont="center"
          alignItems="center"
          height="100%"
        >
          <Bancas title="Tu herramienta para votar de manera informada" />
        </Wrapper>
      </Container>
      <Container background="white">
        <Wrapper
          display="flex"
          justifyCont="center"
          mbMargin="0 2rem"
          dsMargin="0 auto"
          maxWidth="768px"
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
          maxWidth="768px"
          position="relative"
        >
          <LeftArrowWrapper
            selectedAxle={selectedAxle}
            onClick={() => {
              setSelectedQuestion(null);
              setSelectedAxle((prevValue) => prevValue - 1);
            }}
          >
            <LeftArrow />
          </LeftArrowWrapper>

          <AxlesWrapper>
            <AxleTitle>
              <Title
                mobileFontSize="lg"
                desktopFontSize="lg"
                color="feminindexRed"
                margin="0"
              >
                {axles?.axles[selectedAxle].title}
              </Title>
            </AxleTitle>
            <AxleDescription>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="base"
                color="dark"
                mobilePadding="0.2rem"
                desktopPadding="0"
              >
                {axles?.axles[selectedAxle].description}
              </Paragraph>
            </AxleDescription>
          </AxlesWrapper>
          <RightArrowWrapper
            selectedAxle={selectedAxle}
            onClick={() => {
              setSelectedQuestion(null);
              setSelectedAxle((prevValue) => prevValue + 1);
            }}
          >
            <RightArrow />
          </RightArrowWrapper>
        </Wrapper>
        <Wrapper
          display="flex"
          justifyCont="center"
          mbMargin="0 4rem 2rem"
          dsMargin="0 auto"
          maxWidth="768px"
          dsPadding="2rem 0"
          position="relative"
        >
          <SelectWrapper>
            <Select
              styles={customStyles}
              id={"Questions"}
              instanceId={"Questions"}
              isSearchable={false}
              value={SelectedQuestion}
              onChange={handleChange}
              components={{ DropdownIndicator }}
              noOptionsMessage={"Sin opciones"}
              placeholder={"Selecciona la pregunta"}
              options={questions
                .filter(
                  (q) =>
                    q.fields["Id (from Ejes)"][0] ===
                      axles?.axles[selectedAxle].id &&
                    q.fields.Pregunta !== "Comentario"
                )
                .map((q) => ({
                  value: q.id,
                  label: q.fields.Pregunta,
                  name: q.fields.Name,
                }))}
            />
          </SelectWrapper>
        </Wrapper>
        <Wrapper
          display="flex"
          justifyCont="center"
          mbMargin="0 4rem"
          dsMargin="0 auto"
          maxWidth="768px"
          dsPadding="2rem 0"
          position="relative"
        >
          <GraphWrapper ref={graphRef}>
            <Graph
              data={candidates}
              size={{ width: 768, height: 400, margin: 0 }}
              question={SelectedQuestion?.name}
            />
          </GraphWrapper>
        </Wrapper>
      </Container>
      <Container background="natural">
        <Wrapper
          mbMargin="0 2rem"
          dsMargin="0 auto"
          maxWidth="768px"
          dsPadding="3rem 0"
          mbPadding="2rem 0"
        >
          <Title mobileFontSize="lg" desktopFontSize="lg" color="dark">
            Machifrases
          </Title>
        </Wrapper>
        <Wrapper
          display="flex"
          justifyCont="center"
          mbMargin="0 4rem"
          dsMargin="0 auto"
          maxWidth="768px"
          dsPadding="2rem 0 4rem 0"
          mbPadding="1rem 0"
        >
          <Machifrases>
            {quotes.map((q) => (
              <Machifrase key={q.id}>
                <AvatarWrapper>
                  {q.fields.Foto_Candidate ? (
                    <Picture
                      alt={q.fields.Nombre_Candidate}
                      src={q.fields.Foto_Candidate}
                    />
                  ) : (
                    <Avatar />
                  )}
                </AvatarWrapper>
                <Paragraph
                  mobileFontSize="base"
                  desktopFontSize="base"
                  desktopPadding="1rem 1rem 1rem 5rem"
                  mobilePadding="1rem 1rem 1rem 5rem"
                  color="white"
                >
                  "{q.fields.Frase}"
                </Paragraph>
                <Paragraph
                  mobileFontSize="base"
                  desktopFontSize="customBase"
                  weight="600"
                  desktopPadding="0rem 1rem 1rem 5rem"
                  mobilePadding="0rem 1rem 1rem 5rem"
                  color="white"
                >
                  {q.fields.Nombre_Candidate}
                </Paragraph>
                <ShareWrapper>
                  <Share>
                    <span>Compartir</span>
                    <SocialMedia>
                      <span>
                        <TwitterShareButton
                          url={`https://feminindex.com`}
                          title={`"${q.fields.Frase}" - ${q.fields.Nombre_Candidate}`}
                          hashtag={"#Machifrases"}
                          description={"Machifrases"}
                        >
                          <Twitter />
                        </TwitterShareButton>
                      </span>
                      <span>
                        <FacebookShareButton
                          url={`https://feminindex.com`}
                          quote={`"${q.fields.Frase}" - ${q.fields.Nombre_Candidate}`}
                          hashtag={"#Machifrases"}
                          description={"Machifrases"}
                        >
                          <Facebook />
                        </FacebookShareButton>
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
          </Machifrases>
        </Wrapper>
      </Container>
      <Container background="white">
        <Wrapper
          mbMargin="0 2rem"
          dsMargin="0 auto"
          maxWidth="768px"
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
          maxWidth="768px"
          dsPadding="2rem 0 4rem 0"
          mbPadding="1rem 0"
        >
          <Novedades>
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
        </Wrapper>
      </Container>
    </>
  );
};

const OptionsWrapper = styled.section`
  text-align: center;
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
  }
`;

const Option = styled.div`
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#E5616E" : "#494949")};
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
  background: url(${Mobile.src}) center / contain no-repeat;
  width: 100%;
  height: 100%;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    background: url(${Desktop.src}) center / contain no-repeat;
  }
`;

const SelectWrapper = styled.div`
  width: 100%;
`;

const Machifrases = styled.div`
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
  background-color: ${(props) => props.theme.colors.dark};
  height: 100%;
  max-width: 19rem;
  width: 100%;
  margin-left: 0rem;
  position: relative;
  margin-bottom: 3rem;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-bottom: 0rem;
    margin-left: 4rem;
    min-height: 15rem;
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
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-bottom: 0rem;
    width: 30%;
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

  background-color: #efeded;
  border-radius: 12px;

  padding: 0.1rem 0.75rem;

  > span {
    font-size: ${(props) => props.theme.fontSizes.base};
    color: ${(props) => props.theme.colors.dark};
    font-weight: 600;

    margin: 0 1rem 0 0;
  }
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    margin: 0 0.2rem;
  }
`;

const Picture = styled.img`
  width: 127px;
  border-radius: 50%;
`;

const GraphWrapper = styled.div`
  overflow-x: auto;
`;

export default Home;
