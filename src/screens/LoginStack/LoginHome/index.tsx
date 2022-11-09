
import * as S from './styles'
import * as SVG from '../../../components/SvgImages'
import { RootTabScreenProps } from '../types'
import { Platform, Pressable, View } from 'react-native'
import Layout from '../../../../constants/Layout'
import Button from '../../../components/Button'
import { useEffect } from 'react'

import Constants from 'expo-constants'
import { useTheme } from 'styled-components/native'

import { doc, getDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { authenticateWithApple, authenticateWithGithub, authenticateWithGoogle } from '../../../store/action/auth'
import SafeContainer from '../../../components/SaveContainer'

function LoginHome ({ navigation }: RootTabScreenProps) {
  const { colors } = useTheme()
  const dispatch = useDispatch() 

  const handleGoogleLogin = async () => {
    await dispatch(authenticateWithGoogle)
  }

  const handleGithubLogin = async () => {
    await dispatch(authenticateWithGithub)
  }

  const handleAppleLogin = async () => {
    await dispatch(authenticateWithApple)
  }

  const renderPageOne = () => {
    return (
      <S.OnboardingView>
        <S.ImageContainer>
          <SVG.OnboardingOne colorA={colors.text} colorB={colors.background}/>
          <S.PageTitle>
            Um pomodoro feito especialmente para você dev!
          </S.PageTitle>
        </S.ImageContainer>
          <S.PageSubtitle>
            Arrasta para o lado ->
          </S.PageSubtitle>
      </S.OnboardingView>
    )
  }

  const renderPageTwo = (second) => {
    return (
    <S.OnboardingView>
      <S.ImageContainer>
        <Pressable
          delayLongPress={4000}
          onLongPress={() => {
            navigation.navigate('LoginHidden')
          }}
        >
        <SVG.Logo colorA={colors.text} />
        </Pressable>

        <S.LogoTitle>DEV TIMER</S.LogoTitle>
      </S.ImageContainer>
      <Button
        onPress={handleGoogleLogin}
        title={'Logar com Gmail'}
        iconName='google'
      />
      <View style={{ height: Layout.window.width * 0.04 }}/>
      <Button
        onPress={handleGithubLogin}
        inverted
        title={'Logar com Github'}
        iconName='github'
      />

      { Platform.OS === 'ios' &&
        (
          <>
            <View style={{ height: Layout.window.width * 0.04 }}/>
            <Button
              onPress={handleAppleLogin}
              inverted
              title={'Logar com Apple'}
              iconName='apple'
            />
          </>
        )
      }

      <S.AppVersionTitle>V{Constants.manifest?.version}</S.AppVersionTitle>
    </S.OnboardingView>
    )
  }

  return (
    <SafeContainer>
      <S.Container >
        <S.OnboardingScrollView
          horizontal= {true}
          decelerationRate={0}
          snapToInterval={Layout.window.width} // your element width: ;
          snapToAlignment={'center'}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        >
          {renderPageOne()}
          {renderPageTwo()}
        </S.OnboardingScrollView>
      </S.Container>
    </SafeContainer>
  )
}

export default LoginHome
