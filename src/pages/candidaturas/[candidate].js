import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router'

import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import Select, { components } from "react-select";

import {Share, SocialMedia, Li, TrafficLights, Comments, Image, ListWrapper} from '../../styles/candidate'
import {BlackFacebook, BlackInstagram, BlackYoutube, BlackTwitter, BlackLinkedin} from '../../assets/Icons/CandidateIcons/index'
import DownArrow from '../../assets/Icons/Arrows/DownArrow'

import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';

import Twitter from '../../assets/Icons/Twitter';
import Facebook from '../../assets/Icons/Facebook';
import Telegram from '../../assets/Icons/Whatsapp';
import Linkedin from '../../assets/Icons/Linkedin';
import Ellipse from '../../assets/Icons/Ellipse'
import Spinner from '../../assets/Icons/Spinner'

import {useFetch} from '../../hooks/useFetch'
import { findQuestionsByCandidate } from '../../helpers/find-questions-by-candidate';
import {findAxlesWithQuestionsAnswered} from '../../helpers/find-axles-with-questions-answered';

const questionIcon = (score) => {
  switch(true) {
    case score === 1:
      return <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0.5rem', background: '#060606'}}><Ellipse fill={'#00D857'} /></span>
    case score === 0:
      return <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0.5rem', background: '#060606'}}><Ellipse fill={'#FF2C2C'} /></span>
    case score === 0.5:
      return <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0.5rem', background: '#060606'}}><Ellipse fill={'#FFF300'} /></span>
  }
}

const customStyles = {
  container: (provided) => ({
    ...provided,
    fontSize: "0.9rem",
    fontFamily: '"Montserrat", sans-serif',
    width: '35%'
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
    padding: "0.5rem 1rem 0.5rem 0"
  }),
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DownArrow />
    </components.DropdownIndicator>
  );
};


export default function Candidate() {
  const [selectedAxle, setSelectedAxle] = useState({
    value: "recc4TS0OM4ICPrKb",
    name: 'Derechos sexuales y reproductivos',
    label: 'Derechos sexuales y reproductivos'
  })
  const router = useRouter()
  const { candidate } = router.query

  const {data: candidateData, loading: loadingCandidate} = useFetch("Respuestas_Candidates", {}, candidate)
  const {data: questionsData, loading: loadingQuestions} = useFetch("Preguntas", [])
  const {data: questionsOptionsData, loading: loadingOptions} = useFetch("Preguntas_Opciones", [])
  const {data: axles, loading: loadingAxles} = useFetch("Ejes", [])
  const {data: candidateComment, loading: loadingComment} = useFetch("Comentarios_Candidates", {}, candidate)

  const newCandidate = findQuestionsByCandidate(candidateData, questionsData, questionsOptionsData)
  const axlesWithQuestionsAnswered = findAxlesWithQuestionsAnswered(axles, newCandidate)

  const commentsByAxle = candidateComment?.Comentarios_ejes?.map((cc, idx) => {
    return {
      comentario: cc,
      pregunta: candidateComment?.Preguntas_ejes[idx],
      axle_id: candidateComment.Id_eje[idx]
    }
  })

  const handleChange = (value) => {
    setSelectedAxle(value);
  };

  return (
    <>
    <Container>
      <Wrapper >
        <Wrapper 
          dsPadding={'4rem 6rem'}
          mbPadding={'2rem'}
          dsBackground={'linear-gradient(to bottom, #4A4A4A 40%, white 40%, white 100%)'}
          mbBackground={'white'}
          display='flex' 
          justifyCont='space-between' 
        >
          {loadingCandidate 
            ? <Spinner />
            : <>
                <Wrapper dsWidth={'30%'} >
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Image />
                </div>
                <SocialMedia style={{display: 'flex', justifyContent: 'center', margin: '0.75rem 1rem'}}>
                  <button style={{background: 'transparent', border: 'none', cursor: 'pointer'}}>
                    <BlackFacebook />
                  </button>
                  <button style={{background: 'transparent', border: 'none', cursor: 'pointer'}}>
                    <BlackInstagram />
                  </button>
                  <button style={{background: 'transparent', border: 'none', cursor: 'pointer'}}>
                    <BlackLinkedin />
                  </button>
                  <button style={{background: 'transparent', border: 'none', cursor: 'pointer'}}>
                    <BlackTwitter />
                  </button>
                  <button style={{background: 'transparent', border: 'none', cursor: 'pointer'}}>
                    <BlackYoutube />
                  </button>
                </SocialMedia>
              </Wrapper> 
              <Wrapper dsWidth={'30%'} >
                <Title mobileFontSize='customXlg' weight='bold' margin='0 0 2rem 0' dsColor='white' mbColor='#4A4A4A'>
                  {candidateData?.Nombre}
                </Title>
                <Paragraph
                  mobileFontSize="base"
                  desktopFontSize="base"
                  color="backgroundGray"
                  desktopMargin='4rem 0 0 0'
                >
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                </Paragraph>
                <Share>
                  <span>
                    <TwitterShareButton
                      url={`https://feminindex.com${router.asPath}`}
                      title={`Mira el puntaje que obtuvo ${candidateData?.Nombre} en cuestiones de género!`}
                      hashtag={"#Feminindex"}
                      description={"Feminindex"}
                    >
                      <Twitter />
                    </TwitterShareButton>
                  </span>
                  <span>
                  <FacebookShareButton
                    url={`https://feminindex.com${router.asPath}`}
                    quote={`Mira el puntaje que obtuvo ${candidateData?.Nombre} en cuestiones de género!`}
                    hashtag={"#Feminindex"}
                    description={"Feminindex"}
                  >
                    <Facebook />
                  </FacebookShareButton>
                  </span>
                  <span>
                    <TelegramShareButton
                      url={`https://feminindex.com${router.asPath}`}
                      title={`Mira el puntaje que obtuvo ${candidateData?.Nombre} en cuestiones de género!`}
                    >
                      <Telegram />
                    </TelegramShareButton>
                  </span>
                  <span>
                    <LinkedinShareButton
                      url={`https://feminindex.com${router.asPath}`}
                      title={`Mira el puntaje que obtuvo ${candidateData?.Nombre} en cuestiones de género!`}
                    >
                      <Linkedin />
                    </LinkedinShareButton>
                  </span>
                </Share>
              </Wrapper>
            </>
          }
          <Wrapper display='flex' flexDir={'column-reverse'} dsWidth='30%'>
            <TrafficLights background={'#EFEDED'}>
              <Paragraph mobileFontSize='base' color='dark' weight='bold' style={{textAlign: 'center'}}>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Paragraph>
              <div style={{display: 'flex', justifyContent: 'space-between', width: 'fit-content', margin: '0 auto', marginTop: '3rem', padding: '1rem', background: '#060606'}}>
                <span style={{margin: '0 0.75rem'}}><Ellipse fill={'#00D857'} /></span>
                <span style={{margin: '0 0.75rem'}}><Ellipse fill={'#FFF300'} /></span>
                <span style={{margin: '0 0.75rem'}}><Ellipse fill={'#FF2C2C'} /></span>
              </div>
            </TrafficLights>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper display='flex'>
        <Wrapper mbMargin={'0 2rem'} dsMargin={'0 6rem'}>
          <Title weight='700' color='dark' margin='2rem 0'>
            Preguntas
          </Title>
          {loadingQuestions 
            ? <Spinner />
            : <Select
                styles={customStyles}
                id={"Questions"}
                instanceId={"Questions"}
                isSearchable={false}
                value={selectedAxle}
                defaultValue={selectedAxle.name}
                onChange={handleChange}
                components={{ DropdownIndicator }}
                // noOptionsMessage={"Sin opciones"}
                placeholder={"Selecciona la pregunta"}
                options={axles
                  .map((q) => ({
                    value: q?.id,
                    label: q?.fields.Ejes,
                    name: q?.fields.Ejes,
                  }))}
              />
          }

          <ListWrapper>
            {newCandidate.questions && newCandidate.questions
              .filter(ncq => ncq?.axle_id === selectedAxle.value)
              .map((ans, idx) =>
                <Li key={idx} background={'#EFEDED'}>
                  <Paragraph desktopMargin='0 0 1rem 0' desktopFontSize='base' mobileFontSize='base' color='dark' weight='bold' mobilePadding='1.5rem 1.5rem 0 1.5rem'>
                    {ans.question}:
                  </Paragraph>
                  <Paragraph desktopFontSize='base' mobileFontSize='base' color='dark' weight='normal' mobilePadding='0 1.5rem 1.5rem 1.5rem'>
                    {ans.Opcion}
                  </Paragraph>
                  <span>
                    {questionIcon(ans.Puntaje)}
                  </span>
                </Li>
            )}
            {loadingComment 
              ? <Spinner />
              : <div>
                  {commentsByAxle?.filter(cba => cba?.axle_id === selectedAxle.value)
                    .map(cba => 
                      <>
                        <Title weight='700' color='dark' margin='2rem 0'>
                          {cba.pregunta}
                        </Title>
                        <Comments>{cba.comentario}</Comments>
                      </>      
                    )
                  }
                </div>
            }
          </ListWrapper>
        </Wrapper>
      </Wrapper>
    </Container>
    </>
  )
}
