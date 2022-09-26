import styled from 'styled-components/native'
import Layout from '../../../../constants/Layout'
import Fonts from '../../../themes/globalstyles/fonts'

const { width } = Layout.window

export const AdminIconContainer = styled.SafeAreaView`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`

export const QuoteContainer = styled.SafeAreaView`
  width: 87%;
  height: ${width * 0.45}px;
  background: ${({ theme }) => theme.colors.text};
  align-self: center;
  margin-top: 20px;
  border-radius: 13px;
  align-items: center;
  justify-content: center;
`

export const QuoteText = styled.Text`
  width: 87%;
  color: ${({ theme }) => theme.colors.background};
  text-align: center;
  ${Fonts.Title2}
`

export const OpenQuoteContainer = styled.View` 
  position: absolute;
  left: 15px;
  top: 15px;
`

export const CloseQuoteContainer = styled.View` 
  position: absolute;
  right: 15px;
  bottom: 15px;
`

export const Timer = styled.View`
  width: 100%;
  height: ${width * 0.85}px; 
  margin-top: ${({ playingSound }) => playingSound ? width * 0.25 : width * 0.3}px;
  align-items: center;
  justify-content: center;
`

export const PlayerContainer = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: ${width * 0.4}px;
`

export const PauseContainer = styled.TouchableOpacity`
  position: absolute;
  background:  ${({ theme }) => theme.colors.text};
  align-items: center;
  justify-content: center;
  width: 19%;
  height: ${width * 0.19}px;
  border-radius: 300px;
  right: ${width * 0.17}px;
  top: ${width * 0.1}px;
`

export const Pause = styled.View`
  width: 40%;
  height: 40%;
  background:  ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
`

export const TimerText = styled.Text`
  font-family: ${'fira-bold'} ;
  color: ${({ theme }) => theme.colors.background}; 
  font-size:  ${Layout.window.width * 0.15}px;
`
