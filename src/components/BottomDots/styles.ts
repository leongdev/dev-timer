import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export const Container = styled.Pressable`
  width: 30%;
  height: ${width * 0.15}px;
  align-self: center;
  flex-direction: row;
  align-items: center ;
  justify-content: center;
`

export const DotFilled = styled.Pressable`
  background: ${({ theme }) => theme.colors.text};
  width: ${width * 0.05}px;
  height: ${width * 0.05}px;
  align-self: center;
  border-radius: ${width}px;
  margin-right: 5px; 
  margin-left: 5px;
`

export const DotOutlined = styled.Pressable`
  border-color: ${({ theme }) => theme.colors.text};
  border-width: 1px;
  background: ${({ theme }) => theme.colors.background};
  width: ${width * 0.05}px;
  height: ${width * 0.05}px;
  align-self: center;
  border-radius: ${width}px;
  margin-right: 5px; 
  margin-left: 5px;
`
