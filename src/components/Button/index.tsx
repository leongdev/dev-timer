import React, { ReactNode } from 'react'
import * as S from './styles'

interface IButton {
  title: string,
  inverted?: boolean,
  icon?: ReactNode,
  onPress?: ()=> void,
}

const Button: React.FC<IButton> = ({ title, inverted, icon, onPress }) => {
  if (inverted) {
    return (
    <S.ButtonContainerInverted onPress={() => onPress && onPress()} style={({ pressed }) => [{
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
    <S.ButtonContainer onPress={() => onPress && onPress()} style={({ pressed }) => [{
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
