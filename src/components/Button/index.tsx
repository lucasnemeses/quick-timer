import { ComponentProps } from 'react'
import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant
}

export function Button({ variant = 'primary', children }: ButtonProps) {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>
}
