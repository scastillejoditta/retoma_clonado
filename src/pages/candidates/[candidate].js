import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router'

import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import styled from 'styled-components';


import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';

import Person from '../../assets/Icons/Person';
import PositiveScore from '../../assets/Icons/PositiveScore';
import MediumScore from '../../assets/Icons/MediumScore';
import NegativeScore from '../../assets/Icons/NegativeScore';
import Twitter from '../../assets/Icons/Twitter';
import Facebook from '../../assets/Icons/Facebook';
import Telegram from '../../assets/Icons/Telegram';
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

  const scoreIcon = (score) => {
    switch(true) {
      case score >= 4:
        return <PositiveScore />
      case score <= 4 && score >= 3:
        return <MediumScore />
      case score < 3:
        return <NegativeScore />
    }
  }

  useEffect(() => {
    const fetchCandidate = async () => {
      if(candidate) {
        try {
          const res = await fetchRecord('Respuestas_Candidates', candidate)
          setCandidate(res.data.fields)
        } catch (err) {
          Router.push('/candidates');
        }       
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

  function chunkArrayInGroups() {
    let firstArr = [];
    let secondArr = [];

    axlesWihQuestionsAnswered.map((ax, idx) => {
      if(idx <= 2) {
        firstArr.push(ax)
      } else {
        secondArr.push(ax)
      }
    })

    return [[...firstArr], [...secondArr]]
  }

  let axlesSplitedInTwoChunks = chunkArrayInGroups();

  let scoresArr = axlesWihQuestionsAnswered.map(ax => {
    return ax.answers.map(ans => ans.Puntaje)
  })

  let finalScore = Math.round([].concat.apply([], scoresArr).reduce((acc, el) => el + acc, 0) * 10)/10;

  return (
    <>
    <Container>
      <Wrapper>
        <Container mbHeight='20vh' dsHeight='30vh' background='feminindexRed' zIndex={-1}></Container>
        <Wrapper display='flex' justifyCont='center' mbMargin='-5rem 4rem 0 2rem'>
          <PersonWrapper>
            <Img src={newCandidate?.Foto} />
            <Person />
          </PersonWrapper>
          <div>
            <Title mobileFontSize='lg' weight='bold' margin='0 2rem 0 2rem' color='white'>
              {candidateData?.Nombre}
            </Title>
            <ParagraphWrapper>
              <ResumeWrapper>
                <Title mobileFontSize='base' weight='bold' margin='0 0.5rem 0 0'>Provincia:</Title>
                <Paragraph mobileMargin='0'>{newCandidate.Provincia}</Paragraph>
              </ResumeWrapper>
              <ResumeWrapper>
                <Title mobileFontSize='base' weight='bold' margin='0 0.5rem 0 0'>Orientación:</Title>
                <Paragraph mobileMargin='0'>{newCandidate.Partido_politico}</Paragraph>
              </ResumeWrapper>
              <ResumeWrapper>
                <Title mobileFontSize='base' weight='bold' margin='0 0.5rem 0 0'>Cargo:</Title>
                <Paragraph mobileMargin='0'>{newCandidate.Cargo}</Paragraph>
              </ResumeWrapper>
              <Wrapper display='flex' justifyCont='' mbMargin='2rem'>
                <Wrapper display='flex'>
                  <Share>
                    <span>
                      Compartir
                    </span>
                    <SocialMedia>
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
                    </SocialMedia>
                  </Share>
                </Wrapper>
              </Wrapper>
            </ParagraphWrapper>
          </div>
          <SvgWrapper>
            {scoreIcon(finalScore)}
            <span>{finalScore}</span>
          </SvgWrapper>
        </Wrapper>
        <Wrapper xxsDisplay='block' display='flex' justifyCont='center' mbMargin='0 2rem' dsMargin='0 auto' maxWidth='768px'>
          <SvgWrapper mobile={true}>
            {scoreIcon(finalScore)}
            <span>{finalScore}</span>
          </SvgWrapper>
          <ParagraphWrapper mobile={true}>
            <ResumeWrapper>
              <Title mobileFontSize='base' weight='bold' margin='0 0.5rem 0 0'>Provincia:</Title>
              <Paragraph mobileMargin='0'>{newCandidate.Provincia}</Paragraph>
            </ResumeWrapper>
            <ResumeWrapper>
              <Title mobileFontSize='base' weight='bold' margin='0 0.5rem 0 0'>Orientación:</Title>
              <Paragraph mobileMargin='0'>{newCandidate.Partido_politico}</Paragraph>
            </ResumeWrapper>
            <ResumeWrapper>
              <Title mobileFontSize='base' weight='bold' margin='0 0.5rem 0 0'>Cargo:</Title>
              <Paragraph mobileMargin='0'>{newCandidate.Cargo}</Paragraph>
            </ResumeWrapper>
            <Wrapper display='flex' justifyCont='space-evenly'>
              <Wrapper display='flex'>
                <Share>
                  <span>
                    Compartir
                  </span>
                  <SocialMedia>
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
                      <Telegram />
                    </span>
                  </SocialMedia>
                </Share>
              </Wrapper>
            </Wrapper>
          </ParagraphWrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper mbMargin='2rem' display='flex' justifyCont='center' dsMargin='2rem 2rem 0 0'>
        <div>
          <Title weight='700' color='dark'>
            Posiciones Generales
          </Title>

          <GeneralScoreWrapper>
            <ListWrapper>
              <Separator margin={'0 2.5rem 0 0'}>
                {axlesSplitedInTwoChunks[0].map((axis, idx) => 
                  <Li key={idx} >
                    <Title mobileFontSize='customBase' color='dark' margin='2rem 0 1rem 0'>
                      {axis.fields.Eje}
                    </Title>
                    <Positions score={getScoreSum(axis.answers)} />
                  </Li>
                )}
              </Separator>
            </ListWrapper>
            <ListWrapper>
              <Separator margin={'0 2.5rem 0 0'}>
                {axlesSplitedInTwoChunks[1].map((axis, idx) => 
                  <Li key={idx} >
                    <Title mobileFontSize='customBase' color='dark' margin='2rem 0 1rem 0'>
                      {axis.fields.Eje}
                    </Title>
                    <Positions score={getScoreSum(axis.answers)} />
                  </Li>
                )}
              </Separator>
            </ListWrapper>
          </GeneralScoreWrapper>
        </div>
      </Wrapper>
      <Wrapper mbMargin='2rem' display='flex' justifyCont='center' >
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

const PersonWrapper = styled.div`
  position: relative;
`

const ParagraphWrapper = styled.div`
  display: ${props => props.mobile ? 'unset' : 'none'};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: ${props => !props.mobile ? 'unset' : 'none'};
  }
`

const SvgWrapper = styled.div`
  display: ${props => props.mobile ? 'flex' : 'none'};
  margin-top: 1rem;

  position: relative;

  > span {
    position: absolute;
    right: 15%;
    top: 22%;

    font-size: ${props => props.theme.fontSizes.lg};
    font-weight: bold;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: ${props => !props.mobile ? 'unset' : 'none'};

    margin-top: 0;

    > span {
    position: absolute;
    right: 16%;
    top: 12%;
  }
  }

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.xxs}) {
    > span {
        position: absolute;
        left: 22%;
        top: 40%;

    }
  }
`

const ResumeWrapper = styled.div`
  margin: 0 0.5rem 1rem 1rem;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    &:first-child {
      margin-top: 4rem;
    }
    margin-left: 2rem;
  }
`

const GeneralScoreWrapper = styled.div`
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
    margin-right: 1rem;
  }
`

const Share = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: #EFEDED;
  border-radius: 12px;

  padding: 0.5rem 0.75rem;

  > span {
    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.dark};
    font-weight: 600;

    margin: 0 1rem 0 0;
  }
`

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    margin: 0 0.75rem;
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

  margin: 2rem 2rem 4rem 0;
`

const ListWrapper = styled.ul`
  padding: 0;

  > div > ${Li} > span {
    position: absolute;
    right: -5%;
    top: -15%;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: flex;
  }
`

const Img = styled.img`
  position: absolute;

  object-fit: cover;
  width: 120px;
  height: 120px;

  border-radius: 50%;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 250px;
    height: 250px;

    border-radius: 50%;
  }
`
