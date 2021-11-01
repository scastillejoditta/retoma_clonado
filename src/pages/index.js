import { useState, useEffect } from "react";

import styled from "styled-components";

// Assets
import LeftArrow from "../assets/Icons/Arrows/LeftArrow";
import RightArrow from "../assets/Icons/Arrows/RightArrow";
import DownArrow from "../assets/Icons/Arrows/DownArrow";
import Economia from "../assets/Icons/Economia";
import Desktop from "../assets/Icons/Bancas/Desktop/Desktop.png";
import Mobile from "../assets/Icons/Bancas/Mobile/Mobile.png";

// Components
import Container from "../components/Container";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";
import Wrapper from "../components/Wrapper";
import Select, { components } from "react-select";

import axles from "../utils/axles.json";
import { fetchRecords } from "../utils/api";

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
  const [SelectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    const getQuestions = async () => {
      let questions = await fetchRecords("Preguntas");
      setQuestions(questions.data.records);
    };
    getQuestions();
  }, []);

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
          {/* )} */}
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
          <SelectWrapper>
            <Select
              styles={customStyles}
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
                    q.fields.Pregunta !== "Comentario"
                )
                .map((q) => ({ value: q.id, label: q.fields.Pregunta }))}
            />
          </SelectWrapper>
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

const EconomiaWrapper = styled.div`
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    position: absolute;
    right: 2rem;
    top: -4rem;
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

export default Home;
