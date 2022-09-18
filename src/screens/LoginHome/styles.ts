import styled from 'styled-components/native'
import Layout from '../../../constants/Layout'

const { width } = Layout.window

export const Container = styled.SafeAreaView`
  flex:1; 
  background: ${({ theme }) => theme.colors.background} ; 
`

export const OnboardingScrollView = styled.ScrollView`
  width: 100%;  
`

export const OnboardingView = styled.View`
  height: 100%;
  width: ${width}px;  
`

export const ImageContainer = styled.View`
  align-items: center;
  margin-bottom: ${width * 0.1}px; 
  margin-top: ${width * 0.2}px; 
`

export const PageTitle = styled.Text`
  font-family: 'fira-bold'; 
  width: 80%; 
  align-self: center;
  text-align: center; 
  font-size: ${width * 0.06}px;
  color: ${({ theme }) => theme.colors.text}; 
`

export const PageSubtitle = styled.Text`
  font-family: 'fira-medium'; 
  width: 80%; 
  align-self: center;
  text-align: center; 
  font-size: ${width * 0.05}px;
  color: ${({ theme }) => theme.colors.text}; 
`

export const LogoTitle = styled.Text`
  font-family: 'fira-bold'; 
  width: 80%; 
  align-self: center;
  text-align: center; 
  font-size: ${width * 0.06}px;
  color: ${({ theme }) => theme.colors.text}; 
  letter-spacing: 10px;
  margin-left: 5px;
  margin-top: 6px
`

export const AppVersionTitle = styled.Text`
  font-family: 'fira-regular'; 
  width: 80%; 
  align-self: center;
  text-align: center; 
  font-size: ${width * 0.04}px;
  color: ${({ theme }) => theme.colors.text}; 
  margin-left: 5px;
  margin-top: 6px
`
