import { useMemo, useEffect, useState, useCallback } from 'react'
import { RootTabScreenProps } from '../types'

import * as S from './styles'
import Images from '../../components/Images/index'
import { Pressable, useColorScheme, View, Text } from 'react-native'
import useResponsive from '../../hooks/useResponsive'
import { ImageNames } from '../../components/Images/images'
import { MotiImage } from 'moti'

import portalTimerDark from '../../assets/images/portal_dark.png'
import portalTimerLight from '../../assets/images/portal_light.png'
import Layout from '../../constants/Layout'
import quotesData from '../../data/quotes'
import soundsData from '../../data/sounds'
import { Audio } from 'expo-av'

const INITIAL_TIME_IN_SECONDS = 50 * 60 // 25 minutes

const TimerScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  const theme = useColorScheme()
  const imageSize = useResponsive(3)
  const quoteSize = useResponsive(1.5)
  const portalSize = useResponsive(25)
  const [count, setCount] = useState(INITIAL_TIME_IN_SECONDS)
  const [active, setActive] = useState(false)
  const [quotes, setQuotes] = useState(quotesData[0])
  const [playingSound, setSound] = useState(null)

  useEffect(() => {
    return playingSound
      ? () => {
          console.log('Unloading Sound')
          playingSound.unloadAsync()
        }
      : undefined
  }, [playingSound])

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        setCount((state) => state - 1)
      }, 1000)

      if (count === 0) {
        setActive(false)
        setCount(INITIAL_TIME_IN_SECONDS)
      }

      return () => {
        clearInterval(interval)
      }
    }
  }, [active, count])

  async function playSound (soundItem) {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync({
      uri: soundItem.path
    })
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  const stopSound = () => {
    playingSound.unloadAsync()
  }

  const minutes = useMemo(() => Math.floor(count / 60), [count])
  const seconds = useMemo(() => count % 60, [count])
  // const progress = useMemo(
  //   () => (count * 100) / INITIAL_TIME_IN_SECONDS,
  //   [count]
  // )

  const toggleTimer = useCallback(() => {
    const maximum = quotesData.length - 1
    const minimum = 0
    const maximumSound = soundsData.length - 1
    setQuotes(quotesData[Math.floor(Math.random() * (maximum - minimum + 1)) + minimum])
    setActive(!active)
    playSound(soundsData[Math.floor(Math.random() * (maximumSound - minimum + 1)) + minimum])
  }, [active])

  return (
    <S.Container>
      <View
          style={
            {
              alignItems: 'center',
              justifyContent: 'center',
              width: Layout.window.width,
              height: Layout.window.width * 0.45
            }
          }
      >
        <View
           style={
            {
              position: 'absolute',
              left: quoteSize / 2,
              top: 0
            }
          }
        >
          <Images
            name={ ImageNames.quoteOpen}
            width={quoteSize}
            height={quoteSize}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'fira-bold',
              width: Layout.window.width * 0.8,
              color: theme === 'dark' ? 'white' : 'black',
              fontSize: quoteSize * 0.25,
              marginLeft: quoteSize * 0.1,
              textAlign: 'center'
            }}
          >
            {`${quotes.quote} ${'\n'} - ${quotes.author}`}
          </Text>
        </View>
        <View
          style={
            {
              position: 'absolute',
              right: quoteSize / 2,
              bottom: 0
            }
          }
        >
          <Images
            name={ ImageNames.quoteClose}
            width={quoteSize}
            height={quoteSize}
          />
        </View>
      </View>
      <S.PortalTimerContainer>
        <MotiImage
          style={
            {
              width: portalSize,
              height: portalSize
            }
          }
          source={theme === 'dark' ? portalTimerDark : portalTimerLight}
          from={{ rotate: '0deg' }}
          animate={{ rotate: '360deg' }}
          transition={{
            loop: true,
            type: 'timing',
            duration: 1500 * 60,
            delay: 100
          }}
        />
      </S.PortalTimerContainer>
      <S.CenterTimerContainer>
        {active &&
          (<View
              style={
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: theme === 'dark' ? 'white' : 'black',
                  width: Layout.window.width * 0.2,
                  height: Layout.window.width * 0.2,
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  borderRadius: Layout.window.width * 0.2
                }
              }
            >
              <Pressable
                  onPress={() => {
                    setActive(false)
                    setCount(INITIAL_TIME_IN_SECONDS)
                  }}
                  style={({ pressed }) => [{
                    opacity: pressed ? 0.4 : 1,
                    backgroundColor: '#FF619F',
                    width: Layout.window.width * 0.07,
                    height: Layout.window.width * 0.07,
                    borderRadius: Layout.window.width * 0.015
                  }]}
              />
            </View>
          )}
        {active
          ? (
          <S.TimerText>
            {String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
          </S.TimerText>
            )
          : (
            <Pressable
              onPress={toggleTimer}
              style={({ pressed }) => [{
                opacity: pressed ? 0.4 : 1
              }]}
            >
              <Images
                  name={theme === 'dark' ? ImageNames.playButtonDark : ImageNames.playButtonLight}
                  width={imageSize}
                  height={imageSize}
              />
            </Pressable>
            )}
      </S.CenterTimerContainer>
    </S.Container>
  )
}

export default TimerScreen
