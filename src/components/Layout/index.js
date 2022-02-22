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
        <div>
          <Retoma />
          <Title
            desktopFontSize='customXlg'
            dsColor='white'
            margin='4rem 0'
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

  min-width: 100vw;
  min-height: 100vh;

  background: ${props => props.theme.colors.backgroundGray};
`
