import React from "react"
import {Wrapper} from './styles'

// Assets
import Retoma from "../../assets/Retoma"

// Components
import Menu from "../Menu"

const Navbar = () => {
  return (
    <Wrapper>
      <Menu />
      <Retoma />
    </Wrapper>
  );
};

export default Navbar;
