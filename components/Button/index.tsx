import React, { ReactNode } from 'react'
import * as S from './styles'

interface IButton {
  title: string,
  inverted?: boolean,
  icon?: ReactNode,
}

const Button: React.FC<IButton> = ({ title, inverted, icon }) => {
  if (inverted) {
    return (
    <S.ButtonContainerInverted style={({ pressed }) => [{
      opacity: pressed ? 0.4 : 1
    }]}>
      {icon && icon()}
      <S.ButtonTextInverted>
        {title}
      </S.ButtonTextInverted>
    </S.ButtonContainerInverted>
    )
  }

  return (
    <S.ButtonContainer style={({ pressed }) => [{
      opacity: pressed ? 0.4 : 1
    }]}>
      {icon && icon()}
      <S.ButtonText>
        {title}
      </S.ButtonText>
    </S.ButtonContainer>
  )
}

export default Button
