import styled from 'styled-components/native'
import Layout from '../../../constants/Layout'

export const ButtonContainer = styled.Pressable`
  background: ${({ theme }) => theme.colors.text};
  width: 70%;
  align-self: center;
  height: ${Layout.window.width * 0.15}px;
  border-radius: 13px; 
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
export const ButtonContainerInverted = styled.Pressable`
  border:  ${({ theme }) => `2px solid ${theme.colors.text}`};
  border-color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  width: 70%;
  align-self: center;
  height: ${Layout.window.width * 0.15}px;
  border-radius: 13px; 
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const ButtonText = styled.Text`
  font-family: 'fira-medium';
  font-size: ${Layout.window.width * 0.05}px;
  color: ${({ theme }) => theme.colors.background};
  margin-left: 10px;
`

export const ButtonTextInverted = styled.Text`
  font-family: 'fira-medium';
  font-size: ${Layout.window.width * 0.05}px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 10px;
`
