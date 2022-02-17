import styled from "styled-components";
import { useRouter } from 'next/router'

// Assets
import CloseIcon from "../../assets/Icons/Close";
import Facebook from "../../assets/Icons/Facebook";
import Twitter from "../../assets/Icons/Twitter";
import Instagram from "../../assets/Icons/Instagram";

const List = ({ onShowMenuInMobile }) => {
  const router = useRouter()

  const handleSelectedSection = (section) => {
    router.push(section)
    onShowMenuInMobile(false);
  };

  return (
    <>
      <Close onClick={() => onShowMenuInMobile(false)}>
        <CloseIcon />
      </Close>
      <Wrapper>
        <UnorderedList>
          <ListItems selected={router.asPath === "/"}>
            <a onClick={() => handleSelectedSection("/")}>Inicio</a>
          </ListItems>
          <ListItems selected={router.asPath === "/sobre-retoma"}>
            <a onClick={() => handleSelectedSection("/sobre-retoma")}>Sobre Retoma</a>
          </ListItems>
          <ListItems selected={router.asPath === "/unete-a-la-red"}>
            <a onClick={() => handleSelectedSection("/unete-a-la-red")}>
              Únete a la Red
            </a>
          </ListItems>
          <ListItems selected={router.asPath === "/candidaturas"}>
            <a onClick={() => handleSelectedSection("/candidaturas")}>
              Candidaturas
            </a>
          </ListItems>
        </UnorderedList>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
`;

const UnorderedList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  inset: 0px;
  min-width: 100vw;
  min-height: 100vh;

  z-index: 1;

  background: ${props => props.theme.colors.backgroundGray};

  list-style-type: none;

  text-align: center;

  padding: 0px;
  margin: 0px;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    list-style-type: none;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: unset;

    position: relative;

    min-width: unset;
    min-height: unset;
  }
`;

const ListItems = styled.li`
  margin: 2.5rem 0;

  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0 4rem;

    min-width: max-content;

    font-size: ${(props) => props.theme.fontSizes.customBase};
    font-weight: 600;
    text-decoration: ${(props) => (props.selected ? "underline" : "none")};
    color: ${props => props.theme.colors.white};

    cursor: pointer;
  }
`;

const Close = styled.button`
  position: relative;

  color: white;
  font-size: ${(props) => props.theme.fontSizes.lg};

  background: transparent;
  border: none;

  z-index: 2;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export default List;
