import React from "react";
import { useState } from "react";
import styled from "styled-components";

// Assets
import Burger from "../../assets/Icons/Burguer";

// Components
import List from "../List";

const Menu = () => {
  const [showMenuInMobile, setShowMenuInMobile] = useState(false);

  return (
    <Wrapper>
      <ButtonWrapper
        onClick={() => setShowMenuInMobile((prevState) => !prevState)}
      >
        <Burger />
      </ButtonWrapper>

      <ListWrapper showMenuInMobile={showMenuInMobile}>
        <List onShowMenuInMobile={setShowMenuInMobile} />
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ButtonWrapper = styled.button`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.lg};

  background: transparent;
  border: none;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const ListWrapper = styled.div`
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: ${(props) => (props.showMenuInMobile ? "initial" : "none")};
  }
`;

export default Menu;