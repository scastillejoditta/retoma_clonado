import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Container from '../../components/Container';
import Title from '../../components/Title';

import { fetchRecords } from '../../utils/api';

const Candidates = () => {
  const [candidates, setCandidates] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('')

  useEffect(() => {
    const getCandidates = async () => {
      let candidates = await fetchRecords('Respuestas_Candidates');
      setCandidates(candidates.data.records);
      console.log(candidates, 'candidates')
    }
    getCandidates();
  }, []);

  const lowercasedFilter = inputValue ? inputValue.toLowerCase() : selectValue.toLowerCase();
  const filteredCandidates = candidates?.filter(c =>  
    c.fields?.Nombre?.toLowerCase().includes(lowercasedFilter.toLowerCase()) ||
    c.fields?.Provincia?.toLowerCase().includes(lowercasedFilter.toLowerCase()) ||
    c.fields?.Orientacion?.toLowerCase().includes(lowercasedFilter.toLowerCase()) ||
    c.fields?.Partido_politico?.toLowerCase().includes(lowercasedFilter.toLowerCase())
  )

  const politicsPartiesArr = []
  const findPoliticParties = candidates
    .map(cp => cp.fields.Partido_politico)
    .filter(pp => {
      if(politicsPartiesArr.includes(pp)) return
      politicsPartiesArr.push(pp)
    })

  return (
    <>
      <Container background="backgroundGray" desktopPadding={"2rem 4rem"} mobilePadding={'1rem 0'}>
        <Wrapper>
          <div> 
            <Title mobileFontSize="xlg" desktopFontSize="xl" dsColor='white' mbColor='white' margin='0 0 1.5rem 0'>¿Qué opinan les candidates?</Title>
            <Input placeholder='Buscar por nombre, provincia, o frente' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <Select 
              name='partido'
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option 
                key='key'
                value=''
                selected
              >
                Partido político
              </option>
              {politicsPartiesArr.map(fc => (
                <option 
                  key={fc} 
                  value={fc}
                >
                  {fc}
                </option>
              ))}      
            </Select>
          </div>
        </Wrapper>
      </Container>
      <Container dsMargin='2rem 6rem'>
        <Container display='flex' justifyCont='flex-start' flexWrap='wrap' dsMargin='0 6rem'>
          {filteredCandidates.map(candidate =>
            <Container  dsWidth='25%' height='25%' background='gray' margin='0 2rem 12rem 2rem' dsMargin='2rem 4rem 8rem 0'>
              <Wrapper>
                <div style={{minHeight: '15rem', maxHeight: '15rem'}}>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image />
                  </div>
                  <Title desktopFontSize='medium' weight='600'>{candidate.fields.Nombre}</Title>
                  <Title desktopFontSize='customBase' weight='400' margin='1rem 0'>{candidate.fields.Orientacion}</Title>
                </div>
                <div style={{position: 'absolute', bottom: '-8%', left: '0', right: '0', margin: '0 2.5rem'}}>
                  <Link href={{ pathname: `/candidaturas/${candidate.id}`, query: { score: candidate.fields.Puntaje_total } }}>
                    <LinkWrapper>
                      Ver perfil
                    </LinkWrapper>
                  </Link>
                </div>

              </Wrapper>
            </Container>
          )}
        </Container>
      </Container>
    </>
  )
}

const Wrapper = styled.section`
  position: relative;
  margin: 4rem 2rem;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 1024px;
    margin: 0 auto;

    padding: 2rem;
  }
`;

const Input = styled.input`
  background: ${props => props.theme.colors.dark};
  border: 1px solid ${props => props.theme.colors.white};

  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.base};


  width: 100%;
  padding: 1rem 0;

  margin: 0.5rem 1rem 0.5rem 0;

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

const LinkWrapper = styled.div`
  padding: 1rem;

  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.white};
  border-bottom: 2px solid ${props => props.theme.colors.green};

  text-align: center;

  cursor: pointer;
  
  > a {
    text-decoration: none;
  }
`

const Select = styled.select`
  background: ${props => props.theme.colors.dark};
  border: 1px solid ${props => props.theme.colors.white};

  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.base};


  width: 100%;
  padding: 1rem 0;

  margin: 0.5rem 1rem 0.5rem 0;

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
    max-width: 25%;
  }
`

const Image = styled.img`
  height: 175px;
  width: 175px;
  object-fit: cover;
  border-radius: 50%;

  margin-top: -8rem;
  margin-left: 1rem;

  background: ${props => props.theme.colors.lightGray};
`

export default Candidates;