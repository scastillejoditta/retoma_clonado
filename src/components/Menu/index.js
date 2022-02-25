import React from "react";
import { useState } from "react";
import {ListWrapper, ButtonWrapper, Wrapper} from './styles'

// Assets
import Burger from "../../assets/Icons/Burguer";

// Components
import List from "../List";

const Menu = ({bg, burgerColor, showMenuInMobile, setShowMenuInMobile}) => {
  return (
    <Wrapper>
      <ButtonWrapper
        onClick={() => setShowMenuInMobile((prevState) => !prevState)}
      >
        <Burger fill={burgerColor} />
      </ButtonWrapper>

      <ListWrapper showMenuInMobile={showMenuInMobile}>
        <List closeColor={burgerColor} bg={bg} onShowMenuInMobile={setShowMenuInMobile} />
      </ListWrapper>
    </Wrapper>
  );
};

export default Menu;
