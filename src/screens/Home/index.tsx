
import * as S from './styles'
import { RootTabScreenProps } from '../types'
import { View, useColorScheme } from 'react-native'
import Layout from '../../../constants/Layout'
import Images from '../../components/Images'
import { ImageNames } from '../../components/Images/images'
import useResponsive from '../../hooks/useResponsive'
import Button from '../../components/Button'
import { useState } from 'react'
import { handleGithubSignIn, handleGoogleSignIn } from '../../services/auth'

function Home ({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [pageIndex, setPageIndex] = useState(0)
  const theme = useColorScheme()
  const imageSize = useResponsive(8)
  const iconSize = useResponsive(0.5)

  const renderPageOne = () => {
    return (
      <S.OnboardingView>
      <S.ImageContainer>
        <Images
          name={theme === 'light' ? ImageNames.imageOneLight : ImageNames.imageOneDark}
          width={imageSize}
          height={imageSize}
        />
        <S.PageTitle>
          Um timer feito especialmente para programadores.
        </S.PageTitle>
      </S.ImageContainer>
    </S.OnboardingView>
    )
  }

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
      <View style={{ position: 'absolute', top: -imageSize * 0.27, left: 0 }}>
        <Images
          name={theme === 'light' ? ImageNames.topImageLight : ImageNames.topImageDark}
          width={imageSize * 0.6}
          height={imageSize}
        />
      </View>

      <View style={{ position: 'absolute', bottom: -imageSize * 0.15, right: 0 }}>
        <Images
          name={theme === 'light' ? ImageNames.bottomImageLight : ImageNames.bottomImageDark}
          width={imageSize * 0.6}
          height={imageSize}
        />
      </View>

      <S.ImageContainer>
        <Images
          name={theme === 'light' ? ImageNames.logoLight : ImageNames.logoDark}
          width={imageSize}
          height={imageSize}
        />
      </S.ImageContainer>
      <Button
        onPress={loginGoogle}
        icon={
          () => (
            <Images
              name={theme === 'light' ? ImageNames.googleLight : ImageNames.googleDark}
              width={iconSize}
              height={iconSize}
            />
          )
        }
        title={'Entrar'}
      />
      <View style={{ height: Layout.window.width * 0.04 }}/>
      <Button
        onPress={ async () => {
          await handleGithubSignIn()
        }}
        inverted
        title={'Login Github'}
        icon={
          () => (
            <Images
              name={theme === 'light' ? ImageNames.githubLight : ImageNames.githubDark}
              width={iconSize * 1.2}
              height={iconSize * 1.2}
            />
          )
        }
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
        {renderPageOne()}
        {renderPageTwo()}
        {renderPageThree()}
      </S.OnboardingScrollView>
      <View
        style={
          {
            position: 'absolute',
            alignSelf: 'center',
            bottom: imageSize * 0.2,
            flexDirection: 'row',
            paddingHorizontal: 30
          }
        }
      >
        <View style={{
          marginHorizontal: imageSize * 0.03
        }}>
          {pageIndex === 0
            ? (
              <Images
                name={theme === 'light' ? ImageNames.menuDotFilledLight : ImageNames.menuDotFilledDark}
                width={imageSize * 0.05}
                height={imageSize * 0.05}
              />
              )
            : (
              <Images
                name={theme === 'light' ? ImageNames.menuDotLight : ImageNames.menuDotDark}
                width={imageSize * 0.05}
                height={imageSize * 0.05}
              />
              )
          }
        </View>

        <View style={{
          marginHorizontal: imageSize * 0.03
        }}>
          {pageIndex === 1
            ? (
              <Images
                name={theme === 'light' ? ImageNames.menuDotFilledLight : ImageNames.menuDotFilledDark}
                width={imageSize * 0.05}
                height={imageSize * 0.05}
              />
              )
            : (
              <Images
                name={theme === 'light' ? ImageNames.menuDotLight : ImageNames.menuDotDark}
                width={imageSize * 0.05}
                height={imageSize * 0.05}
              />
              )
          }
        </View>

        <View style={{
          marginHorizontal: imageSize * 0.03
        }}>
          {pageIndex === 2
            ? (
                <Images
                  name={theme === 'light' ? ImageNames.menuDotFilledLight : ImageNames.menuDotFilledDark}
                  width={imageSize * 0.05}
                  height={imageSize * 0.05}
                />
              )
            : (
                <Images
                  name={theme === 'light' ? ImageNames.menuDotLight : ImageNames.menuDotDark}
                  width={imageSize * 0.05}
                  height={imageSize * 0.05}
                />
              )
            }
        </View>
      </View>
    </S.Container>
  )
}

export default Home
