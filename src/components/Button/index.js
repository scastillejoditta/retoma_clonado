import React from 'react'
import {StyledButton} from './styles'

const Button = ({border, background, color, children, margin, padding, onClick}) => {
  return (
    <StyledButton 
      border={border}
      background={background}
      color={color}
      margin={margin}
      padding={padding}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

export default Button