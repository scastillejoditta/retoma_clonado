import styled from "styled-components";

// Assets
import Congress from "../assets/Icons/Congress";
import WorldGout from "../assets/Icons/WorldGout";
import PositiveScore from "../assets/Icons/PositiveScore";
import TeamIcon from "../assets/Icons/Team";
import PersonIcon from "../assets/Icons/SmallPerson";

// Components
import Container from "../components/Container";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";

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
              <Title mobileFontSize="xlg" desktopFontSize="xl" color="white" margin='1rem 0'>
                Sobre el proyecto
              </Title>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="white"
              >
                El Feminindex es un proyecto de Ecofeminita y Wingu, con apoyo técnico de la Fundación para el Desarrollo Argentino. La primera edición del Feminindex se elaboró en 2017, en ocasión de las elecciones legislativas de ese año, con el objetivo de mapear las posiciones de les candidates con respecto a la agenda feminista. Temas como aborto, cupo laboral trans o paridad eran indagados en esa edición y probaron ser de extrema utilidad para las futuras discusiones públicas que darían los feminismos argentinos.
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
            FeminIndex es una plataforma digital que busca transparentar las posiciones de les candidates a las elecciones legislativas de 2021 respecto de la agenda feminista, promoviendo la participación ciudadana y la decisión informada en los comicios, asi como la rendición de cuentas de les candidates. Tenemos el objetivo de incidir en las campañas electorales y los compromisos políticos, instalando diversos temas en la agenda electoral que hacen a la igualdad real de mujeres y personas LGBTTTIQ+.
          </Paragraph>
        </Wrapper>
      </Container>

      <Container background="natural" mobilePadding={"2rem 4rem"}>
        <Wrapper>
          <Title mobileFontSize="lg" desktopFontSize="lg" color="dark">
            Metodología
          </Title>
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="dark"
          >
            El Feminindex es un índice elaborado en base a 15 preguntas distribuidas en 5 ejes temáticos: derechos sexuales y reproductivos, participación política, derechos LGBTTTIQ+, economía feminista y violencia machista. Les candidates pueden responder en una escala de acuerdo entre cuatro opciones que miden su nivel de acuerdo con la pregunta planteada. Las respuestas que avanzan los temas de la agenda feminista suman, las respuestas que son perjudiciales para la agenda de género restan y no sabe/no contesta no suma ningún punto. A partir de las respuestas se elabora un puntaje de cada candidate.
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

      <Container background="white" mobilePadding={"0 4rem"}>
        <Wrapper>
          <ScoreWrapper>
            <Container
              background="dark"
              margin="1rem 0"
              desktopPadding="5rem 2.5rem"
              mobilePadding="1.5rem"
              maxWidth="xs"
            >
              <ScoreIconWrapper>
                <PositiveScore />
              </ScoreIconWrapper>
              <Title
                mobileFontSize="lg"
                desktopFontSize="lg"
                color="white"
                margin="0"
              >
                Preguntas
              </Title>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="white"
              >
                Las preguntas fueron elaboradas en un proceso de discusión de Ecofeminita, con la asistencia técnica del equipo de Géneros de Fundar. El indice no agota todos los temas y es por eso que está abierto a que puedan sugerir elementos y sumarse a la discusión con el fin de incorporar cada vez mas tópicos y, sobre todo, hacer llegar información precisa a toda la sociedad. No se incluye trayectoria previa de los/las candidates, dado que puede afectar el puntaje de quienes se postulan por primera vez y porque las posiciones frente a distintos temas de una misma persona pueden modificar a lo largo del tiempo. Quienes tengan comentarios o sugerencias pueden escribirnos a hola@ecofeminita.com
              </Paragraph>
            </Container>
            <AnswersWrapper>
              <Title
                mobileFontSize="lg"
                desktopFontSize="lg"
                color="feminindexRed"
              >
                Respuestas:
              </Title>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="dark"
                padding="0 1rem"
              >
                La mayoría de las preguntas admiten como respuesta: "estoy totalmende de acuerdo", "estoy parcialmente de acuerdo", "no estoy de acuerdo", "no sabe/no contesta". En algunos casos se pregunta específicamente como votarían sobre determinados proyectos que avancen la agenda feminista.

Les candidates tienen la posibilidad de justificar o enviar comentarios a sus respuestas. Se pide que se envien proyectos de su autoría o co-autoría que regulen temas relevados en la encuesta.
              </Paragraph>
              <Paragraph
                mobileFontSize="base"
                desktopFontSize="customBase"
                color="dark"
                padding="0 1rem"
              >
                Les candidates tienen la posibilidad de justificar o enviar comentarios a sus respuestas. Se pide que se envien proyectos de su autoría o co-autoría que regulen temas relevados en la encuesta.
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
                    weight='600'
                  >
                    Coordinación general
                  </Title>
                  <Paragraph
                    mobileFontSize="base"
                    desktopFontSize="regular"
                    color="dark"
                  >
                    Emilia Cerra y Sebastián Neter
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
                    weight='600'
                  >
                    Equipo de investigación de datos
                  </Title>
                  <Paragraph
                    mobileFontSize="base"
                    desktopFontSize="regular"
                    color="dark"
                  >
                    Emilia Cerra, Sofía Jaime, Sabina Bercovich, Manuel Rodríguez, Julieta Molina, Micaela Fernández Erlauer, Camila Piscicelli, María Torrengo, Eliana Colombo, Tatiana Encina, María Paz Rodríguez
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
                    weight='600'
                  >
                    Planificación y asistencia organizacional:
                  </Title>
                  <Paragraph
                    mobileFontSize="base"
                    desktopFontSize="regular"
                    color="dark"
                  >
                    Andrés Snitcofsky, Candelaria Botto
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
                    weight='600'
                  >
                    Diseño gráfico
                  </Title>
                  <Paragraph
                    mobileFontSize="base"
                    desktopFontSize="regular"
                    color="dark"
                  >
                    China Rodríguez, Hugo Medina
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
                    weight='600'
                  >
                    Asistencia técnica:
                  </Title>
                  <Paragraph
                    mobileFontSize="base"
                    desktopFontSize="regular"
                    color="dark"
                  >
                    Equipo de Géneros de la Fundación para el Desarrollo Argentino (Fundar)
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
                    weight='600'
                  >
                    Asistencia metodológica: 
                  </Title>
                  <Paragraph
                    mobileFontSize="base"
                    desktopFontSize="regular"
                    color="dark"
                  >
                    Equipo de Datos de la Fundación para el Desarrollo Argentino (Fundar)
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
                    weight='600'
                  >
                    Equipo de Desarrollo (Wingu):
                  </Title>
                  <Paragraph
                    mobileFontSize="base"
                    desktopFontSize="regular"
                    color="dark"
                  >
                    Franco Alemandi, Brian Knoll, Martín Cravero
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
                    weight='600'
                  >
                    Equipo de comunicación:
                  </Title>
                  <Paragraph
                    mobileFontSize="base"
                    desktopFontSize="regular"
                    color="dark"
                  >
                    China Rodríguez, Celina Santellán, Micaela Robles
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
    margin-left: 4rem;
    margin-top: 4rem;
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
