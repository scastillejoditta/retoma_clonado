import React from "react";
import styled from "styled-components";

// Assets
import Retoma from "../../assets/Retoma";

// Components
import Menu from "../Menu";

const Navbar = () => {
  return (
    <Wrapper>
      <Menu />
      <Retoma />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;

  background: ${props => props.theme.colors.backgroundGray};

  padding: 2rem;

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: initial;
  }
`;

export default Navbar;
