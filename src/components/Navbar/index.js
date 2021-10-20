import React from "react";
import styled from "styled-components";

// Assets
import FeminindexLogo from "../../assets/Icons/Ecofeminita";

// Components
import Menu from "../Menu";

const Navbar = () => {
  return (
    <Wrapper>
      <FeminindexLogo />
      <Menu />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 2rem;
`;

export default Navbar;
