import styled from 'styled-components'

const OptionsWrapper = styled.section`
  display: none;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
  }
`;

const Option = styled.div`
  width: 150px;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  cursor: pointer;

  text-align: center;

  margin: 0 0.8rem;

  background: ${props => props.bg ? '#FFCCF1' : 'white'};
  color: ${props => props.theme.colors.black};
  border: 1px solid black;

  line-height: 1.5;
  font-weight: 600;

  cursor: pointer;
  font-size: 12px;
`;

const AxlesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    text-align: left;
    > * {
      margin: 0 2rem;
    }
  }
`;

const AxleTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 35%;
    position: relative;
    display: block;
  }
`;

const AxleDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 65%;
  }
`;

const LeftArrowWrapper = styled.div`
  align-self: center;
  margin-right: 1rem;
  visibility: ${(props) => (props.selectedAxle !== 0 ? "visible" : "hidden")};
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const RightArrowWrapper = styled.div`
  align-self: center;
  margin-left: 1rem;
  visibility: ${(props) => (props.selectedAxle !== 2 ? "visible" : "hidden")};
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const MobileLeftArrowWrapper = styled.div`
  align-self: center;
  margin-left: 1rem;
  visibility: ${(props) => (props.selectedAxle !== 0 ? "visible" : "hidden")};
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`

const MobileRightArrowWrapper = styled.div`
  align-self: center;
  margin-left: 1rem;
  visibility: ${(props) => (props.selectedAxle !== 2 ? "visible" : "hidden")};
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`

const Bancas = styled.div`
  width: 100%;
  height: 100%;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
  }
`;

const SelectWrapper = styled.div`
  width: 100%;
`;

const Frases = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  &:first-child {
    margin-right: 4rem;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Novedades = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Frase = styled.div`
  background-color: ${props => props.theme.colors.violet};
  position: relative;

  height: 100%;

  margin: 1rem 0;
  
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-direction: space-between;

    min-height: 20rem;
    width: 30%;

    margin: 1rem;
  }
`;

const Noveded = styled.a`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${(props) => props.image});
  object-fit: contain;
  width: 100%;
  height: 15rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  padding: 2rem;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 1rem;
    width: 30%;
    padding: unset;
  }
`;

const AvatarWrapper = styled.div`
  position: absolute;
  left: -3.5rem;
  top: 1rem;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    left: -4rem;
  }
`;

const ShareWrapper = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 1rem;
`;

const Share = styled.div`
  display: flex;

  background-color: ${props => props.theme.colors.white};

  padding: 0.5rem 0.75rem;
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    margin: 0 0.5rem;
  }
`;

const GraphWrapper = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
`;

export {GraphWrapper, SocialMedia, Share, ShareWrapper, AvatarWrapper, Noveded, Frase, Novedades, Frases, SelectWrapper, Bancas, RightArrowWrapper, LeftArrowWrapper, AxleDescription, AxlesWrapper, AxleTitle, Option, OptionsWrapper, MobileLeftArrowWrapper, MobileRightArrowWrapper}