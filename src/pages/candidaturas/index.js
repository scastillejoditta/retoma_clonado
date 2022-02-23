import React, {useState} from 'react';
import {Image, Select, LinkWrapper, Input, Wrapper} from '../../styles/candidaturas'
import Link from 'next/link';

import Container from '../../components/Container';
import Title from '../../components/Title';
import Spinner from '../../assets/Icons/Spinner'

import {filterByValues} from '../../utils/filter'
import {useFetch} from '../../hooks/useFetch'

const Candidates = () => {
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [loadingCandidate, setLoadingCandidate] = useState(null)
  const {data: candidates, loading: loadingCandidates} = useFetch("Respuestas_Candidates", [])
  const filteredCandidates = filterByValues(inputValue, selectValue, candidates)

  const politicsPartiesArr = []
  const candidatesCopy = [...candidates]
  candidatesCopy
    .map(cp => cp.fields.Partido_politico)
    .filter((pp, idx) => {
      if(politicsPartiesArr.includes(pp)) return
      politicsPartiesArr.push({
        name: pp,
        id: idx + 1
      })
    })

  return (
    <>
      <Container background="backgroundGray" desktopPadding={"2rem 4rem"} mobilePadding={'1rem 0'}>
        <Wrapper>
          <div> 
            <Title mobileFontSize="lg" weight='700' desktopFontSize="customXlg" dsColor='white' mbColor='white' margin='0 0 1.5rem 0'>¿Qué opinan les candidates?</Title>
            <Input 
              placeholder='Buscar por nombre, provincia, o frente' 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
            />
            <Select 
              name='partido'
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option 
                key='key'
                value=''
              >
                Partido político
              </option>
              {politicsPartiesArr.map(fc => (
                <option 
                  key={fc.id} 
                  value={fc.name}
                >
                  {fc.name}
                </option>
              ))}      
            </Select>
          </div>
        </Wrapper>
      </Container>
      <Container dsMargin='2rem 6rem'>
        {loadingCandidates 
          ? <Spinner />
          : <Container display='flex' justifyCont='flex-start' flexWrap='wrap' dsMargin='0 6rem'>
              {filteredCandidates.map((candidate) =>
                <Container  
                  dsWidth='25%' 
                  height='25%' 
                  background='gray' 
                  margin='0 2rem 12rem 2rem' 
                  dsMargin='2rem 4rem 8rem 1rem'
                  key={candidate.id}
                >
                  <Wrapper>
                    <div style={{minHeight: '15rem', maxHeight: '15rem'}}>
                      <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Image />
                      </div>
                      <Title desktopFontSize='medium' weight='600'>{candidate.fields.Nombre}</Title>
                      <Title desktopFontSize='customBase' weight='400' margin='1rem 0'>{candidate.fields.Orientacion}</Title>
                    </div>
                    <div style={{position: 'absolute', bottom: '-8%', left: '0', right: '0', margin: '0 2.5rem'}}>       
                      <Link 
                        href={`/candidaturas/${candidate.id}`} 
                        passHref
                      >
                        <LinkWrapper 
                          onClick={() => setLoadingCandidate(candidate.id)}
                        > 
                          {loadingCandidate === candidate.id
                            ? <Spinner 
                                fill='white'
                                margin='0'
                              />
                            : 'Ver perfil'
                          }
                        </LinkWrapper>             
                        </Link>   
                    </div>
                  </Wrapper>
                </Container>
              )}
            </Container>
            }

      </Container>
    </>
  )
}

export default Candidates;