import styled from 'styled-components/native'
import Layout from '../../../constants/Layout'
import Fonts from '../../themes/globalstyles/fonts'

const { width } = Layout.window

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${width * 0.15}px;
  background: ${({ theme }) => theme.colors.primary};
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  margin-left: 20px;
  ${Fonts.Subtitle} 
`

export const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${'fira-bold'};
  font-size: ${width * 0.04}px; 
`

export const ButtonsContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 45%;
  height: 100%;
`

export const PauseButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 65%; 
  height: 70%;
  margin-left: ${width * 0.02}px;
  margin-right: ${width * 0.04}px;
  border-radius: 13px;
  background: ${({ theme }) => theme.colors.black};
`

export const StopButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 70%;
  border-radius: 13px;
  background: ${({ theme }) => theme.colors.black};
`
