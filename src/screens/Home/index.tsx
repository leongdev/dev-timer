
import * as S from './styles'
import * as SVG from '../../components/SvgImages'
import { RootTabScreenProps } from '../types'
import { View } from 'react-native'
import Layout from '../../../constants/Layout'
import Button from '../../components/Button'
import { useState } from 'react'
import { handleGithubSignIn, handleGoogleSignIn } from '../../services/auth'

import Constants from 'expo-constants'
import { useTheme } from 'styled-components/native'
import BottomDots from '../../components/BottomDots'

function Home ({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [pageIndex, setPageIndex] = useState(0)
  const { colors } = useTheme()

  const renderPageOne = () => {
    return (
      <S.OnboardingView>
        <S.ImageContainer>
          <SVG.OnboardingOne colorA={colors.text} colorB={colors.background}/>
          <S.PageTitle>
          Entre no flow de trabalho e bora pro código!
          </S.PageTitle>
        </S.ImageContainer>
      </S.OnboardingView>
    )
  }

  const renderPageTwo = (second) => {
    return (
    <S.OnboardingView>
      <S.ImageContainer>
        <SVG.Logo colorA={colors.text} />
        <S.LogoTitle>DEV TIMER</S.LogoTitle>
      </S.ImageContainer>
      <Button
        onPress={loginGoogle}
        title={'Logar com Gmail'}
        iconName='google'
      />
      <View style={{ height: Layout.window.width * 0.04 }}/>
      <Button
        onPress={ async () => {
          await handleGithubSignIn()
        }}
        inverted
        title={'Logar com Github'}
        iconName='github'
      />
      <S.AppVersionTitle>V{Constants.manifest?.version}</S.AppVersionTitle>
    </S.OnboardingView>
    )
  }

  const setScrollViewIndex = (event) => {
    setPageIndex(parseInt(event.nativeEvent.contentOffset.x / Layout.window.width))
  }

  const loginGoogle = async () => {
    await handleGoogleSignIn()
  }

  return (
    <S.Container >
      <S.OnboardingScrollView
        horizontal= {true}
        decelerationRate={0}
        snapToInterval={Layout.window.width} // your element width: ;
        snapToAlignment={'center'}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={(e) => setScrollViewIndex(e)}
      >
        {renderPageOne()}
        {renderPageTwo()}
      </S.OnboardingScrollView>
      <BottomDots dotIndex={pageIndex} />
    </S.Container>
  )
}

export default Home
