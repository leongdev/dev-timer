import styled from 'styled-components/native'
import Layout from '../../../constants/Layout'

const { width } = Layout.window

export const ButtonContainer = styled.TouchableOpacity`
  background: ${({ color }) => color || 'red'};
  width: ${width * 0.13}px;
  height: ${width * 0.13}px; 
  border-radius: ${width * 0.16}px;
  margin-left:  ${width * 0.05}px;
  margin-top: 20px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.text};
  justify-content: center;
`

export const SelectedBorder = styled.View`
  position: absolute;
  width: 80%;
  height: 80%;
  align-self: center;
  border-color:${({ theme }) => theme.colors.text};
  border-width: 3px;
  border-radius: ${width * 0.16}px;
`
