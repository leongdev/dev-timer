
import { useDispatch, useSelector } from 'react-redux'

import SafeContainer from '../../../components/SaveContainer'
import Header from '../../../components/Header'
import { RootTabScreenProps } from '../../../../types'
import { getTimerPreferences, getUserInformation } from '../../../store/selectors/user'
import * as S from './styles'
import { IconPlayer, QuoteClose, QuoteOpened } from '../../../components/SvgImages'
import DropDown from '../../../components/DropDown'
import LottieView from 'lottie-react-native'

import { useTheme } from 'styled-components/native'
import { useEffect, useMemo, useRef, useState } from 'react'
import useResponsive from '../../../hooks/useResponsive'
import Animations from '../../../assets/animations'
import Layout from '../../../../constants/Layout'
import quotesData from '../../../../data/quotes'
import { getCurrentSound } from '../../../store/selectors/sounds'
import SoundBar from '../../../components/SoundBar'
import BaseModal from '../../../components/BaseModal'
import { saveProjectTime } from '../../../store/action/projects'

function AppHome ({ navigation }: RootTabScreenProps<any>) {
  const { currentSound } = useSelector(getCurrentSound)
  const [showStopModal, setShowStopModal] = useState(false)
  const [showQuoteModal, setQuoteModal] = useState(false)
  const [animation, setAnimation] = useState(Animations.circle_2)
  const [isPlaying, setPlaying] = useState(false)
  const [showPause, setShowPause] = useState(false)
  const initialTimer = useSelector(getTimerPreferences)
  const [timerSettings, setTimerSettings] = useState(initialTimer > 0 ? initialTimer * 60 : 60 * 60)
  const [count, setCount] = useState(timerSettings)
  const [showTimer, setShowTimer] = useState(true)

  const [quote, setQuote] = useState(quotesData[0])

  const userInformation = useSelector(getUserInformation)

  const { width } = Layout.window
  const { colors } = useTheme()

  const circleMargin = useResponsive(0.02)

  const circleAnimation = useRef<LottieView>(null)

  const minutes = useMemo(() => Math.floor(count / 60), [count])
  const seconds = useMemo(() => count % 60, [count])

  const dispatch = useDispatch()

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCount((state) => state - 1)
      }, 1000)

      if (count === 0) {
        setQuoteModal(true)
        saveTimeToSelectedProject(true)
        onPressPause()
      }

      return () => {
        clearInterval(interval)
      }
    }
  }, [isPlaying, count])

  useEffect(() => {
    setShowTimer(false)
    setShowTimer(true)
    if (!isPlaying) setCount(initialTimer > 0 ? initialTimer * 60 : 60 * 60)
    else setTimerSettings(initialTimer > 0 ? initialTimer * 60 : 60 * 60)
  }, [initialTimer])

  const onPressPlay = () => {
    toggleQuote()
    setPlaying(true)
    setAnimation(Animations.circle_1)
    circleAnimation.current?.reset()
    circleAnimation.current?.play()
    setTimeout(() => {
      setShowPause(true)
    }, 500)
  }

  const onPressPause = () => {
    circleAnimation.current?.pause()
    setAnimation(Animations.circle_2)
    setShowPause(false)
    setPlaying(false)
    setCount(timerSettings)
    setTimeout(() => {
      setPlaying(false)
    }, 400)
  }

  const toggleQuote = () => {
    const maximum = quotesData.length - 1
    const minimum = 0
    setQuote(quotesData[Math.floor(Math.random() * (maximum - minimum + 1)) + minimum])
  }

  const saveTimeToSelectedProject = (completed: boolean) => {
    dispatch(saveProjectTime(count, completed))
  }

  return (
    <SafeContainer>
      <Header
        title={userInformation.userName}
        subtitle='bora pro código!'
        rightComponent={<DropDown />}
      />

  {/*
  FIXME: Add this later
  <Button
        inverted
        spaceBetween
        iconRight={() =>
          <MaterialCommunityIcons
            size={iconSize}
            color={colors.text}
            name={'chevron-right'}
          />
        }

        title={'Me compre um café ☕️❤️'}
        onPress={() => {

        }}
      /> */}

      {showTimer && (
        <S.Timer
          playingSound={currentSound.name}
        >
          <LottieView
            ref={circleAnimation}
            key={1}
            colorFilters={[
              {
                keypath: 'CIRCLE_A',
                color: colors.text
              },
              {
                keypath: 'CIRCLE_B',
                color: colors.primary
              }
            ]}
            style={{
              position: 'absolute',
              alignSelf: 'center',
              marginRight: circleMargin,
              marginTop: circleMargin
            }}
            source={Animations.circle_3}
          />
          <LottieView
            key={2}
            colorFilters={[
              {
                keypath: 'CIRCLE_A',
                color: colors.text
              },
              {
                keypath: 'CIRCLE_B',
                color: colors.text
              }
            ]}
            source={animation}
            autoPlay
            loop={false}
          />
          {!isPlaying &&
            (
              <S.PlayerContainer onPress={onPressPlay}>
                <IconPlayer
                  colorA={colors.primary}
                  width={width * 0.25}
                  height={width * 0.25}
                />
              </S.PlayerContainer>
            )
          }

          {showPause && (
            <S.PauseContainer onPress={ () => setShowStopModal(true)} >
              <S.Pause/>
            </S.PauseContainer>
          )}

          {isPlaying && (
            <S.TimerText>
              {String(minutes).padStart(2, '0')}:
              {String(seconds).padStart(2, '0')}
            </S.TimerText>
          )}

        </S.Timer>
      )}

      {currentSound.name && (<SoundBar/>)}
      <BaseModal
        onPressBackdrop={() => setQuoteModal(false)}
        isVisible={showQuoteModal}
      >
        <S.QuoteContainer>
          <S.OpenQuoteContainer>
            <QuoteOpened/>
          </S.OpenQuoteContainer>
          <S.QuoteText>{quote.quote} {'\n'} ( {quote.author} )</S.QuoteText>
          <S.CloseQuoteContainer>
            <QuoteClose/>
          </S.CloseQuoteContainer>
        </S.QuoteContainer>
      </BaseModal>

      <BaseModal
        isVisible={showStopModal}
        onPressBackdrop={() => setShowStopModal(false)}
        content={{
          title: 'Salvar Tempo',
          description: 'Deseja salvar o tempo que passou?',
          leftButtonTitle: 'Não',
          rightButtonTitle: 'Sim',
          onPressLeft: () => {
            setShowStopModal(false)
            saveTimeToSelectedProject(false)
            onPressPause()
          },
          onPressRight: () => {
            setShowStopModal(false)
            onPressPause()
          }
        }}
      />
    </SafeContainer>
  )
}

export default AppHome
