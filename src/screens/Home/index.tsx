
import * as S from './styles'
import * as SVG from '../../components/SvgImages'
import { RootTabScreenProps } from '../types'
import { View, useColorScheme } from 'react-native'
import Layout from '../../../constants/Layout'
import Images from '../../components/Images'
import { ImageNames } from '../../components/Images/images'
import useResponsive from '../../hooks/useResponsive'
import Button from '../../components/Button'
import { useState } from 'react'
import { handleGithubSignIn, handleGoogleSignIn } from '../../services/auth'
import { useTheme } from '@react-navigation/native'

function Home ({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [pageIndex, setPageIndex] = useState(0)
  const theme = useColorScheme()
  const imageSize = useResponsive(8)
  const iconSize = useResponsive(0.5)
  const { colors } = useTheme()

  const renderPageTwo = () => {
    return (
      <S.OnboardingView>
      <S.ImageContainer>
        <Images
          name={theme === 'light' ? ImageNames.imageTwoLight : ImageNames.imageTwoDark}
          width={imageSize}
          height={imageSize}
        />
        <S.PageTitle>
         Entre no flow de trabalho e bora pro código!
        </S.PageTitle>
      </S.ImageContainer>
    </S.OnboardingView>
    )
  }

  const renderPageThree = (second) => {
    return (
    <S.OnboardingView>

      <S.ImageContainer>
        <SVG.Logo colorA={colors.background} />
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
        {renderPageTwo()}
        {renderPageThree()}
      </S.OnboardingScrollView>
    </S.Container>
  )
}

export default Home
