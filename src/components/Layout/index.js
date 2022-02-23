import {useState, useEffect, useRef} from 'react'
import styled, { ThemeProvider } from "styled-components";
import theme from "../../utils/theme";

import Navbar from '../Navbar'
import Footer from '../Footer'

import Title from '../../components/Title'
import Retoma from '../../assets/Retoma'

const STATUS = {
  STARTED: "Started",
  STOPPED: "Stopped"
};


function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// https://stackoverflow.com/a/2998874/1673761
const twoDigits = (num) => String(num).padStart(2, "0");

export default function Layout({children}) {
  const d1 = new Date()
  const d2 = new Date("2022/2/26")
  const diff = Math.trunc((Math.abs(d1-d2) / 1000))

  const INITIAL_COUNT = diff;
  const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT);
  const [status, setStatus] = useState(STATUS.STARTED);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursRemaining = (minutesRemaining - minutesToDisplay) / 60;
  const hoursToDisplay = hoursRemaining % 24;
  const daysToDisplay = Math.round((hoursRemaining - hoursToDisplay) / 24)
  
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
  );

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
          <Retoma />
          <Title
            desktopFontSize='customXlg'
            mobileFontSize='xlg'
            margin='2rem 4rem'
            style={{textAlign: 'center'}}
            dsColor='#000000'
            mbColor='#000000'
          >
            Sitio en construcción <br /><br />
            Únete a Retoma en:
          </Title>
          <Title
            desktopFontSize='xxl'
            mobileFontSize='customXlg'
            style={{textAlign: 'center', letterSpacing: '4px'}}
            dsColor='#FF2C2C'
            mbColor='#FF2C2C'
            margin='0'
          >
            {twoDigits(daysToDisplay)}:{twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
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

  background: ${props => props.theme.colors.yellow};
`
