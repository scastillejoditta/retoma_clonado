import React, {useState} from 'react';
import { useRouter } from 'next/router'

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import Select, { components } from "react-select";

import {Share, SocialMedia, Li, TrafficLightsWrapper, SectionWrapper, Image, ListWrapper, TicksWrapper} from '../../styles/candidate'
import DownArrow from '../../assets/Icons/Arrows/DownArrow'

import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';

import Twitter from '../../assets/Icons/Twitter';
import Facebook from '../../assets/Icons/Facebook';
import Telegram from '../../assets/Icons/Whatsapp';
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

const trafficLightsStyles = {display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0.35rem', background: '#060606'}

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
    fontSize: "20px",
    fontFamily: '"Supreme-Medium"',
    fontWeight: '700',
    minWidth: '200px',
    margin: '4rem 2rem 0 2rem',
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
  const [selectedAxle, setSelectedAxle] = useState(null)
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

  const filterAnswersByAxle = newCandidate?.questions?.filter(ncq => {
    if(selectedAxle) {
      return ncq?.axle_id === selectedAxle?.value
    } else {
      return  ncq?.axle_id === axlesWithQuestionsAnswered[0]?.value
    }
  })

  const filterCommentsByAxle = commentsByAxle?.filter(cba => {
    if(selectedAxle) {
      return cba?.axle_id === selectedAxle?.value
    } else {
      return cba?.axle_id === axlesWithQuestionsAnswered[0]?.value
    }
  }) 
  
  return (
    <>
    <Container>
      <Wrapper 
        dsBackground={'linear-gradient(to bottom, #FFCCF1 40%, white 40%, white 100%)'}
      >
        <Wrapper 
          dsPadding={'4rem 6rem'}
          mbPadding={'2rem'}
          mbBackground={'white'}
          display='flex' 
          justifyCont='flex-start' 
          maxWidth='1024px'
          dsMargin='0 auto'
          dsBackground={'linear-gradient(to bottom, #FFCCF1 40%, white 40%, white 100%)'}
        >
          {loadingCandidate 
            ? <Spinner />
            : <>
                <Wrapper  dsWidth={'30%'} >
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
      <Wrapper maxWidth='1024px' dsMargin='0 auto' display='flex' justifyCont='space-between'>
        <Wrapper>
          {loadingQuestions 
            ? <Spinner />
            : <SectionWrapper>
                <Wrapper display='flex' justifyCont='flex-start' alignItems='center'>
                  <TrafficLightsWrapper>
                    <TrafficLights />
                    <Paragraph  mobileFontSize='base' color='black' weight='500' desktopMargin='0.5rem 0' style={{textAlign: 'justify'}}>
                      <b>Verde:</b> le dio prioridad alta al problema o está a favor de la solución. <b>Amarillo:</b> le dio prioridad media al problema o no ha definido una postura respecto a la solución. <b>Rojo:</b> le dio prioridad baja al problema o está en contra de la solución.
                    </Paragraph>
                  </TrafficLightsWrapper>
                  <div style={{width: '200px', margin: '0 2rem'}}>
                    <div>
                      <TicksWrapper>
                        <div 
                          style={{
                            width: 'fit-content',
                            height: 'fit-content',
                            padding: '0.5rem', 
                            background: '#060606',
                            margin: '0 1rem 0 0'
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
                <Select
                  styles={customStyles}
                  id={"Questions"}
                  instanceId={"Questions"}
                  isSearchable={false}
                  isSelected={selectedAxle}
                  value={selectedAxle ? selectedAxle : axlesWithQuestionsAnswered[0]}
                  onChange={handleChange}
                  components={{ DropdownIndicator }}
                  placeholder={"Selecciona la pregunta"}
                  options={axlesWithQuestionsAnswered}
                />
              </SectionWrapper>
          }
        </Wrapper>
      </Wrapper>
      <Wrapper maxWidth='1024px' dsMargin='0 auto' dsPadding='1rem 0'>
        <ListWrapper>
          {filterAnswersByAxle && filterAnswersByAxle
            .map((ans, idx) =>
              <Li key={idx}>
                <Paragraph style={{lineHeight: '25px'}} desktopMargin='0 0 1rem 0' desktopFontSize='base' mobileFontSize='base' color='black' weight='normal' desktopPadding='2rem 4rem 1rem 2rem' mobilePadding='1rem 3rem 3rem 1rem'>
                  {ans.question}:
                </Paragraph>
                <span>
                  {questionIcon(ans.Puntaje)}
                </span>
              </Li>
          )}
        </ListWrapper>
      </Wrapper>
      
      <Wrapper mbPadding='0.25rem 0 1rem 0' dsPadding='1rem 0' dsBackground='#FFCCF1' mbBackground='#FFCCF1'>
        <ListWrapper>
          {filterCommentsByAxle && 
            filterCommentsByAxle.length !== 0
            ?  filterCommentsByAxle
                .map((cba, idx) => 
                  <Wrapper maxWidth='1024px' dsMargin='0 auto' key={idx}>
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
                  </Wrapper>      
              )
            : <Title weight='700' color='dark' padding='1rem' margin='2rem 0'>
                Le candidate aún no hizo comentarios sobre este eje, por favor selecciona uno distinto.
              </Title>
          }
        </ListWrapper>
      </Wrapper>
    </Container>
    </>
  )
}
