import React from "react";
import {useState} from "react";
import {ListWrapper, ButtonWrapper, Wrapper} from './styles'

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

export default Menu;
