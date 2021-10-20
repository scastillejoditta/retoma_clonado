import React from "react";
import styled from "styled-components";

// Assets
import Congress from "../../assets/Icons/Congress";
import WorldGout from "../../assets/Icons/WorldGout";
import Score from "../../assets/Icons/Score";
import TeamIcon from "../../assets/Icons/Team";
import PersonIcon from "../../assets/Icons/Person";

// Components
import Container from "../../components/Container";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";

const About = () => {
  return (
    <>
      <Container background="feminindexRed" mobilePadding={"2rem 4rem"}>
        <Wrapper>
          <div>
            <span>
              <Congress />
            </span>

            <div>
              <Title mobileFontSize="xlg" desktopFontSize="xl" color="white">
                Sobre el proyecto
              </Title>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="white"
              >
                En estos días estamos compartiendo el{" "}
                <strong>Cuestionario del FeminIndex</strong> con candidatos y
                candidatas de diferentes espacios. Te invitamos a que le pidas
                sus respuestas a tu candidato/a favorito/a compartiendo el
                siguiente formulario.
              </Paragraph>
            </div>
          </div>
        </Wrapper>
      </Container>

      <Container background="white" mobilePadding={"2rem 4rem"}>
        <Wrapper>
          <Title mobileFontSize="lg" desktopFontSize="lg" color="feminindexRed">
            ¿De qué se trata Feminindex?
          </Title>
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="dark"
          >
            El FeminIndex es una herramienta para mapear el estado del debate en
            torno a los principales tópicos de la agenda de género: derechos
            sexuales y reproductivos, participación política y económica,
            violencia machista y derechos LGBTTTIQ+. Este índice pretende
            mostrar la posición de lxs principales candidatxs que se presentan a
            las elecciones PASO en agosto y las generales de octubre 2019.
          </Paragraph>
        </Wrapper>
      </Container>

      <Container background="natural" mobilePadding={"2rem 4rem"}>
        <Wrapper>
          <Title mobileFontSize="lg" desktopFontSize="lg" color="dark">
            Preguntas y puntajes
          </Title>
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="dark"
          >
            El FeminIndex es una herramienta para mapear el estado del debate en
            torno a los principales tópicos de la agenda de género: derechos
            sexuales y reproductivos, participación política y económica,
            violencia machista y derechos LGBTTTIQ+. Este índice pretende
            mostrar la posición de lxs principales candidatxs que se presentan a
            las elecciones PASO en agosto y las generales de octubre 2019.
          </Paragraph>
          <Container background="feminindexRed" margin={"2rem 0"}>
            <WorldGoutWrapper>
              <WorldGout />
            </WorldGoutWrapper>
            <Paragraph
              mobileFontSize="base"
              desktopFontSize="customBase"
              color="white"
              mobilePadding={"1.5rem"}
              desktopPadding={"1.5rem 3rem"}
            >
              Además, hay una mención extra para quienes adhieren a la campaña{" "}
              <span style={{ color: "#00000", fontWeight: 600 }}>
                #MenstruAcción
              </span>
              . Al mismo tiempo, hay una penalización para quienes hayan
              realizado declaraciones en contra de algunos de estos temas que
              son sensibles a la perspectiva feminista o hayan protagonizado
              escenas de machismo explícito.{" "}
              <strong>En esos casos visualizaremos las «Machifrases»</strong>.
              Si encontrás alguna que te parezca que tiene que estar si o si,
              mandanos a economiafeminita@gmail.com
            </Paragraph>
          </Container>
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="dark"
            padding="1rem"
          >
            No se incluye trayectoria previa de los/as candidates, dado que
            puede afectar el puntaje de quienes se postulan por primera vez y
            porque además, las posiciones frente a distintos temas de una misma
            persona se pueden modificar a lo largo del tiempo.
          </Paragraph>
        </Wrapper>
      </Container>

      <Container background="white" mobilePadding={"0 4rem"}>
        <Wrapper>
          <ScoreWrapper>
            <Container
              background="dark"
              margin="0"
              desktopPadding="5rem 2.5rem"
              mobilePadding="1.5rem"
              maxWidth="xs"
            >
              <ScoreIconWrapper>
                <Score />
              </ScoreIconWrapper>
              <Title
                mobileFontSize="lg"
                desktopFontSize="lg"
                color="white"
                margin="0"
              >
                Preguntas y puntajes
              </Title>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="white"
              >
                Estamos enviando el formulario con las preguntas del FeminIndex
                a candidatos y candidatas de gran parte de los espacios que se
                presentan a estas elecciones. Volcaremos sus respuestas y en
                casos en que no nos contesten, haremos una búsqueda entre sus
                declaraciones públicas. Quienes tengan información para
                compartir pueden contactarnos a economiafeminita@gmail.com.
              </Paragraph>
            </Container>
            <AnswersWrapper>
              <Title
                mobileFontSize="lg"
                desktopFontSize="lg"
                color="feminindexRed"
                padding="1rem"
                margin="0"
              >
                Todas las preguntas admiten como respuesta:
              </Title>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="dark"
              >
                <ul>
                  <li>Sí</li>
                  <li>No</li>
                  <li>No sabe/No contesta</li>
                </ul>
              </Paragraph>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="dark"
                padding="0 1rem"
              >
                Se da opción de justificar la respuesta en 300 caracteres.
              </Paragraph>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="dark"
                margin="1rem 0"
                padding="0 1rem"
              >
                Se pide que se envíe link con proyectos de ley (de autoría de la
                persona o de su partido/alianza) sobre la temática.
              </Paragraph>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="dark"
                padding="0 1rem"
              >
                Podés ver cómo resultó el{" "}
                <span style={{ color: "#E5616E" }}>FeminIndex 2017</span> en
                nuestra <span style={{ color: "#E5616E" }}>página web</span>.
              </Paragraph>
            </AnswersWrapper>
          </ScoreWrapper>

          <TeamWrapper>
            <TeamIcon />
            <Title
              mobileFontSize="lg"
              desktopFontSize="lg"
              margin="0 1rem"
              color="feminindexRed"
            >
              Equipo
            </Title>
          </TeamWrapper>
          <Persons>
            <div>
              <PersonWrapper>
                <PersonIconWrapper>
                  <PersonIcon />
                </PersonIconWrapper>
                <PersonDescription>
                  <Title
                    mobileFontSize="regular"
                    desktopFontSize="medium"
                    color="dark"
                    margin="0 0 1rem 0"
                  >
                    Coordinación general
                  </Title>
                  <Paragraph
                    mobileFontSize="base"
                    desktopFontSize="regular"
                    color="dark"
                  >
                    Merceedes D'Alessandro
                  </Paragraph>
                </PersonDescription>
              </PersonWrapper>

              <PersonWrapper>
                <PersonIconWrapper>
                  <PersonIcon />
                </PersonIconWrapper>
                <PersonDescription>
                  <Title
                    mobileFontSize="regular"
                    desktopFontSize="medium"
                    color="dark"
                    margin="0 0 1rem 0"
                  >
                    Equipo de investigación de datos
                  </Title>
                  <Paragraph
                    mobileFontSize="base"
                    desktopFontSize="regular"
                    color="dark"
                  >
                    Andrés Snitcofsky, Emilia Cerra, Justina Lee, Lucía
                    Espiñera, Pilar Navone, Delfina Sienra, Mercedes
                    D'Alessandro.
                  </Paragraph>
                </PersonDescription>
              </PersonWrapper>

              <PersonWrapper>
                <PersonIconWrapper>
                  <PersonIcon />
                </PersonIconWrapper>
                <PersonDescription>
                  <Title
                    mobileFontSize="regular"
                    desktopFontSize="medium"
                    color="dark"
                    margin="0 0 1rem 0"
                  >
                    Ilustraciones
                  </Title>
                  <Paragraph
                    mobileFontSize="base"
                    desktopFontSize="regular"
                    color="dark"
                  >
                    Lina Castellanos
                  </Paragraph>
                </PersonDescription>
              </PersonWrapper>

              <PersonWrapper>
                <PersonIconWrapper>
                  <PersonIcon />
                </PersonIconWrapper>
                <PersonDescription>
                  <Title
                    mobileFontSize="regular"
                    desktopFontSize="medium"
                    color="dark"
                    margin="0 0 1rem 0"
                  >
                    Colaboran
                  </Title>
                  <Paragraph
                    mobileFontSize="base"
                    desktopFontSize="regular"
                    color="dark"
                  >
                    Cecilia Nicolini, Catherine D'Ignazio, Andrea Gil, Sol
                    Minoldo, Anto Beccari, Belén Sanchez, Melisa Bokser.
                  </Paragraph>
                </PersonDescription>
              </PersonWrapper>
            </div>
            <div>
              <PersonWrapper>
                <PersonIconWrapper>
                  <PersonIcon />
                </PersonIconWrapper>
                <PersonDescription>
                  <Title
                    mobileFontSize="regular"
                    desktopFontSize="medium"
                    color="dark"
                    margin="0 0 1rem 0"
                  >
                    Equipo de metodología
                  </Title>
                  <Paragraph
                    mobileFontSize="base"
                    desktopFontSize="regular"
                    color="dark"
                  >
                    Laura Belli, Justina Lee, Emilia Cerra, Mercedes
                    D'Alessandro.
                  </Paragraph>
                </PersonDescription>
              </PersonWrapper>

              <PersonWrapper>
                <PersonIconWrapper>
                  <PersonIcon />
                </PersonIconWrapper>
                <PersonDescription>
                  <Title
                    mobileFontSize="regular"
                    desktopFontSize="medium"
                    color="dark"
                    margin="0 0 1rem 0"
                  >
                    Equipo de comunicación
                  </Title>
                  <Paragraph
                    mobileFontSize="base"
                    desktopFontSize="regular"
                    color="dark"
                  >
                    Aldana Vales, Paloma Mila, Flor Tundis, Mercedes
                    D'Alessandro.
                  </Paragraph>
                </PersonDescription>
              </PersonWrapper>

              <PersonWrapper>
                <PersonIconWrapper>
                  <PersonIcon />
                </PersonIconWrapper>
                <PersonDescription>
                  <Title
                    mobileFontSize="regular"
                    desktopFontSize="medium"
                    color="dark"
                    margin="0 0 1rem 0"
                  >
                    Equipo de desarrollo
                  </Title>
                  <Paragraph
                    mobileFontSize="base"
                    desktopFontSize="regular"
                    color="feminindexRed"
                  >
                    Wingu
                  </Paragraph>
                </PersonDescription>
              </PersonWrapper>
            </div>
          </Persons>
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.section`
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 768px;
    margin: 0 auto;

    padding: 4rem;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;

      > span {
        margin-right: 4rem;
      }
    }
  }
`;

const WorldGoutWrapper = styled.div`
  position: absolute;
  top: -12%;
  right: -10%;
  bottom: 0;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    top: -10%;
    left: -7%;
    bottom: 0;
  }
`;

const ScoreWrapper = styled.div`
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
  }
`;

const AnswersWrapper = styled.div`
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-left: 3rem;
  }
`;

const ScoreIconWrapper = styled.div`
  position: absolute;
  top: -5%;
  right: -10%;
  bottom: 0;
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
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    > div {
      margin: 0 1rem;
      max-width: 50%;
    }
  }
`;

const PersonWrapper = styled.div`
  display: flex;

  margin-top: 2rem;
`;

const PersonDescription = styled.div`
  margin: 0 0.5rem;
`;

const PersonIconWrapper = styled.div`
  min-width: 33px;
`;

export default About;
