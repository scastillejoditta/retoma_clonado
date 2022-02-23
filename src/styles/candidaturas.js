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
  background: ${props => props.theme.colors.violet};
  border: none;

  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.base};

  width: 100%;
  padding: 1rem 0;

  margin: 0.5rem 1rem 0.5rem 0;

  text-indent: 10px;

  &::placeholder {
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.base};
    font-weight: normal;
  }

  :focus::-webkit-input-placeholder {
    color: transparent;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 50%;
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
  background: ${props => props.theme.colors.violet};
  border: none;

  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.base};


  width: 100%;
  padding: 1rem 0;

  margin: 0.5rem 1rem 0.5rem 0;

  text-indent: 10px;

  &::placeholder {
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes.base};
    font-weight: normal;
  }

  :focus::-webkit-input-placeholder {
    color: transparent;
  }

  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 25%;
  }
`

const Option = styled.option`
`

const Image = styled.img`
  height: 175px;
  width: 175px;
  object-fit: cover;
  border-radius: 50%;

  margin-top: -2rem;
  margin-left: 1rem;

  background-image: url('/images/motivations.png');
`

export {Image, Select, LinkWrapper, Input, Wrapper, Option}