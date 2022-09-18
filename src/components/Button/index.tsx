
import React, { ReactNode } from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components/native'
import * as SVG from '../SvgImages'
import * as S from './styles'

interface IButton {
  title: string,
  inverted?: boolean,
  icon?: ReactNode,
  iconName?: 'google' | 'github',
  onPress?: ()=> void,
  loading?: boolean,
  loadingColor?: string,
}

function Button ({ title, inverted, icon, onPress, iconName, loading, loadingColor }: IButton) {
  const { colors } = useTheme()

  const renderIconName = (name: string, inverted: boolean) => {
    switch (name) {
      case 'google':
        return (
          <SVG.IconGoogle colorA={inverted ? colors.text : colors.background} />
        )
      case 'github':
        return (
          <SVG.IconGithub colorA={inverted ? colors.text : colors.background} />
        )
    }
  }

  if (inverted) {
    return (
    <S.ButtonContainerInverted onPress={() => onPress && onPress()} style={({ pressed }) => [{
      opacity: pressed ? 0.4 : 1
    }]}>
      {icon && icon()}
      {iconName && renderIconName(iconName, inverted)}
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
      {loading
        ? (
        <ActivityIndicator
          color={loadingColor || colors.text}
        />
          )
        : (
          <>
            {icon && icon()}
            {iconName && renderIconName(iconName, inverted)}
            <S.ButtonText>
              {title}
            </S.ButtonText>
          </>
          )
      }

    </S.ButtonContainer>
  )
}

export default Button
