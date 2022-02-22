import {useState, useEffect} from 'react'
import styled, { ThemeProvider } from "styled-components";
import theme from "../../utils/theme";

import Navbar from '../Navbar'
import Footer from '../Footer'

import Title from '../../components/Title'
import Retoma from '../../assets/Retoma'

export default function Layout({children}) {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
          <Retoma />
          <Title
            desktopFontSize='customXlg'
            dsColor='white'
            mobileFontSize='xlg'
            mbColor='white'
            margin='4rem'
          >
            Sitio en construcción
          </Title>
        </div> 
      </Wrapper>
      {/* <Navbar />
      <main>{children}</main>
      <Footer /> */}
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: ${props => props.theme.colors.backgroundGray};
`
