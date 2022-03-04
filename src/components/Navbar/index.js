import {useState} from "react"
import {useRouter} from 'next/router'
import {HeaderWrapper} from './styles'

// Assets
import Retoma from "../../assets/Retoma"

// Components
import Menu from "../Menu"
import Wrapper from '../Wrapper'

const backgroundsPerPage = {
  '/': '#FFF422',
  '/sobre-retoma': '#00D857',
  '/unete-a-la-red': '#FFD039',
  '/candidaturas': '#FFCCF1',
  '/candidaturas/[candidate]': '#FFCCF1'
}

const retomaColors = {
  '/': '#FF2C2C',
  '/sobre-retoma': '#142FF4',
  '/unete-a-la-red': '#FF00A4',
  '/candidaturas': '#7E3BFF',
  '/candidaturas/[candidate]': '#7E3BFF'
}

const Navbar = () => {
  const [showMenuInMobile, setShowMenuInMobile] = useState(false);
  const router = useRouter()
  const bgs = backgroundsPerPage[router.pathname]
  const fillByPage = retomaColors[router.pathname]
  return (
    <Wrapper 
      dsBackground={bgs}
      mbBackground={bgs}
    >
      <HeaderWrapper 
        bg={bgs}
      >
        <Retoma 
          fill={fillByPage} 
          bg={bgs} 
          isMobile={showMenuInMobile}
          style={{margin: '0 1.2rem 0 0'}}
        />
        <Menu 
          showMenuInMobile={showMenuInMobile} 
          setShowMenuInMobile={setShowMenuInMobile} 
          bg={bgs} 
          burgerColor={fillByPage} 
        />
      </HeaderWrapper>
    </Wrapper>
  );
};

export default Navbar;
