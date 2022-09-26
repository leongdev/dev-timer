import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentSound } from '../../store/selectors/sounds'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import useResponsive from '../../hooks/useResponsive'
import { pauseSound, playSound, stopSound } from '../../store/action/sounds'
import { Audio } from 'expo-av'
import { useEffect, useState } from 'react'

const sound = new Audio.Sound()

const NoiseBar = () => {
  const [noiseName, setNoiseName] = useState('')
  const iconColor = useResponsive(0.8)
  const { currentSound, isPlaying } = useSelector(getCurrentSound)

  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      try {
        if (isPlaying && currentSound.name.length > 0) {
          if (currentSound.name !== noiseName && noiseName.length > 0) {
            await sound.pauseAsync()
            await sound.unloadAsync()
          }

          await sound.loadAsync(currentSound.sound)
          await sound.playAsync()
          await sound.setIsLoopingAsync(true)
          setNoiseName(currentSound.name)
        } else if (!isPlaying && currentSound.name.length > 0) {
          await sound.pauseAsync()
          await sound.unloadAsync()
        }
      } catch (e) {
        console.log('DEU RUIM ==> ', e)
      }
    })()
  }, [currentSound, isPlaying])

  const onPressPause = () => {
    // @ts-ignore
    dispatch(pauseSound)
  }

  const onPressStop = async () => {
    if (isPlaying && currentSound.name.length > 0) {
      await sound.pauseAsync()
      await sound.unloadAsync()
    }
    // @ts-ignore
    dispatch(stopSound)
  }

  const onPressPlay = () => {
    // @ts-ignore
    dispatch(playSound(currentSound))
  }

  return (
    <S.Container>
      <S.Title>{currentSound.name}</S.Title>
      <S.ButtonsContainer>
        <S.StopButton onPress={onPressStop}>
          <MaterialCommunityIcons
            name={'stop'}
            color={'white'}
            size={iconColor}
          />
        </S.StopButton>
        {isPlaying
          ? (
          <S.PauseButton onPress={onPressPause}>
            <MaterialCommunityIcons
              name={'pause'}
              color={'white'}
              size={iconColor}
            />
            <S.ButtonTitle>
              Pausar
            </S.ButtonTitle>
          </S.PauseButton>
            )
          : (
          <S.PauseButton onPress={onPressPlay}>
            <MaterialCommunityIcons
              name={'play'}
              color={'white'}
              size={iconColor}
            />
            <S.ButtonTitle>
              Tocar
            </S.ButtonTitle>
          </S.PauseButton>
            )
        }

      </S.ButtonsContainer>
    </S.Container>
  )
}

export default NoiseBar
