import styled from 'styled-components'

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: ${props => props.border};
  border: none;
  background: ${props => props.background};
  color: ${props => props.color};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  font-size: ${props => props.fontSize};

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0.5rem 1rem;
  }
`

export {StyledButton}