import React from 'react'
import {StyledButton} from './styles'

const Button = ({border, fontSize, background, color, children, margin, padding, onClick}) => {
  return (
    <StyledButton 
      border={border}
      background={background}
      color={color}
      margin={margin}
      padding={padding}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

export default Button