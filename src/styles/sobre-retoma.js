import styled from 'styled-components'

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

export {Rows, PersonWrapper, Persons, TeamWrapper, AnswersWrapper, ScoreWrapper, Wrapper}