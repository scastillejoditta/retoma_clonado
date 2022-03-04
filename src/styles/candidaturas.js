import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  margin: 4rem 2rem;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 1024px;
    margin: 0 auto;

    padding: 2rem;
  }
`;

const Input = styled.input`
  background: transparent;
  border: 2px solid #000000;

  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.regular};
  font-weight: 700;

  width: 100%;
  padding: 1rem 0;

  margin: 0.5rem 1rem 0.5rem 0;

  text-indent: 10px;

  &::placeholder {
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.fontSizes.regular};
    font-weight: 700;
  }

  :focus::-webkit-input-placeholder {
    color: transparent;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 40%;
  }
`

const LinkWrapper = styled.a`
  display: block;

  padding: 1rem;

  background: ${props => props.background};
  color: ${props => props.color};

  text-align: center;
  text-decoration: none;

  cursor: pointer;

`

const Select = styled.select`
  background: transparent;
  border: 2px solid #000000;

  color: ${props => props.theme.colors.black};
  font-size: ${props => props.theme.fontSizes.regular};


  width: 100%;
  padding: 1rem 0;

  margin: 0.5rem 1rem 0.5rem 0;

  text-indent: 10px;

  &::placeholder {
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.fontSizes.regular};
    font-weight: normal;
  }

  :focus::-webkit-input-placeholder {
    color: transparent;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 20%;
  }
`

const Option = styled.option`
`

const Image = styled.img`
  height: 170px;
  width: 175px;
  object-fit: cover;

  margin-top: -2rem;
`

export {Image, Select, LinkWrapper, Input, Wrapper, Option}