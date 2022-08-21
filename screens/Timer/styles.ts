import styled from 'styled-components/native'
import Layout from '../../constants/Layout'

export const Container = styled.SafeAreaView`
  flex:1; 
  background: ${({ theme }) => theme.colors.background} ; 
`

export const CenterTimerContainer = styled.View`
  position: absolute;
  background: ${({ theme }) => theme.colors.text}; 
  width: ${Layout.window.width * 0.7}px;
  height: ${Layout.window.width * 0.7}px;
  align-self: center;
  top: ${Layout.window.height * 0.3}px; 
  border-radius: ${Layout.window.width}px;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px; 
  padding-left: 5px;
`

export const TimerText = styled.Text`
  font-family: 'fira-bold' ;
  color: ${({ theme }) => theme.colors.background}; 
  font-size:  ${Layout.window.width * 0.15}px;
`

export const PortalTimerContainer = styled.View`
  position: absolute;
  width: ${Layout.window.width * 2}px;
  height: ${Layout.window.width * 2}px;
  align-self: center;
  bottom: ${Layout.window.height * 0.25}px; 
  border-radius: ${Layout.window.width}px;
  align-items: center;
  justify-content: center; 
`
