import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;

  margin: 1rem 0;
`;

const ButtonWrapper = styled.button`
  display: flex;

  background: transparent;
  font-size: ${(props) => props.theme.fontSizes.lg};
  border: none;

  margin-left: 2rem;

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const ListWrapper = styled.div`
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: ${(props) => (props.showMenuInMobile ? "initial" : "none")};
  }
`;

export {ListWrapper, ButtonWrapper, Wrapper}