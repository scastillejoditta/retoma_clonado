import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import styled from 'styled-components';


import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';

import Person from '../../assets/Icons/Person';
import Score from '../../assets/Icons/Score';
import Twitter from '../../assets/Icons/Twitter';
import Facebook from '../../assets/Icons/Facebook';
import Message from '../../assets/Icons/Message';
import Positions from '../../assets/Icons/Positions';
import GoodWrapper from '../../assets/Icons/GoodWrapper';
import BadWrapper from '../../assets/Icons/BadWrapper';

import { fetchRecords, fetchRecord } from '../../utils/api';

const questionIcon = (score) => {
  switch(true) {
    case score > 0:
      return <GoodWrapper />
    case score <= 0:
      return <BadWrapper />
  }
}

export default function Candidate() {
  const router = useRouter()
  const { candidate } = router.query

  const [candidateData, setCandidate] = useState({})
  const [questionsData, setQuestionsData] = useState([])
  const [newCandidate, setNewCandidate] = useState({})
  const [questionsOptionsData, setQuestionsOptionsData] = useState([])
  const [axles, setAxles] = useState([])
  const [axlesWihQuestionsAnswered, setAxlesWithQuestionsAnswered] = useState([])

  useEffect(() => {
    const fetchCandidate = async () => {
      if(candidate) {
        const res = await fetchRecord('Respuestas_Candidates', candidate)
        setCandidate(res.data.fields);
      }
    }
    fetchCandidate();
  }, [candidate])

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await fetchRecords('Preguntas')
      setQuestionsData(res.data.records);
  }
    fetchQuestions();

  }, [candidateData])

  useEffect(() => {
    const fetchQuestionsOptions = async () => {
      const res = await fetchRecords('Preguntas_Opciones')
      setQuestionsOptionsData(res.data.records);
  }
  fetchQuestionsOptions();
  }, [])

  useEffect(() => {
    const fetchAxles = async () => {
      const res = await fetchRecords('Ejes')
      setAxles(res.data.records);
  }
  fetchAxles();
  }, [])

  useEffect(() => {
    if(candidateData, questionsData, questionsOptionsData) {
      let options = [...questionsOptionsData]
      let candidate = {...candidateData}
      let questions = [...questionsData]
      let optionsArr = []
      let questionsArr = []

      console.log(options, 'options')
      options.map(opt => {
        if(opt.fields.Opcion === candidate[opt.fields.Name]) {
          optionsArr.push(opt.fields)
        }

        candidate = {
          ...candidate,
          answers: [...optionsArr]
        }
      })

      questions
        .filter(q => q.fields.Pregunta !== 'Comentario')
        .map(q => {

          let objFound = candidate?.answers?.find(ca => ca.Name === q.fields.Name)

          objFound = {
            ...objFound,
            question: q.fields.Pregunta
          }

          if(objFound.Name) {
            questionsArr.push(objFound)
          }

          candidate = {
            ...candidate,
            questions: [...questionsArr]
          }
        })
        setNewCandidate(candidate)
    }
  }, [candidateData, questionsData, questionsOptionsData])


  useEffect(() => {
    if(axles, newCandidate) {
      let axlesCopy = [...axles]
      let candidatesCopy = {...newCandidate}

      let axlesWihQuestionsAnswered = axlesCopy.map(ax => {
        let answers = [];
        candidatesCopy?.questions?.map(cn => {
          if(ax.fields.Pregunta_front.includes(cn.question)) {
            answers.push(cn)
          }
        })
        return {
          ...ax,
          answers: [...answers]
        }
      })
      setAxlesWithQuestionsAnswered(axlesWihQuestionsAnswered)
    }
  }, [axles, newCandidate])

  const getScoreSum = (arr) => {
    let mapedArr = arr.map(q => q.Puntaje)
    return mapedArr.reduce((el, acc) => el + acc, 0)
  };

  console.log(newCandidate, 'candidate', axlesWihQuestionsAnswered, 'axles-with-questions')

  return (
    <>
    <Container>
      <Wrapper>
        <Container mbHeight='20vh' dsHeight='30vh' background='feminindexRed'></Container>
        <Wrapper display='flex' justifyCont='center' mbMargin='-5rem 4rem 0 4rem'>
          <PersonWrapper>
            <Person />
          </PersonWrapper>
          <div>
            <Title mobileFontSize='lg' weight='bold' margin='0 2rem 0 2rem' color='white'>
              {candidateData?.Nombre}
            </Title>
            <ParagraphWrapper>
              <Paragraph weight='regular' mobileFontSize='base' mobileMargin='0 1rem' desktopMargin='4rem 2rem' maxWidth='20vw'>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </Paragraph>
            </ParagraphWrapper>
          </div>
          <SvgWrapper>
            <Score />
          </SvgWrapper>
        </Wrapper>
        <Wrapper display='flex' justifyCont='center' mbMargin='0 2rem' dsMargin='0 auto' maxWidth='768px'>
          <SvgWrapper mobile={true}>
            <Score />
          </SvgWrapper>
          <ParagraphWrapper mobile={true}>
            <Paragraph weight='regular' mobileFontSize='base' mobileMargin='0 1rem'>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </Paragraph>
          </ParagraphWrapper>
        </Wrapper>
        <Wrapper display='flex' justifyCont='center' mbMargin='2rem' dsMargin='0 0 0 4rem'>
          <PersonSocialMedia>
            <span>
              <Twitter />
            </span>
            <span>
              <Facebook />
            </span>
            <span>
              <Message />
            </span>
          </PersonSocialMedia>
          <YearSelect>
            <option defaultValue="2019">2019</option>
            <option defaultValue="2020">2020</option>
            <option defaultValue="2021">2021</option>
          </YearSelect>
          <Wrapper display='flex' mbMargin='0 2rem'>
            <Share>
              <span>
                Compartir
              </span>
              <SocialMedia>
                <span>
                  <Twitter />
                </span>
                <span>
                  <Facebook />
                </span>
                <span>
                  <Message />
                </span>
              </SocialMedia>
            </Share>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper mbMargin='2rem' display='flex' justifyCont='center'>
        <div>
          <Title weight='700' color='dark'>
            Posiciones Generales
          </Title>
          <ListWrapper>
            <Separator margin={'0 2.5rem 0 0'}>
           {axlesWihQuestionsAnswered?.map((axis, idx) =>
              <Li key={idx} >
                <Title mobileFontSize='customBase' color='dark' margin='2rem 0 1rem 0'>
                  {axis.fields.Eje}
                </Title>
                <Positions score={getScoreSum(axis.answers)} />
              </Li>
            )}
            </Separator>
          </ListWrapper>
        </div>
      </Wrapper>
      <Wrapper mbMargin='4rem 2rem' display='flex' justifyCont='center'>
        <div style={{maxWidth: '768px'}}>
          <Title weight='700' color='dark'>
            Preguntas
          </Title>
          <ListWrapper>
            <div>
              {newCandidate.questions ? 
                newCandidate.questions.map((ans, idx) =>
                  <Li key={idx} background={'#EFEDED'}>
                    <Paragraph mobileFontSize='customBase' color='dark' weight='bold' mobilePadding='2.5rem 2.5rem 0 2.5rem'>
                      {ans.question}:
                    </Paragraph>
                    <Paragraph mobileFontSize='customBase' color='dark' weight='normal' mobilePadding='0 2.5rem 2.5rem 2.5rem'>
                      {ans.Opcion}
                    </Paragraph>
                    <span>
                      {questionIcon(ans.Puntaje)}
                    </span>
                  </Li>
              )
              : null
            }
            </div>
          </ListWrapper>
        </div>
      </Wrapper>
    </Container>
    </>
  )
}

const YearSelect = styled.select`
  border: 2px solid ${props => props.theme.colors.dark};
  padding: 0 2rem;
  margin: 0 0 0 2rem;
`

const PersonWrapper = styled.div``

const ParagraphWrapper = styled.div`
  display: ${props => props.mobile ? 'unset' : 'none'};

@media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
  display: ${props => !props.mobile ? 'unset' : 'none'};
}
`

const SvgWrapper = styled.div`
  display: ${props => props.mobile ? 'unset' : 'none'};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: ${props => !props.mobile ? 'unset' : 'none'};
  }
`

const Share = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #EFEDED;
  border-radius: 12px;

  padding: 0.1rem 0.75rem;

  > span {
    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.dark};
    font-weight: 600;

    margin: 0 1rem 0 0;
  }
`

const PersonSocialMedia = styled.div`
  display: none;

  > span {
    margin: 0 0.5rem;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    align-items: center;
    
    position: relative;
    left: -5%;
  }
`

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    margin: 0 0.2rem;
  }
`

const Separator = styled.div`
  margin: 0;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    margin: ${props => props.margin};
  }
`

const Li = styled.li`
  position: relative;

  background: ${props => props.background ? props.background : 'transparent'};
  list-style-type: none;

  margin: 2rem 2rem 0 0;
`

const ListWrapper = styled.ul`
  padding: 0;
  margin: 0;

  > div > ${Li} > span {
    position: absolute;
    right: -5%;
    top: -15%;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
  }
`
