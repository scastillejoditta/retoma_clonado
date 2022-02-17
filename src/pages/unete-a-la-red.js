import styled from "styled-components";

// Assets
import Square from "../assets/Icons/Square";

// Components
import Container from "../components/Container";
import Title from "../components/Title";
import Paragraph from "../components/Paragraph";

const JoinToUs = () => {
  return (
    <>
      <Container background="backgroundGray" desktopPadding={'2rem 4rem'} mobilePadding={"2rem"}>
        <Wrapper>
          <Title mobileFontSize="customXlg" weight='700' desktopFontSize="lg" dsColor="white" mbColor='white' margin='2rem 0'>
          La movilización social no termina en las calles
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

      <Container background="white" desktopPadding={'2rem 4rem'} mobilePadding={"2rem"}>
        <Wrapper>
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="backgroundGray"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
        </Wrapper>
      </Container>
      <SquareWrapper>
        <div style={{margin: '0 1rem 0 0'}}>
          <Square />
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="dark"
            desktopMargin='1rem 0'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </Paragraph>
        </div>
        <div style={{margin: '0 1rem 0 0'}}>
          <Square />
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="dark"
            desktopMargin='1rem 0'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </Paragraph>
        </div>
        <div style={{margin: '0 1rem 0 0'}}>
          <Square />
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="dark"
            desktopMargin='1rem 0'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </Paragraph>
        </div>
        <div style={{margin: '0 1rem 0 0'}}>
          <Square />
          <Paragraph
            mobileFontSize="base"
            desktopFontSize="customBase"
            color="dark"
            desktopMargin='1rem 0'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </Paragraph>
        </div>
      </SquareWrapper>
      <Container background="white" mobilePadding={"2rem"} desktopPadding={"2rem 4rem"}>
        <Wrapper style={{background: '#C4C4C4'}}>
          <Title color='white' mobileFontSize='customXlg'>
            Llamado a la acción haz parte de retoma
          </Title>
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.section`
  display: block;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 1024px;
    margin: 0 auto;

    padding: 4rem;
  }
`;

const SquareWrapper = styled.section`
  display: block;
  margin: 0 2rem;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justifyContent: space-between;
    padding: 0;
    max-width: 1024px;
    margin: 0 auto;

    padding: 4rem;
  }
`

export default JoinToUs;
