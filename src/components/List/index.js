import {useRouter} from 'next/router'

import {Close, ListItems, UnorderedList, Wrapper} from './styles'

// Assets
import CloseIcon from "../../assets/Icons/Close";
import Retoma from "../../assets/Retoma"

const colors = {
  '/': '#FF2C2C',
  '/sobre-retoma': '#142FF4',
  '/unete-a-la-red': '#FF00A4',
  '/candidaturas': '#7E3BFF',
  '/candidaturas/[candidate]': '#000000'
}

const List = ({bg, closeColor, onShowMenuInMobile}) => {
  const router = useRouter()

  const handleSelectedSection = (section) => {
    router.push(section)
    onShowMenuInMobile(false);
  };

  return (
    <>
      <Close onClick={() => onShowMenuInMobile(false)}>
        <CloseIcon fill={closeColor} />
      </Close>
      <Wrapper>
        <UnorderedList bg={bg}>
          <ListItems selected={router.asPath === "/"}>
            <a onClick={() => handleSelectedSection("/")}>Inicio</a>
          </ListItems>
          <ListItems selected={router.asPath === "/candidaturas"}>
            <a onClick={() => handleSelectedSection("/candidaturas")}>
              Candidaturas
            </a>
          </ListItems>
          <ListItems selected={router.asPath === "/sobre-retoma"}>
            <a onClick={() => handleSelectedSection("/sobre-retoma")}>Sobre Retoma</a>
          </ListItems>
          <ListItems selected={router.asPath === "/unete-a-la-red"}>
            <a onClick={() => handleSelectedSection("/unete-a-la-red")}>
              Únete a la Red
            </a>
          </ListItems>
        </UnorderedList>
      </Wrapper>
    </>
  );
};

export default List;
