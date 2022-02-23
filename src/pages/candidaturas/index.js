import React, {useState} from 'react';
import {Image, Select, LinkWrapper, Input, Option} from '../../styles/candidaturas'
import Link from 'next/link';

import Container from '../../components/Container';
import Title from '../../components/Title';
import Spinner from '../../assets/Icons/Spinner'
import Paragraph from '../../components/Paragraph'
import Wrapper from '../../components/Wrapper'
import Button from '../../components/Button'

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
      <Container background="backgroundGray" dsHeight="45vh">
        <Wrapper
          display="flex"
          justifyCont="center"
          alignItems="center"
          dsHeight="75vh"
          width='100%'
          bgImage="url('/images/pink-banner.png')"
          dsPosition='absolute'
          top='-50%'
        >  
            <Wrapper 
              mbPadding='2rem'
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
            <Title 
              mobileFontSize="lg" 
              weight='700' 
              desktopFontSize="customXlg" 
              dsColor='#000000' 
              mbColor='#000000' 
              margin='0 0 1.5rem 0'
            >
              ¿Qué opinan les candidates?
            </Title>
            <Input 
              placeholder='Nombre, departamento, o corporación' 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)} 
            />
            <Select 
              name='partido'
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <Option 
                key='key'
                value=''
              >
                Partido / Lista
              </Option>
              {politicsPartiesArr.map(fc => (
                <option 
                  key={fc.id} 
                  value={fc.name}
                >
                  {fc.name}
                </option>
              ))}      
            </Select>
          </Wrapper>
        </Wrapper>
      </Container>
      <Container dsMargin='2rem 6rem'>
        {loadingCandidates 
          ? <Spinner />
          : <Container display='flex' justifyCont='flex-start' flexWrap='wrap' dsMargin='0 6rem'>
              {filteredCandidates.map((candidate) =>
                <Container  
                  dsWidth='20%' 
                  height='25%' 
                  background='transparent' 
                  margin='0 2rem 6rem 2rem' 
                  dsMargin='2rem 2rem 8rem 1rem'
                  border='2px solid #7E3BFF'
                  key={candidate.id}
                >
                  <Wrapper>
                    <div style={{minHeight: '22.5rem', maxHeight: '22.5rem'}}>
                      <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Image />
                      </div>
                      <Title 
                        dsColor='violet' 
                        mbColor='violet' 
                        desktopFontSize='medium' 
                        weight='700'
                        margin='1rem'
                      >
                        {candidate.fields.Nombre}
                      </Title>
                      <Title 
                        dsColor='black' 
                        mbColor='black' 
                        desktopFontSize='medium' 
                        weight='400'
                        margin='1rem'
                      >
                        Partido
                        {/* {candidate.fields.Orientacion} */}
                      </Title>
                    </div>
                    <div style={{position: 'absolute', bottom: '-8%', left: '0', right: '0', margin: '0 2rem'}}>       
                      <Link 
                        href={`/candidaturas/${candidate.id}`} 
                        passHref
                      >
                        <LinkWrapper
                          background='#7E3BFF'
                          color='#FEC9F1'
                          padding='1rem'
                          margin='2rem 0'
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