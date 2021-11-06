import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Container from '../../components/Container';
import Wrapper from '../../components/Wrapper';
import Title from '../../components/Title';

import { fetchRecords } from '../../utils/api';

import PositiveScore from '../../assets/Icons/PositiveScore';
import MediumScore from '../../assets/Icons/MediumScore';
import NegativeScore from '../../assets/Icons/NegativeScoree';
import Person from '../../assets/Icons/Person';


const Candidates = () => {
  const [candidates, setCandidates] = useState([])
  const [filteredCandidates, setFilteredCandidates] = useState([])
  const [inputValue, setInputValue] = useState('')

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
    const getCandidates = async () => {
      let candidates = await fetchRecords('Respuestas_Candidates');
      setCandidates(candidates.data.records);
    }
    getCandidates();
  }, []);

  useEffect(() => {
      let candidatesCopy = [...candidates]
      if (inputValue !== '') {
        candidatesCopy = candidatesCopy.filter(cp => 
          cp.fields.Nombre.toLowerCase().includes(inputValue.toLowerCase()) ||
          cp.fields.Provincia.toLowerCase().includes(inputValue.toLowerCase()) ||
          cp.fields.Orientacion.toLowerCase().includes(inputValue.toLowerCase())
        )
      } else {
        return candidatesCopy
      }
      setFilteredCandidates(candidatesCopy)
  }, [inputValue])

  

  return (
    <>
      <Container background='dark' dsHeight='60vh'>
        <Wrapper mbPadding='4rem 3rem' dsPadding='4rem'>
          <div> 
            <Title mobileFontSize="xlg" desktopFontSize="xl" color='white' margin='0 0 1.5rem 0'>¿Qué opinan les candidates?</Title>
            <Input placeholder='Buscar por nombre, provincia, o frente' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </div>
        </Wrapper>
      </Container>
      <Container margin='4rem 0 0 0' dsMargin='-8rem 0 0 0'>
        {inputValue !== ''  
        ? <Container display='flex' flexWrap='wrap'>
        {filteredCandidates.map(candidate =>
          <Container  maxWidth='25%' background='gray' margin='3rem'>
            <Wrapper mbMargin='3rem' mbPadding='2rem 0'>
              <ScoreWrapper>
                {scoreIcon(Math.round(candidate.fields.Puntaje_total * 10)/10)}
                <span>{Number.isInteger(Math.round(candidate.fields.Puntaje_total * 10)/10) ? Math.round(candidate.fields.Puntaje_total * 10)/10 + '.0' : Math.round(candidate.fields.Puntaje_total * 10)/10 }</span>
              </ScoreWrapper>
              <>
                {candidate.fields.Foto 
                  ? <Image src={candidate.fields.Foto} /> 
                  : <Person />
                }
              </>
              <Title>{candidate.fields.Nombre}</Title>
              <h3>{candidate.fields.Provincia}</h3>
              <h3>{candidate.fields.Orientacion}</h3>
              <Link href={{ pathname: `/candidates/${candidate.id}`, query: { score: candidate.fields.Puntaje_total } }}>
                <LinkWrapper>
                  Ver perfil
                </LinkWrapper>
              </Link>
            </Wrapper>
          </Container>
        )}
      </Container>

        : <Container display='flex' flexWrap='wrap'>
            {candidates.map(candidate =>
              <Container  maxWidth='25%' background='gray' margin='3rem'>
                <Wrapper mbMargin='3rem' mbPadding='2rem 0'>
                  <ScoreWrapper>
                    {scoreIcon(Math.round(candidate.fields.Puntaje_total * 10)/10)}
                    <span>{Number.isInteger(Math.round(candidate.fields.Puntaje_total * 10)/10) ? Math.round(candidate.fields.Puntaje_total * 10)/10 + '.0' : Math.round(candidate.fields.Puntaje_total * 10)/10 }</span>
                  </ScoreWrapper>
                  <>
                    {candidate.fields.Foto 
                      ? <Image src={candidate.fields.Foto} /> 
                      : <Person />
                    }
                  </>
                  <Title>{candidate.fields.Nombre}</Title>
                  <h3>{candidate.fields.Provincia}</h3>
                  <h3>{candidate.fields.Orientacion}</h3>
                  <Link href={{ pathname: `/candidates/${candidate.id}`, query: { score: candidate.fields.Puntaje_total } }}>
                    <LinkWrapper>
                      Ver perfil
                    </LinkWrapper>
                  </Link>
                </Wrapper>
              </Container>
            )}
          </Container>
        }
      </Container>
    </>
  )
}

const Input = styled.input`
  background: ${props => props.theme.colors.dark};
  border: 1px solid ${props => props.theme.colors.white};

  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.base};


  width: 100%;
  padding: 1rem 0;

  margin: 0.5rem 0;

  text-indent: 10px;

  &::placeholder {
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.base};
    font-weight: normal;
  }

  :focus::-webkit-input-placeholder {
    color: transparent;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 50%;
  }
`

const ScoreWrapper = styled.div`
  position: absolute;
  top: -10%;
  right: -10%;

  > span {  
    position: absolute;
    right: 13%;
    top: 38%;

    font-size: ${props => props.theme.fontSizes.lg};
    font-weight: bold;
  }
`

const LinkWrapper = styled.div`
  padding: 1rem;

  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.white};

  text-align: center;

  cursor: pointer;
  
  > a {
    text-decoration: none;
  }
`

const Image = styled.img`
  width: 143px;
  height: 143px;

  object-fit: cover;
  border-radius: 50%;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 250px;
    height: 250px;
  }
`

export default Candidates;