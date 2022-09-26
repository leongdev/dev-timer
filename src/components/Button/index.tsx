
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components/native'
import * as SVG from '../SvgImages'
import * as S from './styles'

interface IButton {
  title: string,
  inverted?: boolean,
  icon?: ()=> JSX.Element,
  iconRight?: ()=> JSX.Element,
  spaceBetween?: boolean,
  iconName?: 'google' | 'github',
  onPress?: ()=> void,
  loading?: boolean,
  loadingColor?: string,
}

function Button ({ spaceBetween, iconRight, title, inverted, icon, onPress, iconName, loading, loadingColor }: IButton) {
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
    <S.ButtonContainerInverted
      spaceBetween={spaceBetween}
      onPress={() => onPress && onPress()}
      style={({ pressed }) => [{
        opacity: pressed ? 0.4 : 1
      }]}>
      {icon && icon()}
      {iconName && renderIconName(iconName, inverted)}
      <S.ButtonTextInverted
        spaceBetween={spaceBetween}
      >
        {title}
      </S.ButtonTextInverted>
      <S.RightContainer
        spaceBetween={spaceBetween}
      >
        {iconRight && iconRight()}
      </S.RightContainer>
    </S.ButtonContainerInverted>
    )
  }

  return (
    <S.ButtonContainer
      spaceBetween={spaceBetween}
      onPress={() => onPress && onPress()}
      style={({ pressed }) => [{
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
            <S.ButtonText
              spaceBetween={spaceBetween}
            >
              {title}
            </S.ButtonText>
            <S.RightContainer
              spaceBetween={spaceBetween}
            >
              {iconRight && iconRight()}
            </S.RightContainer>
          </>
          )
      }

    </S.ButtonContainer>
  )
}

export default Button
