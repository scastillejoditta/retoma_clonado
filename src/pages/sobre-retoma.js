import styled from "styled-components";

// Assets
import PersonIcon from "../assets/Icons/SmallPerson";

// Components
import Container from "../components/Container";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";

const About = () => {
  return (
    <>
      <Container background="backgroundGray" mobilePadding={"2rem"}>
        <Wrapper>
          <Title mobileFontSize="customXlg" weight='700' desktopFontSize="lg" dsColor="white" mbColor='white' margin='2rem 0'>
            Sobre Retoma
          </Title>
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="white"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </Paragraph>
        </Wrapper>
      </Container>

      <Container background="white" mobilePadding={"2rem"}>
        <Wrapper>
          <Title mobileFontSize="lg" desktopFontSize="lg" color="backgroundGray" margin='2rem 0'>
            Metodología
          </Title>
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="backgroundGray"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
        </Wrapper>
      </Container>

      <Container background="lightGray" mobilePadding={"0 2rem"} desktopPadding={'2rem'}>
        <Wrapper>
          <Title mobileFontSize="lg" desktopFontSize="lg" color="dark" margin='0 0 2rem 0'>
            Retoma
          </Title>
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="dark"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="dark"
          >
            El indice no agota todos los temas y es por eso que está abierto a que puedan sugerir elementos y sumarse a la discusión con el fin de incorporar cada vez mas tópicos y, sobre todo, hacer llegar información precisa a toda la soiedad. No se incluye trayectoria previa de los/las candidates, dado que puede afectar el puntaje de quienes se postulan por primera vez y porque las posiciones frente a distintos temas de una misma persona pueden modificar a lo largo del tiempo.
          </Paragraph>
        </Wrapper>
      </Container>

      <Container background="white" width='100%'>
        <Wrapper>
          <ScoreWrapper>
            <Container
              background="dark"
              desktopPadding="5rem 2.5rem"
              mobilePadding="1.5rem"
              maxWidth="xs"
              margin='2rem'
            >
              <Title
                mobileFontSize="lg"
                desktopFontSize="lg"
                dsColor="white"
                mbColor='white'
                margin="0 0 1rem 0"
              >
                Proyecto
              </Title>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                weight='400'
                color="white"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </Container>
            <Container
              background="lightGray"
              desktopPadding="5rem 2.5rem"
              mobilePadding="1.5rem"
              maxWidth="xs"
              margin='2rem'
            >
              <Title
                mobileFontSize="lg"
                desktopFontSize="lg"
                color="backgroundGray"
                margin="0 0 1rem 0"
              >
                Respuestas:
              </Title>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="dark"
                padding="0 1rem"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </Paragraph>
            </Container>
          </ScoreWrapper>

          <TeamWrapper>
            <Title
              mobileFontSize="lg"
              desktopFontSize="lg"
              margin="0 2rem"
            >
              Equipo
            </Title>
          </TeamWrapper>
          <Persons>
            <Rows>
              <PersonWrapper>
                <div style={{margin: '0 1rem'}}>
                  <PersonIcon />
                  <div style={{marginLeft: '1rem', marginTop: '0.25rem'}}>
                    <Title desktopFontSize='medium' mobileFontSize='regular' weight='600' color='dark'>Franco <br />Alemandi</Title>
                    <h4 style={{fontSize: '18px', fontWeight: '400', color: '#4A4A4A'}}>Software developer</h4>
                  </div>
                </div>
              </PersonWrapper>

              <PersonWrapper>
                <div style={{margin: '0 1rem'}}>
                  <PersonIcon />
                  <div style={{marginLeft: '1rem', marginTop: '0.25rem'}}>
                    <Title desktopFontSize='medium' mobileFontSize='regular' weight='600' color='dark'>Franco <br />Alemandi</Title>
                    <h4 style={{fontSize: '18px', fontWeight: '400', color: '#4A4A4A'}}>Software developer</h4>
                  </div>
                </div>
              </PersonWrapper>

              <PersonWrapper>
                <div style={{margin: '0 1rem'}}>
                  <PersonIcon />
                  <div style={{marginLeft: '1rem', marginTop: '0.25rem'}}>
                    <Title desktopFontSize='medium' mobileFontSize='regular' weight='600' color='dark'>Franco <br />Alemandi</Title>
                    <h4 style={{fontSize: '18px', fontWeight: '400', color: '#4A4A4A'}}>Software developer</h4>
                  </div>
                </div>
              </PersonWrapper>

              <PersonWrapper>
                <div style={{margin: '0 1rem'}}>
                  <PersonIcon />
                  <div style={{marginLeft: '1rem', marginTop: '0.25rem'}}>
                    <Title desktopFontSize='medium' mobileFontSize='regular' weight='600' color='dark'>Franco <br />Alemandi</Title>
                    <h4 style={{fontSize: '18px', fontWeight: '400', color: '#4A4A4A'}}>Software developer</h4>
                  </div>
                </div>
              </PersonWrapper>
            </Rows>
            <Rows>
              <PersonWrapper>
                <div style={{margin: '0 1rem'}}>
                  <PersonIcon />
                  <div style={{marginLeft: '1rem', marginTop: '0.25rem'}}>
                    <Title desktopFontSize='medium' mobileFontSize='regular' weight='600' color='dark'>Franco <br />Alemandi</Title>
                    <h4 style={{fontSize: '18px', fontWeight: '400', color: '#4A4A4A'}}>Software developer</h4>
                  </div>
                </div>
              </PersonWrapper>

              <PersonWrapper>
                <div style={{margin: '0 1rem'}}>
                  <PersonIcon />
                  <div style={{marginLeft: '1rem', marginTop: '0.25rem'}}>
                    <Title desktopFontSize='medium' mobileFontSize='regular' weight='600' color='dark'>Franco <br />Alemandi</Title>
                    <h4 style={{fontSize: '18px', fontWeight: '400', color: '#4A4A4A'}}>Software developer</h4>
                  </div>
                </div>
              </PersonWrapper>

              <PersonWrapper>
                <div style={{margin: '0 1rem'}}>
                  <PersonIcon />
                  <div style={{marginLeft: '1rem', marginTop: '0.25rem'}}>
                    <Title desktopFontSize='medium' mobileFontSize='regular' weight='600' color='dark'>Franco <br />Alemandi</Title>
                    <h4 style={{fontSize: '18px', fontWeight: '400', color: '#4A4A4A'}}>Software developer</h4>
                  </div>
                </div>
              </PersonWrapper>

              <PersonWrapper>
                <div style={{margin: '0 1rem'}}>
                  <PersonIcon />
                  <div style={{marginLeft: '1rem', marginTop: '0.25rem'}}>
                    <Title desktopFontSize='medium' mobileFontSize='regular' weight='600' color='dark'>Franco <br />Alemandi</Title>
                    <h4 style={{fontSize: '18px', fontWeight: '400', color: '#4A4A4A'}}>Software developer</h4>
                  </div>
                </div>
              </PersonWrapper>
            </Rows>
          </Persons>
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.section`
  padding: 2rem 0;
  
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 1024px;
    margin: 0 auto;

    padding: 0 4rem 2rem 4rem;
  }
`;

const ScoreWrapper = styled.div`
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
  }
`;

const AnswersWrapper = styled.div`
  background: ${props => props.theme.colors.lightGray};
`;

const TeamWrapper = styled.aside`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  margin-top: 4rem;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Persons = styled.section`
  margin: 2rem;
`;

const PersonWrapper = styled.div`
  background: #E8E8E8;

  padding: 1rem 0;
  margin: 1rem 0;
`;

const Rows = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: block;
  }
`

export default About;
