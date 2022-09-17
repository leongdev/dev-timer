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
  margin-top: ${width * 0.3}px; 
`

export const PageTitle = styled.Text`
  font-family: 'fira-bold'; 
  width: 80%; 
  align-self: center;
  text-align: center; 
  font-size: ${width * 0.06}px;
  color: ${({ theme }) => theme.colors.text}; 
`