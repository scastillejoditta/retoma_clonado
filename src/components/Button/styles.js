import styled from 'styled-components'

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: ${props => props.border};
  border: none;
  background: ${props => props.background};
  color: ${props => props.color};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`

export {StyledButton}