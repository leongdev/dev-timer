import styled from 'styled-components/native'
import Layout from '../../../constants/Layout'

const { width } = Layout.window

export const Container = styled.TouchableOpacity`
  width: 35%;
  margin-left:  ${width * 0.1}px;
  margin-top:  ${width * 0.1}px;
  height: ${width * 0.4}px; 
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  background: ${({ theme }) => theme.colors.text};
`

export const Text = styled.Text`
  font-size: ${width * 0.2}px;
`

export const PlayingBorder = styled.View`
  position: absolute;
  width: 80%;
  height: 80%;
  border-width: 4px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`
