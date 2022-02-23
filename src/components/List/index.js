import {useRouter} from 'next/router'

import {Close, ListItems, UnorderedList, Wrapper} from './styles'

// Assets
import CloseIcon from "../../assets/Icons/Close";

const List = ({ onShowMenuInMobile }) => {
  const router = useRouter()

  const handleSelectedSection = (section) => {
    router.push(section)
    onShowMenuInMobile(false);
  };

  return (
    <>
      <Close onClick={() => onShowMenuInMobile(false)}>
        <CloseIcon />
      </Close>
      <Wrapper>
        <UnorderedList>
          <ListItems selected={router.asPath === "/"}>
            <a onClick={() => handleSelectedSection("/")}>Inicio</a>
          </ListItems>
          <ListItems selected={router.asPath === "/sobre-retoma"}>
            <a onClick={() => handleSelectedSection("/sobre-retoma")}>Sobre Retoma</a>
          </ListItems>
          <ListItems selected={router.asPath === "/unete-a-la-red"}>
            <a onClick={() => handleSelectedSection("/unete-a-la-red")}>
              Únete a la Red
            </a>
          </ListItems>
          <ListItems selected={router.asPath === "/candidaturas"}>
            <a onClick={() => handleSelectedSection("/candidaturas")}>
              Candidaturas
            </a>
          </ListItems>
        </UnorderedList>
      </Wrapper>
    </>
  );
};

export default List;
