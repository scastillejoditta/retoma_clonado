import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

// Assets
import CloseIcon from "../../assets/Icons/Close";
import Facebook from "../../assets/Icons/Facebook";
import Twitter from "../../assets/Icons/Twitter";
import Instagram from "../../assets/Icons/Instagram";

const List = ({ onShowMenuInMobile }) => {
  let history = useHistory();

  const [selectedSection, setSelectedSection] = useState(
    history.location.pathname || "/inicio"
  );

  const handleSelectedSection = (section) => {
    setSelectedSection(section);
    history.push(section);
    onShowMenuInMobile(false);
  };

  return (
    <>
      <Close onClick={() => onShowMenuInMobile(false)}>
        <CloseIcon />
      </Close>
      <Wrapper>
        <UnorderedList>
          <ListItems selected={"/inicio" === selectedSection}>
            <a onClick={() => handleSelectedSection("/inicio")}>Inicio</a>
          </ListItems>
          <ListItems selected={"/sobre-nosotrxs" === selectedSection}>
            <a onClick={() => handleSelectedSection("/sobre-nosotrxs")}>
              Sobre el proyecto
            </a>
          </ListItems>
          <ListItems selected={"/candidates" === selectedSection}>
            <a onClick={() => handleSelectedSection("/candidates")}>
              Candidates
            </a>
          </ListItems>
          <SocialMedia>
            <MediaIconsWrapper>
              <Twitter />
            </MediaIconsWrapper>
            <MediaIconsWrapper>
              <Facebook />
            </MediaIconsWrapper>
            <MediaIconsWrapper>
              <Instagram />
            </MediaIconsWrapper>
          </SocialMedia>
        </UnorderedList>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section``;

const UnorderedList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  min-width: 100vw;
  min-height: 100vh;

  background: ${(props) => props.theme.colors.feminindexRed};

  list-style-type: none;
  text-align: center;

  display: flex;
  flex-direction: column;

  padding: 0;
  margin: 0;

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

    background: ${(props) => props.theme.colors.white};
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
    text-decoration: ${(props) => (props.selected ? "none" : "underline")};
    color: ${(props) =>
      props.selected
        ? props.theme.colors.feminindexRed
        : props.theme.colors.dark};

    cursor: pointer;
  }
`;

const Close = styled.button`
  position: relative;

  color: white;
  font-size: ${(props) => props.theme.fontSizes.lg};

  background: transparent;
  border: none;

  z-index: 1;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const SocialMedia = styled.div`
  width: 100%;

  margin-top: 2rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    justify-content: space-around;

    margin: 0;
  }
`;

const MediaIconsWrapper = styled.a`
  margin: 0 1rem;

  cursor: pointer;
`;

export default List;
