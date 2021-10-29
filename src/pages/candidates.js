import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


import Container from '../components/Container';
import Wrapper from '../components/Wrapper';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';

import Person from '../assets/Icons/Person';
import Score from '../assets/Icons/Score';
import Twitter from '../assets/Icons/Twitter';
import Facebook from '../assets/Icons/Facebook';
import Message from '../assets/Icons/Message';
import Positions from '../assets/Icons/Positions';
import GoodWrapper from '../assets/Icons/GoodWrapper';
import BadWrapper from '../assets/Icons/BadWrapper';

import generalPositions from '../utils/generalPositions.json';
import questions from '../utils/questions.json';

import { fetchRecords, fetchRecord } from '../utils/api';

const questionIcon = {
  good: <GoodWrapper />,
  bad: <BadWrapper />
}

export default function Candidates() {
  const [axles, setAxles] = useState([])
  const [axis, setAxis] = useState(null)

  const makeLeftColumn = (arr) => {
    let arrCopy = [...arr];
    let length = Math.ceil(arrCopy.length / 2);    

    let leftSide = arrCopy.splice(0, length);
  
    return leftSide;
  }

  const makeRightColumn = (arr) => {
    let arrCopy = [...arr];
    let length = Math.ceil(arrCopy.length / 2);    

    let rightSide = arrCopy.splice(length);

    return rightSide;
  } 

  // Ejemplo para que vean cómo hacer el fetch de los datos
  useEffect(() => {
    const getAxles = async () => {
      let axles = await fetchRecords('Ejes');
      setAxles(axles);
    }
    const getAxis = async () => {
      let axis = await fetchRecord('Ejes', 'rectVsQ5XkqjPweUq');
      setAxis(axis);
    }
    getAxles();
    getAxis();
  }, []);


  console.log(axles, 'axles', axis, 'axis');

  console.log(process.env.URL_AIRTABLE_TOKEN);

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
              Nombre candidate
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
              {makeLeftColumn(generalPositions?.positions).map(position =>
                <Li key={position.id} >
                  <Title mobileFontSize='customBase' color='dark' margin='2rem 0 1rem 0'>
                    {position.title}
                  </Title>
                  <Positions />
                </Li>
              )}
            </Separator>
            <Separator margin={'0 0 0 4.5rem'}>
              {makeRightColumn(generalPositions?.positions).map(position =>
                <Li key={position.id} >
                  <Title mobileFontSize='customBase' color='dark' margin='2rem 0 1rem 0'>
                    {position.title}
                  </Title>
                  <Positions />
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
              {makeLeftColumn(questions?.questions).map(q =>
                <Li key={q.id} background={'#EFEDED'}>
                  <Paragraph mobileFontSize='customBase' color='dark' mobileMargin='2rem 0 1rem 0' mobilePadding='2.5rem'>
                    {q.text}
                  </Paragraph>
                  <span>
                    {questionIcon[q.icon]}
                  </span>
                </Li>
              )}
            </div>
            <div>
              {makeRightColumn(questions?.questions).map(q =>
                <Li key={q.id} background={'#EFEDED'}>
                  <Paragraph mobileFontSize='customBase' color='dark' mobileMargin='2rem 0 1rem 0' mobilePadding='2.5rem'>
                    {q.text}
                  </Paragraph>
                  <span>
                    {questionIcon[q.icon]}
                  </span>
                </Li>
              )}
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
