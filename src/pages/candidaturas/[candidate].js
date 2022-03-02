import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router'

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import Select, { components } from "react-select";

import {Share, SocialMedia, Li, TrafficLightsWrapper, SectionWrapper, Image, ListWrapper, TicksWrapper} from '../../styles/candidate'
import {BlackTwitter} from '../../assets/Icons/CandidateIcons/index'
import DownArrow from '../../assets/Icons/Arrows/DownArrow'

import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button'

import Twitter from '../../assets/Icons/Twitter';
import Facebook from '../../assets/Icons/Facebook';
import Telegram from '../../assets/Icons/Whatsapp';
import Linkedin from '../../assets/Icons/Linkedin';
import GreenLight from '../../assets/Icons/GreenLight'
import YellowLight from '../../assets/Icons/YellowLight'
import RedLight from '../../assets/Icons/RedLight'
import Spinner from '../../assets/Icons/Spinner'
import TrafficLights from '../../assets/Icons/TrafficLights'
import Tick from '../../assets/Icons/Tick'
import Cross from '../../assets/Icons/Cross'

import {useFetch} from '../../hooks/useFetch'
import { findQuestionsByCandidate } from '../../helpers/find-questions-by-candidate';
import {findAxlesWithQuestionsAnswered} from '../../helpers/find-axles-with-questions-answered';

const headers = {
  'Authorization': `Bearer ${process.env.AIRTABLE_KEY}`
}

export async function getStaticProps({ params }) {
  // Call an external API endpoint to get candidate
  const url = "Respuestas_Candidates"
  const res = await fetch(`${process.env.URL_AIRTABLE_TOKEN}/${url}/${params.candidate}`, {headers})
  const candidate = await res.json()


  // Pass post data to the page via props
  return { props: { candidate } }
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get candidates
  const url = "Respuestas_Candidates"
  const res = await fetch(`${process.env.URL_AIRTABLE_TOKEN}/${url}`, {headers})
  const candidates = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = candidates.records.map(candidate => ({
    params: { candidate: candidate.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

const trafficLightsStyles = {display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0.5rem', background: '#060606'}

const questionIcon = (score) => {
  switch(true) {
    case score === 1:
      return <span style={trafficLightsStyles}><GreenLight /></span>
    case score === 0.5:
      return <span style={trafficLightsStyles}><YellowLight /></span>
    case score === 0:
      return <span style={trafficLightsStyles}><RedLight /></span>
  }
}

    
const customStyles = {
  singleValue: (provided, state) => ({
    ...provided,
    color: 'black'
  }),
  container: (provided, state) => ({
    ...provided,
    fontSize: "0.9rem",
    fontFamily: '"Montserrat", sans-serif',
    width: '40%',
    "@media (max-width: 768px)": {
      width: '100%'
    } 
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
    padding: "1.5rem 1rem 1.5rem 0"
  }),
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DownArrow />
    </components.DropdownIndicator>
  );
};


export default function Candidate({ candidate }) {
  const [selectedAxle, setSelectedAxle] = useState({
    value: "recc4TS0OM4ICPrKb",
    name: 'Derechos sexuales y reproductivos',
    label: 'Derechos sexuales y reproductivos'
  })

  const router = useRouter()

  const {data: candidateData, loading: loadingCandidate} = useFetch("Respuestas_Candidates", {}, candidate.id)
  const {data: questionsData, loading: loadingQuestions} = useFetch("Preguntas", [])
  const {data: questionsOptionsData, loading: loadingOptions} = useFetch("Preguntas_Opciones", [])
  const {data: axles, loading: loadingAxles} = useFetch("Ejes", [])
  const {data: candidateComment, loading: loadingComment} = useFetch("Comentarios_Candidates", {}, candidate.id)

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

  console.log(newCandidate)

  return (
    <>
    <Container>
      <Wrapper >
        <Wrapper 
          dsPadding={'4rem 6rem'}
          mbPadding={'2rem'}
          dsBackground={'linear-gradient(to bottom, #FFCCF1 40%, white 40%, white 100%)'}
          mbBackground={'white'}
          display='flex' 
          justifyCont='flex-start' 
        >
          {loadingCandidate 
            ? <Spinner />
            : <>
                <Wrapper dsWidth={'30%'} >
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image src={candidateData?.Foto} />
                  </div>
                  <SocialMedia style={{display: 'flex', justifyContent: 'center', margin: '0.75rem 1rem'}}>
                    <a 
                      style={{
                        background:'transparent',
                        color:'#7E3BFF',
                        textDecoration: 'none'
                      }}
                      target='_blank'
                      href={candidateData?.Twitter}
                    >
                      @/{candidateData?.Twitter?.substr(20)}
                    </a>
                  </SocialMedia>
                </Wrapper> 
                <Wrapper dsWidth={'30%'} >
                  <Title mobileFontSize='customXlg' weight='bold' margin='0 0 2rem 0' dsColor='#' mbColor='#7E3BFF'>
                    {candidateData?.Nombre}
                  </Title>
                  <Paragraph desktopMargin='4rem 0 1rem 0' mbMargin='1rem 0'>
                    Partido político: <span style={{color: '#7E3BFF'}}>{candidateData?.Partido_politico}</span>
                  </Paragraph>
                  <Paragraph>
                    Corporación: <span style={{color: '#7E3BFF'}}>{candidateData?.Corporación}</span>
                  </Paragraph>
                  <Share>
                    <span>
                      <TwitterShareButton
                        url={`https://retoma.co${router.asPath}`}
                        title={`Mira lo que respondió ${candidateData?.Nombre} en cuestiones de género!`}
                        hashtag={"#Retoma"}
                        description={"Retoma"}
                      >
                        <Twitter />
                      </TwitterShareButton>
                    </span>
                    <span>
                    <FacebookShareButton
                      url={`https://retoma.co${router.asPath}`}
                      title={`Mira lo que respondió ${candidateData?.Nombre} en cuestiones de género!`}
                      hashtag={"#Retoma"}
                      description={"Retoma"}
                    >
                      <Facebook />
                    </FacebookShareButton>
                    </span>
                    <span>
                      <WhatsappShareButton
                        url={`https://feminindex.com${router.asPath}`}
                        title={`Mira el puntaje que obtuvo ${candidateData?.Nombre} en cuestiones de género!`}
                      >
                        <Telegram />
                      </WhatsappShareButton>
                    </span>
                  </Share>
                </Wrapper>
              </>
          }
        </Wrapper>
      </Wrapper>
      <Wrapper display='flex' justifyCont='space-between'>
        <Wrapper mbMargin={'0 2rem'} dsMargin={'0 6rem'}>
          {loadingQuestions 
            ? <Spinner />
            : <SectionWrapper>
                <Select
                  styles={customStyles}
                  id={"Questions"}
                  instanceId={"Questions"}
                  isSearchable={false}
                  isSelected={selectedAxle}
                  value={selectedAxle}
                  onChange={handleChange}
                  components={{ DropdownIndicator }}
                  placeholder={"Selecciona la pregunta"}
                  options={axlesWithQuestionsAnswered
                    .filter(awqa => awqa.answers.length !== 0)
                    .map((q) => ({
                      value: q?.id,
                      label: q?.fields.Ejes,
                      name: q?.fields.Ejes,
                    }))}
                />
                <Wrapper display='flex' justifyCont='flex-start' alignItems='center'>
                  <TrafficLightsWrapper>
                    <TrafficLights />
                    <Paragraph  mobileFontSize='base' color='black' weight='500' style={{textAlign: 'justify'}}>
                      <b>Verde:</b> le dio prioridad alta al problema o está a favor de la solución. <b>Amarillo:</b> le dio prioridad media al problema o no ha definido una postura respecto a la solución. <b>rojo:</b> le dio prioridad baja al problema o está en contra de la solución.
                    </Paragraph>
                  </TrafficLightsWrapper>
                  <div style={{width: '250px'}}>
                    <div>
                      <TicksWrapper>
                        <div 
                          style={{
                            width: 'fit-content',
                            height: 'fit-content',
                            padding: '0.5rem', 
                            background: '#060606',
                            margin: '0 1rem'
                          }}
                        >
                          <Tick />
                        </div>
                        <div 
                          style={{
                            width: 'fit-content',
                            height: 'fit-content',
                            padding: '0.5rem', 
                            background: '#060606'
                          }}
                        >
                          <Cross />
                        </div>
                      </TicksWrapper>
                    </div>
                    <Paragraph mobileFontSize='base' color='black' weight='500' style={{textAlign: 'justify'}}>
                      <b>Si</b> se comprometió a resolver el problema o implementar. <b>No</b> se comprometió a resolver el problema o implementar.
                    </Paragraph>
                  </div>
                </Wrapper>
              </SectionWrapper>
          }
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <ListWrapper>
          {newCandidate.questions && newCandidate.questions
            .filter(ncq => ncq?.axle_id === selectedAxle.value)
            .map((ans, idx) =>
              <Li key={idx}>
                <Paragraph style={{lineHeight: '25px'}} desktopMargin='0 0 1rem 0' desktopFontSize='base' mobileFontSize='base' color='black' weight='normal' mobilePadding='1.5rem 1.5rem 0 1.5rem'>
                  {ans.question}:
                </Paragraph>
                <Paragraph style={{lineHeight: '25px'}} desktopFontSize='regular' mobileFontSize='regular' color='black' weight='900' mobilePadding='0 1.5rem 1.5rem 1.5rem'>
                  {ans.Opcion}
                </Paragraph>
                <span>
                  {questionIcon(ans.Puntaje)}
                </span>
              </Li>
          )}
        </ListWrapper>
      </Wrapper>
      
      <Wrapper dsPadding='1rem 0' dsBackground='#FFCCF1' mbBackground='#FFCCF1'>
        {loadingComment 
          ? <Spinner />
          : <ListWrapper>
              {commentsByAxle?.filter(cba => cba?.axle_id === selectedAxle.value)
                .map((cba, idx) => 
                  <div key={idx}>
                    <Title weight='700' color='dark' margin='2rem 0'>
                      {cba.pregunta}
                    </Title>
                    <Paragraph
                      style={{lineHeight: '25px', border: '2px solid black', background: 'white'}}
                      desktopPadding='1rem'
                      mobilePadding='1rem'
                    >
                      {cba.comentario}
                    </Paragraph>
                  </div>      
                )
              }
            </ListWrapper>
        }
      </Wrapper>
    </Container>
    </>
  )
}
